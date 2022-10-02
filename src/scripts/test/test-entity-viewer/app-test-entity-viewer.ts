import { EntityType } from "bruce-maps-widget";
import { IAbstractComponentParams, Component, AbstractComponent } from "../../common/decorator/component";
import * as html from "./app-test-entity-viewer.html";
import "./app-test-entity-data.less";
import { KoUtils } from "../../common/utils/ko-utils"

interface IEntityData extends IAbstractComponentParams {
    type: KnockoutObservable<EntityType>;
}

@Component({ name: "app-test-entity-viewer", template: html })
export class AppTestEntityViewer extends AbstractComponent<IEntityData> {
    public SelectedValue: KnockoutObservable<EntityType> = ko.observable();

    public constructor(params: IEntityData) {
        super(params);
        this.init(KoUtils.GetValue(params.type));
    }

    private init(value: EntityType){
        this.SelectedValue = ko.observable(value)
    }
}