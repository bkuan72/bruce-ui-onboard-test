import * as html from "./app-label.html";
import "./app-label.css";

import { IAbstractComponentParams, Component, AbstractComponent } from "../../common/decorator/component";
import { KoUtils } from "../../common/utils/ko-utils";

export interface ILabelParams {
    label: string;
    title: string;
}

export interface ILabelComponentParams extends IAbstractComponentParams {
    value: KnockoutObservable<ILabelParams> | ILabelParams;
}

@Component({ name: "app-label-component", template: html })
export class AppLabel extends AbstractComponent<ILabelComponentParams> {
    public label: string;
    public title: string;
    constructor(params: ILabelComponentParams) {
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
    private init(value: ILabelParams) {
        console.log(value);
        this.label = "";
        this.title = "";
        if (value.label) {
            this.label = value.label;
        }
        if (value.title) {
            this.title = value.title;
        }
    }

}