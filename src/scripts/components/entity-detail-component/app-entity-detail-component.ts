import { IBruceInfo } from "bruce-models/common/bruce-info";
import * as html from "./app-entity-detail-component.html";
import "./app-entity-detail-component.css";

import { IAbstractComponentParams, Component, AbstractComponent } from "../../common/decorator/component";
import { BruceCesium, BruceInfo, CesiumBruceEntity, CesiumMouseEvents, CesiumUtils, ClientFile, EEnvironmentType, EntityAttachment, EntityType, ProjectViewBookmark } from "bruce-maps-widget";
import * as Cesium from "cesium";
import { IEntityData } from "../../interfaces/IEntityData";
import { title } from "process";
import { IEntityTypeAttribute } from "bruce-models/common/entity-type";

export interface IBranchData {
    minimize?: boolean,
    depth: number,
    branchSchema: IEntityTypeAttribute,
    leafSchemas: IEntityTypeAttribute[],
    data: any;
    maxDepth: number;
}

export interface IAppEntityDetailParams extends IAbstractComponentParams {

}

const VIEWER_CONTAINER_ID = "APP_TEST_ENTITY_DATA_VIEWER";

const ACCOUNT_ID = "onboarding";
const ENV = EEnvironmentType.STAGING;
const TEST_VIEW_ID = "TestRenderEntityData2ca2010";

@Component({ name: "app-entity-detail-component", template: html })
export class AppEntityDetail extends AbstractComponent<IAppEntityDetailParams> {
    private viewer: BruceCesium.Viewer;

    public Bookmarks: KnockoutObservable<ProjectViewBookmark[]> = ko.observable([]);
    public SelectedBookmark: KnockoutObservable<ProjectViewBookmark> = ko.observable();
    public SelectedEntity: KnockoutObservable<CesiumBruceEntity> = ko.observable();
    public SelectedData: KnockoutObservable<IEntityData> = ko.observable();

    private branches: IBranchData[] = [];

    constructor(params: IAppEntityDetailParams) {
        super(params);
        this.addDisposable(this.SelectedEntity.subscribe((data) => {
            this.loadData(data);
        }));
        this.addDisposable(this.SelectedBookmark.subscribe((bookmark) => {
            this.viewer.EnableBookmark(bookmark);
        }));
    }

    public rendered(): void {
        super.rendered();
        this.createViewer();
    }

    public dispose(): void {
        super.dispose();
        this.viewer?.Dispose();
    }

    private createViewer(): void {
        const container = document.getElementById(VIEWER_CONTAINER_ID);
        if (!container) {
            console.error("Viewer container not found");
            return;
        }
        const viewer = this.viewer = new BruceCesium.Viewer();
        viewer.Init(container, ACCOUNT_ID, ENV);
        this.renderTestData();
        this.listenSelection();
    }

    private async renderTestData(): Promise<void> {
        const viewer = this.viewer;
        await viewer.LoadProjectView(TEST_VIEW_ID);
        const bookmarks = await viewer.projectView.GetBookmarks(viewer.GetAPIInstance());
        this.Bookmarks(bookmarks);
        this.SelectedBookmark(bookmarks.length ? bookmarks[0] : null);
    }

    private listenSelection(): void {
        const viewer = this.viewer;
        const events = new CesiumMouseEvents(viewer.CesiumViewer);
        events.ClickEvent.Subscribe((data) => {
            const pos = <Cesium.Cartesian2>data.position;
            if (CesiumUtils.Validate2DPosition(pos)) {
                if (this.SelectedEntity()?.bruceMeta) {
                    viewer.visualRegister.Unhighlight(this.SelectedEntity().bruceMeta);
                }
                this.SelectedEntity(null);
                const entities = viewer.DigEntitiesFromMouse(pos, 1);
                const entity = entities.length ? entities[0] : null;
                if (entity) {
                    viewer.visualRegister.Highlight(entity.bruceMeta);
                    this.SelectedEntity(entity);
                }
            }
        });
        events.EnableEventHandling();
    }

    private async loadData(entity: CesiumBruceEntity): Promise<void> {
        this.SelectedData(null);
        const api = this.viewer.GetAPIInstance();
        const entityId = entity?.bruceMeta.EntityID() ?? null;
        const record = entityId ? await BruceInfo.GetById(api, entityId) : null;
        const type = record ? await EntityType.GetByID(api, record.Bruce["EntityType.ID"]) : null;
        const name = await record?.CalculateName(api);
        const attachments = await EntityAttachment.GetByEntityID(api, entityId);
        attachments.sort((a, b) => a.DisplayOrder - b.DisplayOrder);
        const defaultPhoto = attachments.find(x => x["EntityAttachmentType.ID"] == "photo");

        this.DisplayTree({
            record: record,
            type: type,
            photoUrl: defaultPhoto?.ClientFile.getDownloadURL(api),
            name: name
        });
    }

    public TitleData () {
        return {
            label: this.SelectedData().type.Name,
            title: this.SelectedData().type.ID ? this.SelectedData().type.ID : ""
        };
    }


    private initBranch(depth: number, branch: IBranchData, branchSchema: IEntityTypeAttribute, branchData: IBruceInfo) {
        branchSchema.Structure.map((schema) => {
            if (schema.IsImportant) {
                const brData: IBruceInfo = branchData[branchSchema.Key];
                if (brData) {
                    const data = brData[schema.Key];
                    if (data) {
                        if (schema.Type && schema.Type === "Structure") {
                            const newBranch = {depth, branchSchema: schema , leafSchemas: [], data: brData, maxDepth: 0};
                            this.branches.push(newBranch);
                            this.initBranch(depth++, newBranch, schema, brData);
                            return;
                        }
                        branch.leafSchemas.push(schema);
                    }
                }
            }
        });

    }

    private DisplayTree(entityData: IEntityData) {

        if (entityData.type) {
            const dataSchema = entityData.type["DataSchema"];
            let depth = 0;

            this.branches = [];
            if (dataSchema) {
                dataSchema.Structure.map((schema) => {
                    if (schema.IsImportant) {
                        const record = entityData.record.JSON;
                        const data = record[schema.Key];
                        if (data) {
                            if (schema.Type && schema.Type === "Structure") {
                                const nextDepth = depth + 1;
                                const newBranch = {depth: nextDepth, branchSchema: schema , leafSchemas: [], data: record, maxDepth: 0};
                                this.branches.push(newBranch);
                                this.initBranch(nextDepth, newBranch, schema, record);
                                return;
                            }
                        }
                        this.branches.push({depth, branchSchema: schema ,  leafSchemas: [], data: record, maxDepth: 0});
                    }
                });
            }
            let maxDepth = 0;
            this.branches.forEach((branch) => {
                if (branch.depth > maxDepth) {
                    maxDepth = branch.depth;
                }
            });
            this.branches.map((branch) => branch.maxDepth = maxDepth);
        }
        this.SelectedData(entityData);
    }


}