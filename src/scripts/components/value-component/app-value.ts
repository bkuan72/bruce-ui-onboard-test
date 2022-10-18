import * as html from "./app-value.html";
import "./app-value.css";

import { IAbstractComponentParams, Component, AbstractComponent } from "../../common/decorator/component";
import { KoUtils } from "../../common/utils/ko-utils";
import { IEntityTypeAttribute } from "bruce-models/common/entity-type";


export interface IValueParams {
    schema: IEntityTypeAttribute;
    value: any;
    photoUrl?: string;
}

export interface IValueComponentParams extends IAbstractComponentParams {
    data: KnockoutObservable<IValueParams> | IValueParams;
}

@Component({ name: "app-value-component", template: html })
export class AppValue extends AbstractComponent<IValueComponentParams> {
    value: any;
    schema: any;
    photoUrl: string;
    constructor(params: IValueComponentParams) {
        super(params);
        // If it's an observable, we want to detect the change and reload the component.
        // Or do something else, up to your and your component's design!
        if (params.element["value"] != null && ko.isObservable(params.element["value"] )) {
            this.addDisposable(params.element["value"].subscribe((value) => {
                this.init(value);
            }));
        }
        // We want to guarantee a non-observable value so we use the 'GetValue' util.
        this.init(KoUtils.GetValue(params.element["value"]));
    }
    private init(data: IValueParams) {
        console.log(data);
        this.value = data.value;
        this.schema = data.schema;
        if (data.photoUrl) {
            this.photoUrl = data.photoUrl;
        }
    }
}