import * as html from "./app-test-form-item.html";
import "./app-test-form-item.css";
import { IAbstractComponentParams, Component, AbstractComponent } from "../../../common/decorator/component";
import { BruceCesium, BruceInfo, IEntityTypeAttribute,CesiumMouseEvents, CesiumUtils, ClientFile, EEnvironmentType, EntityAttachment, EntityType, ProjectViewBookmark } from "bruce-maps-widget";
import {generateMenuData,MenuDataSchema,findParentKeys} from "../../../common/utils/MenuDataGenerator";
import {UISchema} from "../../../common/data/schema";
import {KoUtils} from "../../../common/utils/ko-utils";
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
@Component({ name: "app-test-form-item", template: html })
export class AppTestForm extends AbstractComponent<ITestFormParams> {
    private value = ko.observable<IEntityData>();
    private FormDataSchema = ko.observableArray<MenuDataSchema>([]);
    constructor(params: ITestFormParams) {
        super(params);
        // the params can be converted  asynchronous by click or synchronous by recurve component
        this.init(params);
    }
    private init(params) {
        const {uiSchema} = params;
        const data = KoUtils.GetValue(params.value);
        
        if (data != null) {
           
            const dataSchema:IEntityTypeAttribute = data?.type?.DataSchema;
    
            let formData = generateMenuData(dataSchema, uiSchema, data?.record).map((item) => {
                item.defaultValue = ko.observable(item.defaultValue)
                return item
            });
            this.FormDataSchema(formData);
            this.value(data);
        }
        this.addDisposable(params.value.subscribe((data) => {
            const dataSchema:IEntityTypeAttribute = data?.type?.DataSchema;
    
            let formData = generateMenuData(dataSchema, uiSchema, data?.record).map((item) => {
                if (item["control"]) {
                    item.defaultValue = ko.observable(item.defaultValue)
                }
                return item
            });
            this.FormDataSchema(formData);
            this.value(data);
        }));
        for(let i in this.FormDataSchema()){
            let item = this.FormDataSchema()[i];
            if (item["control"]) {
                item.defaultValue.subscribe((value) => {
                    // console.log(value);
                    console.log(findParentKeys(item),value)
                    alert(`controled filed ${findParentKeys(item).join(".")} changed to ${value}`)
                });
            }
        }
            
            
    }
    public onChange(data) {
        console.log(data);
    }
}


