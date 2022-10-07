import * as html from "./app-test-navigation.html";
import "./app-test-navigation.css";
import { IAbstractComponentParams, Component, AbstractComponent } from "../../common/decorator/component";
import { BruceInfo, EntityType, BruceMeta, CesiumBruceEntity, } from "bruce-maps-widget";
import { UISchema } from "../../common/data/schema";
import { KoUtils } from "../../common/utils/ko-utils";
import pubsub from "../../common/utils/pubsub";
import * as Cesium from "cesium";
interface CesiumBruceEntityWithPost extends CesiumBruceEntity {
    position: Cesium.Cartesian2;
    bruceInfo: BruceInfo;
} 
export interface TraceNode
{
    key?: string;
    value?: CesiumBruceEntityWithPost | null;
    next?: TraceNode | null;
    prev?: TraceNode | null;
}
class traceNode implements TraceNode
{
    constructor(public key: string, public value: CesiumBruceEntityWithPost, public next: TraceNode | null = null, public prev: TraceNode | null = null)
    {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

interface NavigationParams extends IAbstractComponentParams
{

}
@Component({ name: "app-test-navigation", template: html })
export class AppTestForm extends AbstractComponent<NavigationParams> {
    private capacity = 10;
    private traceMap = {};
    private count = 0;
    private dummyHead: TraceNode = new traceNode("", null);
    private dummyTail: TraceNode = new traceNode("", null);
    private current: KnockoutObservable<TraceNode> = ko.observable(this.dummyHead);
    private showTrace = ko.observable(true);
    constructor(params: NavigationParams)
    {
        super(params);
        this.dummyHead.next = this.dummyTail;
        this.dummyTail.prev = this.dummyHead;
        pubsub.subscription("trace", (entity) =>
        {
            if (!entity) {
                debugger
                this.clearTrace();
                return
            }
            const key = entity?.bruceMeta.EntityID();
            if (key)
            {
                this.addTraceNode(key, entity);
            }
        }).subscribe();
    }
    private clearTrace() {
        this.dummyHead = new traceNode("", null);
        this.dummyTail = new traceNode("", null);
        this.dummyHead.next = this.dummyTail;
        this.dummyTail.prev = this.dummyHead;
        this.count = 0;
        this.traceMap = {};
        this.current(this.dummyHead);
    }
    private addTraceNode(key: string, value: CesiumBruceEntityWithPost)
    {
        let node = this.traceMap[ key ];
        console.log('map',this.traceMap)
        if (node)
        {
            node.value = value;
            this.moveToHead(node);
            this.traceMap[ node.key ] = node;
        } else
        {
            let newNode = new traceNode(key, value);
            this.traceMap[ key ] = newNode;
            this.addToHead(newNode);

            if (this.count == this.capacity)
            {
                this.removeTraceNode(this.dummyTail.prev);
            } else
            {
                this.count++;
            }
        }
        
        this.current(this.dummyHead.next);
        console.log('next',this.dummyHead.next);
    }
    private moveToHead(node: TraceNode)
    {
        this.removeTraceNode(node);
        this.addToHead(node);
    }
    private addToHead(node: TraceNode)
    {
        node.next = this.dummyHead.next;
        node.prev = this.dummyHead;
        this.dummyHead.next.prev = node;
        this.dummyHead.next = node;
    }
    private removeTraceNode(node: TraceNode)
    {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        delete this.traceMap[ node.key ];
    }
    private hideNav() {
        this.showTrace(false);
    }
    private showNav() {
        this.showTrace(true);
    }
}