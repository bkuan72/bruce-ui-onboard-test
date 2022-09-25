import * as html from "./app-test-entity-data.html";
import "./app-test-entity-data.css";

import { IAbstractComponentParams, Component, AbstractComponent } from "../../common/decorator/component";
import { BruceCesium, BruceInfo, CesiumBruceEntity, CesiumMouseEvents, CesiumUtils, ClientFile, EEnvironmentType, EntityAttachment, EntityType } from "bruce-maps-widget";
import * as Cesium from "cesium";

export interface IAppTestEntityDataParams extends IAbstractComponentParams {

}

const VIEWER_CONTAINER_ID = "APP_TEST_ENTITY_DATA_VIEWER";

// TODO: Get a better bookmark for this.
const ACCOUNT_ID = "mush";
const ENV = EEnvironmentType.STAGING;
const TEST_VIEW_ID = "Points7d2f";
const TEST_BOOKMARK_ID = "0b0a0c07-b034-4319-9aa1-efa01e30d210";

interface IEntityData {
    record: BruceInfo;
    type: EntityType;
    photoUrl: string;
    name: string;
}

@Component({ name: "app-test-entity-data", template: html })
export class AppTestEntityData extends AbstractComponent<IAppTestEntityDataParams> {
    private viewer: BruceCesium.Viewer;
    
    public SelectedEntity: KnockoutObservable<CesiumBruceEntity> = ko.observable();
    public SelectedData: KnockoutObservable<IEntityData> = ko.observable();


    constructor(params: IAppTestEntityDataParams) {
        super(params);
        this.addDisposable(this.SelectedEntity.subscribe((data) => {
            this.loadData(data);
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
        const bookmark = bookmarks.find(b => b.ID === TEST_BOOKMARK_ID);
        if (bookmark) {
            viewer.projectView.Settings.BookmarkTransitionSpeed = 0;
            viewer.EnableBookmark(bookmark);
        }
    }

    private listenSelection(): void {
        const viewer = this.viewer;
        const events = new CesiumMouseEvents(viewer.CesiumViewer);
        events.ClickEvent.Subscribe((data) => {
            const pos = <Cesium.Cartesian2>data.position;
            if (CesiumUtils.Validate2DPosition(pos)) {
                if (this.SelectedEntity()) {
                    viewer.visualRegister.Unhighlight(this.SelectedEntity().bruceMeta)
                    this.SelectedEntity(null);
                }
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
        const api = this.viewer.GetAPIInstance();
        const entityId = entity?.bruceMeta.EntityID() ?? null;
        const record = entityId ? await BruceInfo.GetById(api, entityId) : null;
        const type = record ? await EntityType.GetByID(api, record.Bruce["EntityType.ID"]) : null;
        const name = await record?.CalculateName(api);
        const attachments = await EntityAttachment.GetByEntityID(api, entityId);
        attachments.sort((a, b) => {
            return a.DisplayOrder - b.DisplayOrder;
        });
        const defaultPhoto = attachments.find(x => x["EntityAttachmentType.ID"] == "photo");
        this.SelectedData({
            record: record,
            type: type,
            photoUrl: defaultPhoto?.ClientFile.getDownloadURL(api),
            name: name
        })
    }
}