import * as html from "./app-test-tooltip.html";
import "./app-test-tooltip.css";
import { IAbstractComponentParams, Component, AbstractComponent } from "../../common/decorator/component";
import { BruceInfo,IEntityTypeAttribute,  EntityType } from "bruce-maps-widget";
import {generateMenuData,MenuDataSchema} from "../../common/utils/MenuDataGenerator";
import pubsub from "../../common/utils/pubsub";
import {UISchema} from "../../common/data/schema";
import {KoUtils} from "../../common/utils/ko-utils";
interface IEntityData
{
    record: BruceInfo;
    type: EntityType;
    photoUrl: string;
    name: string;
}
// component design to show the menu for important information
interface ITestMenuParams extends IAbstractComponentParams {
    value:KnockoutObservable<IEntityData>;
    uiSchema:UISchema[];
}


@Component({ name: "app-test-tooltip", template: html })
export class AppTestMenu extends AbstractComponent<ITestMenuParams> {
    private value = ko.observable<IEntityData>();
    private MenuDataSchema = ko.observableArray<MenuDataSchema>([]);
    public constructor(params: ITestMenuParams) {
        super(params);
        const {uiSchema} = params;
        const data = KoUtils.GetValue(params.value);
        if (data != null) {
           
            const dataSchema:IEntityTypeAttribute = data?.type?.DataSchema;
    
            let menuData = generateMenuData(dataSchema, uiSchema, data?.record);
     
            this.MenuDataSchema(menuData);
            this.value(data);
        }
        this.addDisposable(params.value.subscribe((data) => {
            console.log('data', data);
            const dataSchema:IEntityTypeAttribute = data?.type?.DataSchema;
            let menuData = generateMenuData(dataSchema, uiSchema, data?.record);
            console.log('menuData', menuData);
            this.MenuDataSchema(menuData);
            this.value(data);
        }));
        
    }
    private openDialog(): void {
        pubsub.publish("DialogVisible", true);
        pubsub.publish("TooltipVisible", false);
    }
    
}