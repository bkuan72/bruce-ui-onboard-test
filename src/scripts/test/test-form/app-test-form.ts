import * as html from "./app-test-form.html";
import "./app-test-form.css";
import { IAbstractComponentParams, Component, AbstractComponent } from "../../common/decorator/component";
import { BruceInfo,EntityType } from "bruce-maps-widget";
import {UISchema} from "../../common/data/schema";
import {KoUtils} from "../../common/utils/ko-utils";
import pubsub from "../../common/utils/pubsub";
interface IEntityData
{
    record: BruceInfo;
    type: EntityType;
    photoUrl: string;
    name: string;
}

interface ITestFormParams extends IAbstractComponentParams {
    value:KnockoutObservable<IEntityData>;
    uiSchema:UISchema[];
}
@Component({ name: "app-test-form", template: html })
export class AppTestForm extends AbstractComponent<ITestFormParams> {
    public value = ko.observable<IEntityData>();
    public uiSchema
    private searchInput = ko.observable<string>('');
    constructor(params: ITestFormParams) {
        super(params);
        this.uiSchema = params.uiSchema;
        const data = KoUtils.GetValue(params.value);

        if (data != null) {
            this.value(data);
            
        }
        this.addDisposable(params.value.subscribe((data) => {
            this.value(data);
        }));  
        this.addDisposable(this.searchInput.subscribe((data) => {
            console.log(data)
            // pubsub.publish('search',data);
        }));
       
    }

    private submitForm(e){
        console.log(e)
        console.log($(e).serializeArray())
        alert(JSON.stringify($(e).serializeArray()))
    }

    private handleCancel(e){
        pubsub.publish("DialogVisible",false);
    }
}


