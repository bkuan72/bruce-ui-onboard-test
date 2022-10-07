import * as html from "./app-test-navigation-item.html";
import "./app-test-navigation-item.css";
import { IAbstractComponentParams, Component, AbstractComponent } from "../../../common/decorator/component";
import { BruceInfo, EntityType, BruceMeta, CesiumBruceEntity } from "bruce-maps-widget";
import {KoUtils} from "../../../common/utils/ko-utils";
import pubsub from "../../../common/utils/pubsub";
import {TraceNode} from "../app-test-navigation";
interface NavigationParams extends IAbstractComponentParams
{
    entity: KnockoutObservable<TraceNode>;
}
@Component({ name: "app-test-navigation-item", template: html })
export class AppTestForm extends AbstractComponent<NavigationParams> {
    private entity = ko.observable<TraceNode>('');
    private address = ko.observable<string>('');
    constructor(params: NavigationParams)
    {
        super(params);
        const data = KoUtils.GetValue(params.entity);
        if (data) {
            this.entity(data);
        }

        this.addDisposable(params.entity.subscribe((data) => {
            console.log(data)
            this.entity(data);
        }));
    }
    private navigationClick() {
        console.log('navigationClick', this.entity())
        pubsub.publish("SelectedEntity", this.entity().value);
    }
}

