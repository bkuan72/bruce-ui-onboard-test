import * as html from "./app-shell.html";
import "./app-shell.css";

import { IAbstractComponentParams, Component, AbstractComponent } from "../common/decorator/component";

export interface IAppShellComponentParams extends IAbstractComponentParams {

}

enum ETest {
    RenderEntityData = "app-entity-detail-component"
}

@Component({ name: "app-shell", template: html })
export class AppShell extends AbstractComponent<IAppShellComponentParams> {
    public Test: KnockoutObservable<string> = ko.observable(ETest.RenderEntityData);
}