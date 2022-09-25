import * as html from "./app-template.html";
import "./app-template.css";

import { IAbstractComponentParams, Component, AbstractComponent } from "../common/decorator/component";

export interface ITemplateComponentParams extends IAbstractComponentParams {

}

@Component({ name: "app-template", template: html })
export class AppTemplate extends AbstractComponent<ITemplateComponentParams> {
    constructor(params: ITemplateComponentParams) {
        super(params);
    }
}