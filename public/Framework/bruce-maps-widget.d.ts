declare module "bruce-maps-widget" {
    export var Version: string;
    export var RecommendedCesiumVersion: string;
    export * from "entry-points/cesium/bruce-cesium";
    export * from "entry-points/cesium/common/cesium-drawing-utils";
    export * from "entry-points/cesium/common/cesium-measure-handler";
    export * from "entry-points/cesium/common/cesium-mouse-events";
    export * from "entry-points/cesium/common/cesium-tileset-utils";
    export * from "entry-points/cesium/common/cesium-entity-utils";
    export * from "entry-points/cesium/common/cesium-bruce-info-utils";
    export * from "entry-points/cesium/common/cesium-utils";
    export * from "entry-points/cesium/getters/cesium-entities-getter-pages";
    export * from "entry-points/cesium/menu-items/cesium-menu-item-arbitrary-tileset-extended";
    export * from "entry-points/cesium/menu-items/cesium-menu-item-bruce-entities-extended";
    export * from "entry-points/cesium/menu-items/cesium-visual-register";
    export * from "entry-points/cesium/viewer/cesium-view-monitor";
    export * from "entry-points/cesium/viewer/cesium-camera-handler";
    export * from "entry-points/cesium/visuals/cesium-bruce-entity";
    export * from "entry-points/cesium/visuals/cesium-generator-model";
    export * from "entry-points/cesium/visuals/cesium-generator-geometry";
    export * from "entry-points/cesium/visuals/cesium-generator-tileset";
    export * from "entry-points/cesium/menu-items/cesium-menu-item-manager";
    export * from "entry-points/cesium/menu-items/cesium-menu-item-loaded-bruce-entities-extended";
    export * from "entry-points/cesium/menu-items/cesium-menu-item-unknown";
    export * from "entry-points/cesium/menu-items/cesium-menu-item-ifs";
    export * from "entry-points/cesium/common/cesium-point-out";
    export * from "entry-points/cesium/common/cesium-render-listener";
    export * from "entry-points/cesium/common/cesium-position-map";
    export * from "entry-points/cesium/common/cesium-polygon-hierarchy-map";
    export * from "entry-points/cesium/common/cesium-polygon-geometry-editor";
    export * from "entry-points/cesium/common/cesium-polygon-geometry-editor2";
    export * from "entry-points/cesium/common/cesium-polygon-geometry-editor3";
    export * from "entry-points/cesium/common/cesium-geometry-editor-point";
    export * from "entry-points/cesium/common/cesium-polygon-geometry-creator";
    export * from "entry-points/cesium/common/cesium-polygon-geometry-creator2";
    export * from "entry-points/cesium/common/cesium-polygon-geometry-restricted-editor";
    export * from "entry-points/cesium/common/cesium-bruce-imagery-provider";
    export * from "entry-points/cesium/common/cesium-bruce-terrain-provider";
    export * from "entry-points/cesium/common/cesium-imagery-handler";
    export * from "entry-points/cesium/common/cesium-terrain-handler";
    export * from "entry-points/cesium/common/cesium-snapped-rectangle-creator";
    export * from "entry-points/cesium/common/cesium-player-mode";
    export * from "entry-points/cesium/common/cesium-cached-picking-height-util";
    export * from "entry-points/cesium/common/cesium-line-creator";
    export * from "entry-points/cesium/common/cesium-shadow-handler";
    export * from "entry-points/cesium/common/cesium-outline3d";
    export * from "entry-points/cesium/common/cesium-ambient-occlusion-handler";
    export * from "entry-points/cesium/common/cesium-polyline-geometry-creator";
    export * from "entry-points/cesium/common/cesium-polyline-geometry-editor";
    export * from "entry-points/cesium/common/cesium-rectangle-drawer";
    export * from "entry-points/common/bruce-meta";
    export * from "entry-points/common/calculator";
    export * from "entry-points/common/entities-getter-interface";
    export * from "entry-points/common/fixed-view-monitor";
    export * from "entry-points/cesium/viewer/cesium-load-manager";
    export * from "entry-points/common/view-monitor-ifs";
    export * from "bruce-models/session/bruce-permission";
    export * from "bruce-models/common/boundaries";
    export * from "bruce-models/common/bruce";
    export * from "bruce-models/common/bruce-headers";
    export * from "bruce-models/common/bruce-info";
    export * from "bruce-models/common/bruce-tileset";
    export * from "bruce-models/common/bruce-tileset-style-mapping";
    export * from "bruce-models/common/camera";
    export * from "bruce-models/common/camera-zoom-control";
    export * from "bruce-models/common/dictionary";
    export * from "bruce-models/common/entity-filter";
    export * from "bruce-models/common/geometry";
    export * from "bruce-models/common/bruce-location";
    export * from "bruce-models/common/polygon";
    export * from "bruce-models/common/camera-position";
    export * from "bruce-models/common/sort-order";
    export * from "bruce-models/common/test";
    export * from "bruce-models/common/transformation";
    export * from "bruce-models/common/utc";
    export * from "bruce-models/common/altitude-options";
    export * from "bruce-models/common/authoring-settings";
    export * from "bruce-models/common/color";
    export * from "bruce-models/common/bruce-list";
    export * from "bruce-models/common/cartesian2";
    export * from "bruce-models/common/cartesian3";
    export * from "bruce-models/common/height-reference";
    export * from "bruce-models/common/bruce-tileset";
    export * from "bruce-models/common/client-file";
    export * from "bruce-models/common/complex-files-filter";
    export * from "bruce-models/common/complex-files-filter-row";
    export * from "bruce-models/common/entity-style";
    export * from "bruce-models/common/entity-type-visual-settings";
    export * from "bruce-models/common/entity-type";
    export * from "bruce-models/common/mouse-event";
    export * from "bruce-models/common/relationship-style";
    export * from "bruce-models/common/rotation";
    export * from "bruce-models/common/style";
    export * from "bruce-models/common/cartographic";
    export * from "bruce-models/common/lod";
    export * from "bruce-models/common/layer";
    export * from "bruce-models/common/bruce-entity-source";
    export * from "bruce-models/common/line";
    export * from "bruce-models/common/environment";
    export * from "bruce-models/common/shadow-settings";
    export * from "bruce-models/common/client-account";
    export * from "bruce-models/common/camera-frustum";
    export * from "bruce-models/session/user-application-settings";
    export * from "bruce-models/common/entity-relationship";
    export * from "bruce-models/common/entity-relationship-type";
    export * from "bruce-models/common/program-key";
    export * from "bruce-models/common/units";
    export * from "bruce-models/common/entity-link";
    export * from "bruce-models/common/entity-comment";
    export * from "bruce-models/common/ucs";
    export * from "bruce-models/menu-item/menu-item";
    export * from "bruce-models/menu-item/menu-item-arbitrary-tileset";
    export * from "bruce-models/menu-item/menu-item-base";
    export * from "bruce-models/menu-item/menu-item-bruce-entities";
    export * from "bruce-models/menu-item/menu-item-bruce-entity";
    export * from "bruce-models/menu-item/menu-item-legend";
    export * from "bruce-models/menu-item/menu-item-single-entity";
    export * from "bruce-models/menu-item/menu-item-utils";
    export * from "bruce-models/menu-item/menu-item-loaded-entities";
    export * from "bruce-models/project-view/project-view";
    export * from "bruce-models/project-view/project-view-bookmark";
    export * from "bruce-models/project-view/project-view-bookmark-settings";
    export * from "bruce-models/project-view/project-view-settings";
    export * from "bruce-models/project-view/project-view-settings-shadows";
    export * from "bruce-models/project-view/project-view-settings-ambient-occlusion";
    export * from "bruce-models/session/cam-account";
    export * from "bruce-models/session/idm-session";
    export * from "bruce-models/tileset/tileset-entity-lod";
    export * from "bruce-models/tileset/tileset";
    export * from "bruce-models/tileset/tileset-transform";
    export * from "bruce-models/tileset/tileset-pointcloud-settings";
    export * from "bruce-models/tileset/tileset-geo-map-settings";
    export * from "bruce-models/tileset/tileset-entities-map-settings";
    export * from "bruce-models/tileset/tileset-model-settings";
    export * from "bruce-models/tileset/tileset-entities-set-settings";
    export * from "bruce-models/tileset-old/tileset-old";
    export * from "bruce-models/tileset-old/tileset-creation-settings";
    export * from "bruce-models/tileset-old/tileset-creation-settings-location";
    export * from "bruce-models/tileset-old/tileset-creation-terrain-source";
    export * from "bruce-models/tileset-old/tileset-settings-old";
    export * from "bruce-models/tileset-old/tileset-settings-etc";
    export * from "bruce-models/tileset-old/tileset-settings-origin";
    export * from "bruce-models/tileset-old/tileset-settings-position-offset";
    export * from "bruce-models/tileset-old/tileset-settings-rotation";
    export * from "bruce-models/tileset-old/tileset-settings-visual";
    export * from "bruce-models/pending-action/pending-action";
    export * from "bruce-models/pending-action/pending-action-progress-message";
    export * from "bruce-models/common/entity-attachment";
    export * from "bruce-models/common/entity-attachment-type";
    export * from "bruce-models/ui-plugin/ui-plugin";
    export * from "utils/bruce-event";
    export * from "utils/bruce-event-disposable";
    export * from "utils/cache-control";
    export * from "utils/limited-cache-control";
    export * from "utils/hash";
    export * from "utils/object-utils";
    export * from "utils/delay-queue";
    export * from "utils/error-utils";
    export * from "utils/keyboard-events";
    export * from "utils/drawing-utils";
    export * from "utils/math-utils";
    export * from "utils/console-utils";
    export * from "utils/console-stack";
    export * from "utils/cursor-css-handler";
    export * from "utils/storage-utils";
    export * from "utils/url-utils";
    export * from "utils/window-url-handler";
    export * from "utils/browser-utils";
    export * from "utils/bruce-path-utils";
    export * from "api/bruce-api";
    export * from "api/session-api";
    export * from "api/abstract-api";
    export * from "api/account-api";
}
declare module "api/session-api" {
    import { AbstractAPI } from "api/abstract-api";
    export class SessionAPI extends AbstractAPI {
        static _instances: SessionAPI[];
        /**
         * Returns session api instance corresponding to provided parameters.
         * @param environment
         */
        static getInstance(environment: string): SessionAPI;
        environment: string;
        BASE_URL: string;
        constructor(environment: string);
        /**
         * Initializes the session api link.
         */
        private init;
        /**
         * Performs GET request with SessionAPI instance prefix.
         * @param url
         * @param onError
         */
        GET(url: string, onError?: (data: any) => void): Promise<any>;
        /**
         * Performs POST request with SessionAPI instance prefix.
         * @param url
         * @param data
         * @param onError
         */
        POST(url: string, data: any, onError?: (data: any) => void): Promise<any>;
        /**
         * Performs PUT request with SessionAPI instance prefix.
         * @param url
         * @param data
         * @param onError
         */
        PUT(url: string, data: any, onError?: (data: any) => void): Promise<any>;
        /**
         * Performs DELETE request with SessionAPI instance prefix.
         * @param url
         * @param onError
         */
        DELETE(url: string, onError?: (data: any) => void): Promise<any>;
        /**
         * Performs POST UPLOAD request with SessionAPI instance prefix.
         * @param url
         * @param blob
         * @param progress
         * @param onError
         */
        UPLOAD<TOutput>(url: string, blob: Blob, progress?: (ev: ProgressEvent) => void, onError?: (data: any) => void): Promise<TOutput>;
    }
}
declare module "bruce-models/common/utc" {
    /**
     * Represents expected data format from API requests.
     */
    export interface IUTC {
        d: number;
        hh: number;
        m: EMonth;
        mm: number;
        ss: number;
        y: number;
    }
    /**
     * The possible values for 'm' in UTC class.
     */
    export enum EMonth {
        January = 1,
        February = 2,
        March = 3,
        April = 4,
        May = 5,
        June = 6,
        July = 7,
        August = 8,
        September = 9,
        October = 10,
        November = 11,
        December = 12
    }
    export class UTC {
        ss: number;
        mm: number;
        hh: number;
        d: number;
        m: EMonth;
        y: number;
        /**
         * Returns current state as raw JSON.
         */
        get JSON(): IUTC;
        get Date(): Date;
        get TotalSeconds(): number;
        /**
         * Returns user readable text to represent how long has passed since recorded time.
         */
        get FormattedPassedTime(): string;
        constructor(rawData: IUTC);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IUTC): void;
        /**
         * Returns bruce utc from given date object.
         * @param date
         */
        static BruceUTCFromDate(date: Date): UTC;
        /**
         * Returns difference in seconds between two given bruce dates.
         * @param bruceDate1
         * @param bruceDate2
         */
        static getDifference(bruceDate1: UTC, bruceDate2: UTC): number;
        /**
         * Returns given seconds formatted for UI.
         * @param seconds
         */
        static FormatSeconds(seconds: number): string;
    }
}
declare module "bruce-models/session/bruce-permission" {
    /**
     * Standalone Bruce account-wide permissions.
     */
    export enum EBrucePermission {
        ADMIN = "ADMIN",
        LOGIN = "LOGIN",
        DELETE_ENTITY_TYPE = "DELETE_ENTITY_TYPE",
        CREATE_ENTITY_TYPE = "CREATE_ENTITY_TYPE",
        UPDATE_ENTITY_TYPE = "UPDATE_ENTITY_TYPE"
    }
    /**
     * Permissions that are not standalone but instead prefix a contextual ID.
     */
    export enum EBrucePermissionPrefixes {
        ACCESS_PROJECT_VIEW = "UIVIEW_",
        MANAGE_PROJECT_VIEW_BOOKMARKS = "UIVIEW_MANAGE_BOOKMARKS_",
        ACCESS_TILESET = "TILESET_"
    }
}
declare module "bruce-models/common/cartesian3" {
    export interface ICartesian3 {
        x: number;
        y: number;
        z: number;
    }
    export class Cartesian3 {
        x: number;
        y: number;
        z: number;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): ICartesian3;
        constructor(rawData: ICartesian3);
        /**
         * (Override)
         * @returns cartesian3 as x,y,z string.
         */
        toString(): string;
        /**
         * Returns a cloned instance.
         */
        Clone(): Cartesian3;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: ICartesian3): void;
        /**
         * Returns if the current position is valid.
         * @returns: true = valid, false = invalid.
         */
        isValid(): boolean;
        /**
         * Validates if a given position doesn't have null values.
         * @param position
         * @returns: true = valid, false = invalid.
         */
        static Validate(position: ICartesian3): boolean;
    }
}
declare module "bruce-models/common/cartesian2" {
    export interface ICartesian2 {
        x: number;
        y: number;
    }
    export class Cartesian2 {
        x: number;
        y: number;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): ICartesian2;
        constructor(rawData: ICartesian2);
        /**
         * (Override)
         * @returns Cartesian2 as x,y string.
         */
        toString(): string;
        /**
         * Returns a cloned instance.
         */
        Clone(): Cartesian2;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: ICartesian2): void;
        /**
         * Returns if the current position is valid.
         * @returns: true = valid, false = invalid.
         */
        isValid(): boolean;
        /**
         * Validates if a given position doesn't have null values.
         * @param position
         * @returns: true = valid, false = invalid.
         */
        static Validate(position: ICartesian2): boolean;
        /**
         * Makes sure first and last position are equal.
         * @param positions
         * @returns closed variant of provided positions.
         */
        static CloseRing(positions: ICartesian2[]): ICartesian2[];
        /**
         * Returns if given ring is closed.
         * @param positions
         */
        static IsClosedRing(positions: ICartesian2[]): boolean;
    }
}
declare module "utils/math-utils" {
    export class MathUtils {
        /**
         * Rounds using epsilon to provided amount of decimals.
         * @param num
         * @param decimals
         * @returns
         */
        static Round(num: number, decimals: number): number;
        /**
         * Returns if a given value is within a range.
         * This is boundaries inclusive.
         * @param val
         * @param lower
         * @param upper
         * @returns
         */
        static IsWithinRange(val: number, lower: number, upper: number): boolean;
        /**
         * Returns a random integer value between a given range.
         * This is boundaries inclusive.
         * @param min
         * @param max
         * @returns
         */
        static RandInt(min: number, max: number): number;
    }
}
declare module "bruce-models/common/boundaries" {
    import { ICartographic } from "bruce-models/common/cartographic";
    import { Geometry } from "bruce-models/common/geometry";
    export interface IBoundaries {
        maxLatitude: number;
        maxLongitude: number;
        minLatitude: number;
        minLongitude: number;
        maxAltitude?: number;
        minAltitude?: number;
    }
    export class Boundaries {
        maxLatitude: number;
        minLatitude: number;
        maxLongitude: number;
        minLongitude: number;
        maxAltitude: number;
        minAltitude: number;
        /**
         * Returns current state as raw JSON.
         */
        get JSON(): IBoundaries;
        /**
         * Returns if geometry is valid.
         * (Checks if lat/lon values aren't null or 0).
         */
        get isValid(): boolean;
        /**
         * Returns if boundaries include altitude values.
         * Warning, this checks if not null, 0 is a valid value.
         */
        get hasAltitude(): boolean;
        constructor(rawData: IBoundaries);
        /**
         * Zeroes the boundary values.
         * @param onlyNulls If only null/undefined values should be zerod.
         */
        Zero(onlyNulls: boolean): void;
        /**
         * Increases boundaries to include provided point.
         * @param point
         */
        IncludePoint(point: ICartographic): void;
        /**
         * Increases boundaries to include provided points.
         * @param points
         */
        IncludePoints(points: ICartographic[]): void;
        /**
         * Increases boundaries instance using given boundaries.
         * @param boundaries
         */
        IncludeBoundaries(boundaries: Boundaries): void;
        /**
         * Returns the boundaries center point.
         * Will return NULL if no center can be calculated.
         */
        CalculateCenter(): ICartographic;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IBoundaries): void;
        /**
         * Creates boundaries instance from given geometry.
         * Returns null if unable to do so.
         * @param geometry
         */
        static FromGeometry(geometry: Geometry): Boundaries;
    }
}
declare module "bruce-models/common/bruce-list" {
    export interface IBruceList<T> {
        Items: T[];
        TotalCount?: number;
    }
}
declare module "bruce-models/common/lod" {
    import { BruceAPI } from "api/bruce-api";
    export interface ILOD {
        "ClientFile.ID": string;
        "Entity.ID": string;
        "LODCategory.Key": string;
        Level: number;
    }
    export class LOD {
        "ClientFile.ID": string;
        "Entity.ID": string;
        "LODCategory.Key": string;
        Level: number;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): ILOD;
        constructor(rawData: ILOD);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: ILOD): void;
        /**
         * Constructs URL to an entity LOD.
         * This method will check if URL is valid before returning.
         * @param entityId
         * @param lodCategoryId
         * @param lodLevel
         * @param strict Strict means it won't dribble down to find any LOD at or under given LOD level.
         */
        static getURL(api: BruceAPI, entityId: string, lodCategoryId: string, lodLevel: number, strict?: boolean): Promise<string>;
        /**
         * Constructs URL to an entity LOD.
         * This method will not check if URL is valid.
         * @param entityId
         * @param lodCategoryId
         * @param lodLevel
         * @param strict Strict means it won't dribble down to find any LOD at or under given LOD level.
         */
        static getUncheckedURL(api: BruceAPI, entityId: string, lodCategoryId: string, lodLevel: number, strict?: boolean): string;
        /**
         * Updates entity LOD file corresponding to given details.
         * @param api
         * @param entityId
         * @param clientFileId
         * @param lodTypeId
         * @param lodLevel
         */
        static UpdateEntityLOD(api: BruceAPI, entityId: string, clientFileId: string, lodTypeId: string, lodLevel: number): Promise<LOD>;
    }
}
declare module "bruce-models/common/bruce" {
    import { ILOD, LOD } from "bruce-models/common/lod";
    import { IUTC, UTC } from "bruce-models/common/utc";
    export interface IBruce {
        "CreatedBy.User.ID": string;
        CreatedTime: IUTC;
        "EntityType.ID": string;
        ID: string;
        LOD?: ILOD[];
        "Layer.ID"?: number[];
    }
    export class Bruce {
        "CreatedBy.User.ID": string;
        CreatedTime: UTC;
        "EntityType.ID": string;
        ID: string;
        "Layer.ID": number[];
        LOD: LOD[];
        /**
         * Returns current state as raw JSON.
         */
        get JSON(): IBruce;
        constructor(rawData: IBruce);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IBruce): void;
    }
}
declare module "bruce-models/common/transformation" {
    export interface ITransformation {
        heading: number;
        pitch: number;
        roll: number;
        scale: number;
    }
    export class Transformation {
        heading: number;
        pitch: number;
        roll: number;
        scale: number;
        /**
         * Returns current state as raw JSON.
         */
        get JSON(): ITransformation;
        constructor(rawData: ITransformation);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: ITransformation): void;
    }
}
declare module "utils/hash" {
    export class Hash {
        /**
         * Hash function.
         * https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
        */
        static Cyrb53Hash(str: string, seed?: number): string;
    }
}
declare module "entry-points/common/bruce-meta" {
    export class BruceMeta {
        entityTypeId: string;
        entityPath: string[];
        private _clientAccountId;
        get clientAccountId(): string;
        set clientAccountId(value: string);
        private _hash;
        /**
         *
         * @param path The path to the top element.
         * @param entityType
         * @param string
         */
        constructor(path: string[], entityType: string, clientAccountId: string);
        /**
         * Extract the id from the path
         */
        static EntityID(path: string[]): string;
        /**
         * Extract the id from the path
         */
        EntityID(): string;
        /**
         * @param path the full item path
         */
        static HashPath(path: string[]): string;
        /**
         * @param path the full item path
         */
        HashPath(): string;
    }
}
declare module "utils/bruce-event" {
    /**
     * Class for creating and dispatching events comfortably.
     */
    export class BruceEvent<TArgs> {
        private _counter;
        private callbacks;
        /**
         * Subscribes to the event.
         * Returns remove callback to call when wanting to unsubscribe.
         * @param callback Callback to call when the event triggers.
         */
        Subscribe(callback: (data: TArgs) => void): (() => void);
        /**
         * Unsubscribes a callback corresponding to a given callback id.
         * @param id
         */
        Unsubscribe(id: number): void;
        /**
         * Notifies all subscribers with given data.
         * @param data
         */
        Trigger(data?: TArgs): void;
        /**
         * Clears all subscriptions.
         */
        Clear(): void;
    }
}
declare module "entry-points/common/view-monitor-ifs" {
    import { BruceEvent } from "utils/bruce-event";
    /**
     * Location using longutude and latitude or radians
     */
    export interface IBounds {
        south: number;
        west: number;
        north: number;
        east: number;
        Units: String;
        IsEqual(other: IBounds): boolean;
    }
    export class IBoundsUtils {
        static IsEqual(a: IBounds, b: IBounds): boolean;
        static IsPointInBounds(point: IPoint, bounds: IBounds): boolean;
    }
    export class CBoundsRadians implements IBounds {
        south: number;
        west: number;
        north: number;
        east: number;
        readonly Units = "Radians";
        IsEqual(other: IBounds): boolean;
    }
    export class CBoundsDegrees implements IBounds {
        south: number;
        west: number;
        north: number;
        east: number;
        readonly Units = "Degrees";
        IsEqual(other: IBounds): boolean;
        static FromRadians(rads: IBounds): IBounds;
    }
    /**
     * Defines a point
     */
    export interface IPoint {
        Units: String;
        longitude: number;
        latitude: number;
        altitude: number;
        IsEqual(other: IPoint): any;
    }
    export class CPointDegrees implements IPoint {
        IsEqual(other: IPoint): boolean;
        longitude: number;
        latitude: number;
        altitude: number;
        readonly Units = "Degrees";
    }
    export interface IAreaOfIntrest {
        area: IBounds;
        poi: IPoint;
    }
    /**
     * Entity generator, abstracts the bruce API access.
     */
    export interface IViewMonitor {
        /**
         * Notifies about the new view area.
         */
        ViewAreaUpdated(): BruceEvent<IAreaOfIntrest>;
        /**
         * Returns view area in raidans WGS84.
         */
        GetViewAreaInDegrees(): IBounds;
        /**
         * Returns camera postions with location in degrees height in meters.
         */
        GetTargetPointInDegrees(): IPoint;
        /**
         * Issues movment update.
         */
        Update(): any;
    }
}
declare module "bruce-models/common/dictionary" {
    export interface IDictionary<T> {
        [index: string]: T;
    }
    /**
     * Dictionary model that provides additonal functionality for interacting with values as if they were keys.
     */
    export class Dictionary<T> {
        private data;
        /**
         * Returns instance as raw data.
         */
        get JSON(): IDictionary<T>;
        constructor(rawData?: IDictionary<T>);
        /**
         * @returns an array of all keys
         */
        GetKeys(): string[];
        /**
         * @returns all values.
         */
        getValues(): any[];
        /**
         * Clears all dictionary data.
         */
        Clear(): void;
        /**
         * Swaps keys and values to create a new dictionary.
         * Values cannot be objects.
         * @returns raw data dictionary.
         */
        getFlippedData(): Dictionary<string>;
        /**
         * Assigns value by given key.
         * @param key
         * @param value
         */
        Assign(key: string, value: any): void;
        /**
         * Deletes if able by given key.
         * @param key
         */
        Delete(key: string): void;
        /**
         * Deletes if able by given value.
         * @param value
         */
        DeleteByValue(value: string): void;
        /**
         * Retrieves data by given key.
         * @param key
         * @returns
         */
        Get(key: string): any;
        /**
         * Retrieves data by given value.
         * @param value
         * @returns
         */
        GetByValue(value: string): string;
    }
}
declare module "bruce-models/common/sort-order" {
    export enum SortOrder {
        None = 0,
        Asc = 1,
        Desc = -1
    }
}
declare module "bruce-models/common/entity-filter" {
    import { IBounds } from "entry-points/common/view-monitor-ifs";
    import { IDictionary } from "bruce-models/common/dictionary";
    import { SortOrder } from "bruce-models/common/sort-order";
    /**
     * Describes parameters needed to instantiate an entity filter.
     */
    export interface IEntityFilterParams {
        orderBy?: any;
        entityTypeId?: string;
        layerIds?: number[];
        bounds?: IBounds;
        pageSize?: number;
        pageIndex?: number;
        lodCategoryId?: string;
        sortOrder?: SortOrder;
        entityTypeConditions?: IDictionary<any>;
    }
    export class EntityFilter {
        entityTypeId: string;
        orderBy: any;
        layerIds: number[];
        bounds: IBounds;
        pageSize: number;
        pageIndex: number;
        lodCategoryId: string;
        sortOrder: SortOrder;
        entityTypeConditions: IDictionary<any>;
        constructor(params: IEntityFilterParams);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(params: IEntityFilterParams): void;
    }
}
declare module "bruce-models/common/complex-files-filter-row" {
    export enum EComplexFilesFilterRowColumn {
        ID = "id",
        Name = "name",
        DateTime = "date",
        MIMEType = "mimeType",
        Size = "size",
        User = "user",
        Extesion = "extension",
        Extension = "extension"
    }
    export enum EComplexFilterRowOperator {
        AND = "AND",
        OR = "OR"
    }
    export interface IComplexFilterRow {
        column: EComplexFilesFilterRowColumn;
        value: any;
        valueOperator: string;
        includes: boolean;
        rowOperator: EComplexFilterRowOperator;
        rows: IComplexFilterRow[];
    }
    export class ComplexFilesFilterRow {
        column: EComplexFilesFilterRowColumn;
        value: any;
        valueOperator: string;
        includes: boolean;
        rowOperator: EComplexFilterRowOperator;
        rows: ComplexFilesFilterRow[];
        constructor(rawData: IComplexFilterRow);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IComplexFilterRow): void;
        /**
         * Returns filter row instances from given raw data.
         * @param rawData
         */
        static FilesFilterRowsFromRaw(rawData: IComplexFilterRow[]): ComplexFilesFilterRow[];
    }
}
declare module "bruce-models/common/complex-files-filter" {
    import { IComplexFilterRow } from "bruce-models/common/complex-files-filter-row";
    export enum EComplexFilesFilterColumn {
        ID = "id",
        Name = "filename",
        DateTime = "datetime",
        MIMEType = "mimeType",
        Size = "size",
        User = "user"
    }
    export enum EComplexFilesFilterSortOrder {
        ASC = "asc",
        DEC = "desc"
    }
    export interface IComplexFilesFilter {
        PageSize?: number;
        PageIndex?: number;
        OrderBy?: EComplexFilesFilterColumn;
        SortOrder?: EComplexFilesFilterSortOrder;
        Purpose?: string;
        FilterRows?: IComplexFilterRow[];
    }
    export class ComplexFilesFilter {
        PageSize: number;
        PageIndex: number;
        OrderBy: EComplexFilesFilterColumn;
        SortOrder: EComplexFilesFilterSortOrder;
        Purpose: string;
        FilterRows: IComplexFilterRow[];
        constructor(rawData: IComplexFilesFilter);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IComplexFilesFilter): void;
    }
}
declare module "bruce-models/common/client-file" {
    import { BruceAPI } from "api/bruce-api";
    import { ComplexFilesFilter } from "bruce-models/common/complex-files-filter";
    import { IDictionary } from "bruce-models/common/dictionary";
    import { IUTC, UTC } from "bruce-models/common/utc";
    export interface IClientFile {
        UploadedTimeUTC: IUTC;
        FileExt: string;
        ID: string;
        MIMEType: string;
        OriginalFileName: string;
        OriginalLength: number;
        "UploadedByUser.ID": string;
        Purpose: string;
    }
    /**
     * Represents a file in the bruce system.
     */
    export class ClientFile {
        ID: string;
        UploadedTimeUTC: UTC;
        FileExt: string;
        MIMEType: string;
        OriginalFileName: string;
        OriginalLength: number;
        "UploadedByUser.ID": string;
        Purpose: string;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IClientFile;
        /**
         * Returns URL to client file download.
         * @param api
         * @returns
         */
        getDownloadURL(api: BruceAPI): string;
        constructor(rawData: IClientFile);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IClientFile): void;
        /**
         * Deletes the client file record.
         * @param api
         */
        Delete(api: BruceAPI): Promise<void>;
        /**
         * Returns client file instance corresponding to a client file id.
         * @param api
         * @param fileId
         * @returns
         */
        static getClientFileById(api: BruceAPI, fileId: string): Promise<ClientFile>;
        /**
         * Returns client file raw data corresponding to a client file id.
         * @param api
         * @param fileId
         * @returns
         */
        static getClientFileRawById(api: BruceAPI, fileId: string): Promise<IClientFile>;
        /**
         * Uploads blob as a client file and returns the record data.
         * @param api
         * @param file
         * @param progress
         * @returns
         */
        static postUploadClientFile(api: BruceAPI, file: Blob, progress?: (ev: ProgressEvent) => void): Promise<ClientFile>;
        /**
         * Delete client files by given file ids.
         * @param api
         * @param fileIds
         */
        static DeleteClientFilesByIDs(api: BruceAPI, fileIds: string[]): Promise<void>;
        /**
         * Returns client file records corresponding to given complex filter.
         * @param api
         * @param complexFilter
         * @returns
         */
        static GetComplexFilteredFiles(api: BruceAPI, complexFilter: ComplexFilesFilter): Promise<ClientFile[]>;
        /**
         * Returns URL to client file download corresponding to a client file id.
         * @param api
         * @param fileId
         */
        static getClientFileURL(api: BruceAPI, fileId: string): string;
        /**
         * Returns dictionary of purpose keys and the amount of files corresponding to that purpose that exist.
         * @param api
         * @returns
         */
        static getFilePurposeCounts(api: BruceAPI): Promise<IDictionary<number>>;
        /**
         * Returns dictionary of file extesion keys and the amount of files corresponding to that purpose that exist.
         * @param api
         * @returns
         */
        static getFileExtensionCounts(api: BruceAPI): Promise<IDictionary<number>>;
        /**
         * Returns dictionary of MIMEType keys and the amount of files corresponding to that purpose that exist.
         * @param api
         * @returns
         */
        static getFileMIMETypeCounts(api: BruceAPI): Promise<IDictionary<number>>;
        /**
         * Returns dictionary of user id keys and the amount of files corresponding to that purpose that exist.
         * @param api
         * @returns
         */
        static getFileUserCounts(api: BruceAPI): Promise<IDictionary<number>>;
    }
}
declare module "bruce-models/pending-action/pending-action-progress-message" {
    import { BruceAPI } from "api/bruce-api";
    import { SortOrder } from "bruce-models/common/sort-order";
    import { IUTC, UTC } from "bruce-models/common/utc";
    /**
     * Represents expected data format from API requests.
     */
    export interface IPendingActionProgressMessage {
        "PendingAction.ID": number;
        ID: number;
        "CreatedBy.Application": string;
        "Created.Time": IUTC;
        "Message.Type": string;
        Message: string;
    }
    /**
     * Represents a progress message record related to a pending action.
     */
    export class PendingActionProgressMessage {
        ID: number;
        PendingActionID: number;
        CreatedByApplication: string;
        CreatedTime: UTC;
        MessageType: string;
        MessageText: string;
        /**
         * Returns current state of progress message as raw JSON data.
         */
        get JSON(): IPendingActionProgressMessage;
        constructor(rawData: IPendingActionProgressMessage);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IPendingActionProgressMessage): void;
        /**
         * Returns progress messages corresponding to a given pending action ID.
         * @param api
         * @param pendingActionId
         * @param order: Default = ASC
         * @param index: Default = 0
         * @param amount: Default = 500
         * @returns
         */
        static GetMessagesForPendingActionID(api: BruceAPI, pendingActionId: number, order?: SortOrder, index?: number, amount?: number): Promise<PendingActionProgressMessage[]>;
    }
}
declare module "bruce-models/pending-action/pending-action" {
    import { BruceAPI } from "api/bruce-api";
    import { IUTC, UTC } from "bruce-models/common/utc";
    import { PendingActionProgressMessage } from "bruce-models/pending-action/pending-action-progress-message";
    export enum EPendingActionStatus {
        InProgress = "IN_PROGRESS",
        Cancelled = "CANCELLED",
        Complete = "COMPLETE",
        Failed = "FAILED"
    }
    /**
     * Represents expected format for data from API requests.
     */
    export interface IPendingAction {
        ID: number;
        "CreatedBy.Application": string;
        "Created.Time": IUTC;
        "CreatedByUser.ID": string;
        Result: string;
        Progress: number;
        "Completed.Time": IUTC;
        Description: string;
        Status: EPendingActionStatus;
        lastUpdated: IUTC;
    }
    /**
     * Represents a record for a running process on the server.
     */
    export class PendingAction {
        ID: number;
        Description: string;
        CreatedByUserID: string;
        CreatedByApplication: string;
        CreatedTime: UTC;
        CompletedTime: UTC;
        Status: EPendingActionStatus;
        Progress: number;
        Result: string;
        progressMessages: PendingActionProgressMessage[];
        lastUpdated: UTC;
        /**
         * Returns current state of pending action as raw JSON data.
         */
        get JSON(): IPendingAction;
        get HasCompleted(): boolean;
        get CompletionPercent(): number;
        get FormattedResult(): string;
        /**
         * Returns formatted for UI elapsed time.
         */
        get Elapsed(): string;
        constructor(rawData: IPendingAction);
        /**
         * Updates instance using given arbitrary JSON data.
         * @param rawData
         * @returns
         */
        Update(rawData: IPendingAction): void;
        /**
         * Notifies to cancel current pending action.
         * Warning: It is up to the individual process to handle the cancel.
         * This means if a process does not check if the action is cancelled then it will continue running.
         */
        CallCancel(api: BruceAPI): Promise<void>;
        /**
         * Loads/reloads and returns progress message records for current pending action.
         */
        LoadMessages(api: BruceAPI): Promise<PendingActionProgressMessage[]>;
        /**
         * Gets current DB record for pending action and runs an update on instance.
         * @param refreshMessages If progress messages should be reloaded.
         */
        Refresh(api: BruceAPI, refreshMessages?: boolean): Promise<void>;
        /**
         * Returns pending actions that may be useful for the current user to see.
         * @param stricter True means only return very recent actions.
         * @returns
         */
        static GetImportantPendingActions(api: BruceAPI, stricter?: boolean): Promise<PendingAction[]>;
        /**
         * Returns pending action record by ID.
         * @param pendingActionId
         * @returns
         */
        static GetPendingActionByID(api: BruceAPI, pendingActionId: number): Promise<PendingAction>;
        /**
         * Returns raw pending action data by ID.
         * @param pendingActionId
         */
        private static GetRawPendingActionByID;
    }
}
declare module "bruce-models/common/authoring-settings" {
    export enum AuthoringTool {
        Model3D = "3DMODEL",
        Point = "POINT",
        Polygon = "POLYGON",
        Polyline = "POLYLINE"
    }
    export interface IAuthoringSettings {
        enabledTools?: AuthoringTool[];
        defaultTool?: AuthoringTool;
        lod?: number;
        lodCategory?: string;
        toolType?: string;
        lodEnabled?: boolean;
    }
}
declare module "bruce-models/common/entity-type-visual-settings" {
    export interface IEntityTypeVisualSettings {
        CustomForms?: IEntityTypeVisualSettingsCustomForms;
    }
    export interface IEntityTypeVisualSettingsCustomForms {
        "LeftClick.CustomForm.ID"?: number;
        "RightClick.CustomForm.ID"?: number;
        "DoubleClick.CustomForm.ID"?: number;
        "MouseHover.CustomForm.ID"?: number;
        "PDFExport.CustomForm.ID"?: number;
    }
}
declare module "bruce-models/common/entity-type" {
    import { BruceAPI } from "api/bruce-api";
    import { IAuthoringSettings } from "bruce-models/common/authoring-settings";
    import { IEntityTypeVisualSettings } from "bruce-models/common/entity-type-visual-settings";
    export enum EEntityTypeAttributeType {
        String = "String",
        Double = "Double",
        Integer = "Integer",
        Datetime = "Datetime",
        Structure = "Structure",
        Geometry = "Geometry"
    }
    export interface IEntityTypeAttribute {
        Key: string;
        Name?: string;
        Type?: EEntityTypeAttributeType;
        Size?: number;
        IsIndexed?: boolean;
        IsArray?: boolean;
        IsImportant?: boolean;
        Description?: string;
        Structure?: IEntityTypeAttribute[];
        IsFamilyAttribute?: boolean;
        IsFamilyAttributeDefault?: boolean;
        Sources?: string[];
    }
    export interface IEntityType {
        ID: string;
        IsDeleted?: boolean;
        Name: string;
        Description?: string;
        Data?: any;
        DataSchema?: IEntityTypeAttribute;
        DisplayNameAttributePath?: string;
        "DisplaySetting.ID"?: number;
        VisualSettings?: IEntityTypeVisualSettings;
        AuthoringSettings?: IAuthoringSettings;
    }
    export class EntityType {
        ID: string;
        IsDeleted: boolean;
        Name: string;
        Description: string;
        Data: any;
        DataSchema: IEntityTypeAttribute;
        DisplayNameAttributePath: string;
        "DisplaySetting.ID": number;
        VisualSettings: IEntityTypeVisualSettings;
        AuthoringSettings: IAuthoringSettings;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IEntityType;
        constructor(rawData: IEntityType);
        /**
         * Returns a cloned instance.
         */
        Clone(): EntityType;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IEntityType): void;
        /**
         * Returns array of attribute paths used for entity names.
         * If none exist then empty array is returned.
         */
        GetEntityNamePaths(): string[];
        /**
         * Returns entity type corresponding to given id.
         * @param api
         * @param entityTypeId
         */
        static GetByID(api: BruceAPI, entityTypeId: string): Promise<EntityType>;
    }
}
declare module "utils/bruce-path-utils" {
    export class BrucePathUtils {
        /**
         * Tries to guess if given string is a legacy path.
         * Legacy paths were dot seperated such as "a.b".
         * @param path
         */
        static GuessIsLegacyPath(path: string): boolean;
        /**
         * Unwraps a given path into an array.
         * @param path
         */
        static ParsePath(path: string): string[];
        /**
         * Unwraps a given legacy path into an array.
         * @param path
         */
        static ParseLegacyPath(path: string): string[];
        /**
         * Wraps a given path into a string.
         * @param path
         */
        static WrapPath(path: string[]): string;
        /**
         * Converts legacy wrapped path into new path.
         * @param path
         */
        static LegacyPathToPath(path: string): string;
    }
}
declare module "bruce-models/common/bruce-info" {
    import { Bruce, IBruce } from "bruce-models/common/bruce";
    import { Boundaries, IBoundaries } from "bruce-models/common/boundaries";
    import { ITransformation, Transformation } from "bruce-models/common/transformation";
    import { Geometry, IGeometry } from "bruce-models/common/geometry";
    import { BruceMeta } from "entry-points/common/bruce-meta";
    import { BruceAPI } from "api/bruce-api";
    import { EntityFilter } from "bruce-models/common/entity-filter";
    import { Polygon } from "bruce-models/common/polygon";
    import { IClientFile } from "bruce-models/common/client-file";
    import { Cartographic, ICartographic } from "bruce-models/common/cartographic";
    import { PendingAction } from "bruce-models/pending-action/pending-action";
    export interface IBruceInfo {
        Bruce?: IBruce;
        location?: ICartographic;
        boundaries?: IBoundaries;
        transform?: ITransformation;
        position?: number[][];
        geometry?: string | IGeometry;
        ClientFile?: IClientFile;
        "ClientFile.ID"?: string;
        "LODCategory.Key"?: string;
        Level?: number;
        title?: string;
        HTMLDescription?: string;
    }
    export class BruceInfo {
        private _raw;
        get raw(): any;
        Bruce: Bruce;
        location: Cartographic;
        position: number[][];
        boundaries: Boundaries;
        transform: Transformation;
        geometry: Geometry;
        HTMLDescription: string;
        /**
         * Returns raw JSON data using current instance data.
         */
        get JSON(): IBruceInfo;
        constructor(rawData: any);
        /**
         * Returns value from raw data by given key.
         * @Warning: Do not request properties that are defaults found in the class.
         * @param key
         */
        GetRawProperty(key: string): any;
        /**
         * Returns a cloned instance.
         * @param randomiseId: If a new random UID should be applied to the clone.
         */
        Clone(randomiseId?: boolean): BruceInfo;
        /**
         * Adds entity layer to the entity. (Tags it).
         * Don't forget to call SaveUpdate().
         * @param layerId
         */
        addEntityLayer(layerId: number): void;
        /**
         * Removes entity layer from the entity. (Removes a tag).
         * Don't forget to call SaveUpdate().
         * @param layerId
         */
        removeEntityLayer(layerId: number): void;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IBruceInfo): void;
        /**
         * Updates or creates bruce record.
         * @param api
         */
        SaveUpdate(api: BruceAPI): Promise<BruceInfo>;
        /**
         * Deletes bruce record associated with this bruce info instance.
         * @param api
         */
        DeleteRecord(api: BruceAPI): Promise<void>;
        /**
         * Checks the entity's entity type settings for any name attribute paths.
         * If end result is null it will return entity ID.
         * @param api
         */
        CalculateName(api: BruceAPI): Promise<string>;
        /**
         * Parses good / bad geometry data into geometry model.
         * @param geometry
         */
        static ParseGeometry(geometry: any): Geometry;
        /**
         * Return bruce record by bruce meta.
         * @param api
         * @param meta
         * @returns
         */
        static GetByMeta(api: BruceAPI, meta: BruceMeta): Promise<BruceInfo>;
        /**
         * Returns bruce record by entity id.
         * @param api
         * @param id
         */
        static GetById(api: BruceAPI, id: string): Promise<BruceInfo>;
        /**
         * Returns bruce records by id list.
         * @param api
         * @param ids
         */
        static GetList(api: BruceAPI, ids: string[]): Promise<BruceInfo[]>;
        /**
         * Returns bruce records by filter.
         * @param api
         * @param filter
         * @returns
         */
        static GetListByFilter(api: BruceAPI, filter: EntityFilter): Promise<BruceInfo[]>;
        /**
         * Generates a grid of entities from given polygon geometry.
         * @param api
         * @param entityTypeId where to put generated entities.
         * @param polygons
         * @param size in meter squared. Default is 0.1 which is 1 hectare. 0.1 = 100x100 m2.
         */
        static GenerateCellEntities(api: BruceAPI, entityTypeId: string, polygons: Polygon[], size?: number): Promise<string[]>;
        /**
        * Gets a list of entities (uses and updates cache).
        * @param entityIds
        */
        static GetEntitiesByList(api: BruceAPI, entityIds: string[]): Promise<BruceInfo[]>;
        /**
         * Returns a list of entities for a specific filter conditions
         */
        static GetEntitiesByFilter(api: BruceAPI, filter: EntityFilter): Promise<BruceInfo[]>;
        /**
         * Returns list of entity ids corresponding to entity instance IDs from given array of entity ID paths.
         * @param entityIdPaths
         */
        static GetInstanceIDs(api: BruceAPI, entityIdPaths: string[][]): Promise<string[]>;
        /**
         * Returns PendingAction which will be populated with entity instance IDs from given array of entity ID paths.
         * @param entityIdPaths
         */
        static GetInstanceIDsPA(api: BruceAPI, entityIdPaths: string[][]): Promise<PendingAction>;
        /**
         * Stacks entity polygons on top of each other and has them cut-out each other so none are intersecting.
         * This will return a new set of bruce info instances with the update geometries, not update the given ones.
         * @param api
         * @param entities
         */
        static DisjointEntities(api: BruceAPI, entities: BruceInfo[]): Promise<BruceInfo[]>;
        /**
         * Truncates given entities to a boundary.
         * @param api
         * @param entities
         * @param boundary
         */
        static TruncateEntities(api: BruceAPI, entities: BruceInfo[], boundary: Geometry): Promise<BruceInfo[]>;
    }
}
declare module "bruce-models/common/polygon" {
    import { BruceAPI } from "api/bruce-api";
    import { ICartographic } from "bruce-models/common/cartographic";
    export enum PolygonFacing {
        in = "in",
        out = "out"
    }
    export interface IPolygon {
        Facing: PolygonFacing;
        LinearRing: string;
        Height?: number;
    }
    export class Polygon {
        Facing: PolygonFacing;
        LinearRing: string;
        Height: number;
        /**
         * Returns current state as raw JSON.
         */
        get JSON(): IPolygon;
        constructor(rawData: IPolygon);
        /**
         * Returns a cloned instance.
         */
        Clone(): Polygon;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IPolygon): void;
        /**
         * Returns points defining the linear ring.
         */
        getParsedCartographicPositions(): ICartographic[];
        /**
         * Returns an array of polygons from a given raw json.
         * @param rawData
         */
        static PolygonArrayFromRaw(rawData: any): Polygon[];
        /**
         * Makes sure given polygon points are closed.
         */
        static Close(positions: ICartographic[]): ICartographic[];
        /**
         * Checks if there are outlier points to remove.
         * @param polygon
         */
        static Fix(polygon: Polygon[]): Polygon[];
        /**
         * Truncates inner rings to outer ring.
         * @param api
         * @param polygon
         */
        static TruncateHoles(api: BruceAPI, polygon: Polygon[]): Promise<Polygon[]>;
    }
}
declare module "bruce-models/common/geometry" {
    import { BruceAPI } from "api/bruce-api";
    import { Boundaries } from "bruce-models/common/boundaries";
    import { ICartesian3 } from "bruce-models/common/cartesian3";
    import { ICartographic } from "bruce-models/common/cartographic";
    import { IPolygon, Polygon } from "bruce-models/common/polygon";
    export interface IGeometry {
        Polygon?: IPolygon[];
        MultiGeometry?: IGeometry[];
        Point?: string;
        LineString?: string;
        MultiSurface?: string;
    }
    export class Geometry {
        Polygon: Polygon[];
        MultiGeometry: Geometry[];
        Point: string;
        LineString: string;
        MultiSurface: string;
        /**
         * Returns if the geometry instance has any sort of valid geometry.
         */
        get hasGeometry(): boolean;
        /**
         * Returns current state as raw JSON.
         */
        get JSON(): IGeometry;
        constructor(rawData: IGeometry);
        /**
         * Empties out the instance to create new geometry.
         */
        Empty(): void;
        /**
        * Updates instance using given raw data.
        * @param rawData
        */
        Update(rawData: IGeometry): void;
        /**
         * Calculates boundaries for the current geometry instance.
         * Returns null if no boundaries can be calculated.
         */
        CalculateBoundaries(): Boundaries;
        /**
         * Calculates center position of all geometry.
         * Returns null if no position can be calculated.
         */
        CalculatePosition(): ICartographic;
        /**
         * Scans through multigeometry and top-layer geometry to try find single instance of polygon.
         * This is useful because an entity can have 1 polygon but it sits in multi-geometry.
         * @param returnNullOnMulti If null should be returned if multiple polygons are found. If false then will return last found case.
         */
        GetPolygon(returnNullOnMulti?: boolean): Polygon[];
        /**
         * If polygon in top-layer isn't null, will return just that.
         * Otherwise it combines all polygons found in multi-geometry and returns them.
         */
        GetPolygons(): Polygon[][];
        /**
         * Calculates area in meters squared of the current geometry instance.
         * On error will return null.
         * @param api
         */
        CalculateArea(api: BruceAPI): Promise<number>;
        /**
         * Simplifies geometry.
         * @param api
         * @param allowedError in meters, higher number will simplify more.
         */
        Simplify(api: BruceAPI, allowedError?: number): Promise<void>;
        /**
         * Returns an array of geometries from a given raw json.
         * @param rawData
         */
        static GeometryArrayFromRaw(rawData: any): Geometry[];
        /**
         * Merges given polygons that share boundaries.
         * If all polygons share boundaries then returned data should only have 1 polygon.
         * @param api
         * @param polygons
         * @param allowance: allowed distance between lines. Default is roughly 10cm.
         */
        static MergePolygons(api: BruceAPI, polygons: Polygon[][], allowance?: number): Promise<Geometry>;
        /**
         * Stacks geometries on top of eachother and cuts any overlapping parts out of eachother.
         * Top geometry will remain uncut.
         * If a geometry was split into two disconnected pieces, then two geometries are returned.
         * If a geometry is fully cut to 0 size, no geometry is returned for that piece.
         * @param api
         * @param geometries
         */
        static DisjoinGeometries(api: BruceAPI, geometries: Geometry[]): Promise<Geometry[]>;
        /**
         * Returns polygon geometry from cartographic positions.
         * Please make sure points are in degrees.
         * @param points
         */
        static PolygonFromCartographicPoints(points: ICartographic[]): Polygon;
        /**
         * Returns line string geometry from given cartographic positions.
         * Please make sure points are in degrees.
         * @param points
         */
        static LineStringFromCartographicPoints(points: ICartographic[]): string;
        /**
         * Returns an array of positions without duplicate positions next to eachother.
         * Eg: [a, a, b, c] would return [a, b, c].
         * @param positions
         */
        static CleanCartesian3Points(positions: ICartesian3[]): ICartesian3[];
        /**
         * Returns an array of positions without duplicate positions next to eachother.
         * Eg: [a, a, b, c] would return [a, b, c].
         * @param positions
         */
        static CleanCartographicPoints(positions: ICartographic[]): ICartographic[];
        /**
         * Takes the string of points we recieve from the bruce JSON and turns it into cartographic positions.
         * TODO: actually make it disconnected rings and not connected ones.
         */
        static ParsePoints(source: string): ICartographic[];
        /**
         * Returns clone of given positions with applied precision.
         * After applying precision it is recommended to run 'CleanCartographicPoints'.
         * @param positions
         * @param decimals
         */
        static SetPrecision(positions: ICartographic[], decimals?: number): ICartographic[];
    }
}
declare module "bruce-models/common/line" {
    import { ICartesian2 } from "bruce-models/common/cartesian2";
    import { ICartesian3 } from "bruce-models/common/cartesian3";
    import { ICartographic } from "bruce-models/common/cartographic";
    export interface ILine2D {
        start: ICartesian2;
        end: ICartesian2;
    }
    export interface ILine3D {
        start: ICartesian3;
        end: ICartesian3;
    }
    export interface ILine2DEquation {
        m: number;
        c: number;
        x?: number;
        y?: number;
    }
    export interface ILine2DBounds {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
    }
    export interface ILineCarto {
        start: ICartographic;
        end: ICartographic;
    }
    export class Line2D {
        start: ICartesian2;
        end: ICartesian2;
        constructor(line: ILine2D);
        /**
         * Returns line instance from given points.
         * @param start
         * @param end
         * @returns
         */
        static LineFromPoints(start: ICartesian2, end: ICartesian2): Line2D;
        /**
         * Returns line instance from given line cartographic.
         * @param lineCarto
         */
        static LineFromLineCarto(lineCarto: ILineCarto): Line2D;
    }
    export class LineCarto {
        start: ICartographic;
        end: ICartographic;
        constructor(line: ILineCarto);
        /**
         * Returns line instance from given points.
         * @param start
         * @param end
         * @returns
         */
        static LineFromPoints(start: ICartographic, end: ICartographic): LineCarto;
        /**
         * Returns line instance from given points.
         * Will convert values to radians.
         * @param start
         * @param end
         * @returns
         */
        static LineFromDegreesPoints(start: ICartographic, end: ICartographic): LineCarto;
        /**
         * Returns a line from a given linearRing.
         * Warning: This function assumes linearRing is in Degrees so it converts points to Radians.
         * Warning: This will only use the first and last points of the linear ring as this is not a polyline.
         * @param linearRing
         */
        static LineFromLinearRing(linearRing: string): LineCarto;
    }
}
declare module "utils/drawing-utils" {
    import { ICartesian2 } from "bruce-models/common/cartesian2";
    import { ILine2D, ILine2DBounds, ILine2DEquation } from "bruce-models/common/line";
    export class DrawingUtils {
        static GetGradientFromLine(line: ILine2D): number;
        static GetEquationFromLine(line: ILine2D): ILine2DEquation;
        static GetPerpindicularEquationFromLineForPoint(line: ILine2D, point: ICartesian2): ILine2DEquation;
        static GetLineIntersection(eq1: ILine2DEquation, eq2: ILine2DEquation): ICartesian2;
        static GetClosestPointToLineOld(line: ILine2D, point: ICartesian2): ICartesian2;
        /**
         * Returns closest point on given line.
         * @param line
         * @param point
         * @returns
         */
        static GetClosestPointToLine(line: ILine2D, point: ICartesian2): ICartesian2;
        /**
         * Returns closest point on given polyline.
         * @Warning: Must provide at least 2 points.
         * @param linePoints
         * @param point
         */
        static GetClosestPointToPolyline(linePoints: ICartesian2[], point: ICartesian2): ICartesian2;
        static GetLineBearingInDegrees(line: ILine2D): number;
        static RadToDeg(radians: number): number;
        static DegToRad(degrees: number): number;
        static IsPointOnLine(line: ILine2D, point: ICartesian2): boolean;
        static GetLineBounds(line: ILine2D): ILine2DBounds;
        static DistanceBetweenPoints(point1: ICartesian2, point2: ICartesian2): number;
        static GetIfLinesIntersect(line1: ILine2D, line2: ILine2D): boolean;
        /**
         * Uses Chaikin's algorithm to smooth a given line of points.
         * Running this smooth will double the total points.
         * Run multiple times to keep smoothing the line.
         *
         * @Warning: Must have at least 3 points to smooth.
         * @param points
         * @param isRing: if this is a ring rather than a line of points.
         */
        static ChaikinSmooth(points: ICartesian2[], isRing?: boolean): ICartesian2[];
    }
}
declare module "bruce-models/common/units" {
    export enum EPosUnit {
        Degrees = "DEGREES",
        Radians = "RADIANS"
    }
    export enum EUnit {
        Metric = "METRIC",
        Imperial = "IMPERIAL"
    }
}
declare module "bruce-models/common/cartographic" {
    import { ICartesian2 } from "bruce-models/common/cartesian2";
    import { EPosUnit } from "bruce-models/common/units";
    export interface ICartographic {
        units?: EPosUnit;
        latitude: number;
        longitude: number;
        altitude: number;
    }
    export class Cartographic {
        units: EPosUnit;
        altitude: number;
        longitude: number;
        latitude: number;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): ICartographic;
        constructor(rawData: ICartographic);
        /**
         * (Override)
         * @returns cartographic as long,lat,alt string.
         */
        toString(): string;
        /**
         * Returns a cloned instance.
         */
        Clone(): Cartographic;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: ICartographic): void;
        /**
         * Returns if a given position is equal to the current one.
         * @param pos
         */
        isEqual(pos: ICartographic): boolean;
        /**
         * Returns new instance of cartographic with converted units.
         * If given units are already the same then no conversion is done.
         * @param units
         */
        toUnit(units: EPosUnit): Cartographic;
        /**
         * Returns if the current position is valid.
         * @returns: true = valid, false = invalid.
         */
        isValid(): boolean;
        /**
         * Returns position as 2d dot.
         * Point is x,y as radian lon,lat.
         */
        getPoint(): ICartesian2;
        /**
         * Returns if two given cartographic positions are equal.
         * @param pos1
         * @param pos2
         */
        static IsEqual(pos1: ICartographic, pos2: ICartographic): boolean;
        /**
         * @deprecated: please use ToUnit.
         */
        static toRadians(carto: ICartographic): ICartographic;
        /**
         * @deprecated: please use ToUnit.
         */
        static toDegrees(carto: ICartographic): ICartographic;
        /**
         * Returns new instance of cartographic with converted units.
         * Warning: If given units are already the same then no conversion is done.
         * Warning: Null units in given carto assumes degrees.
         * @param units
         */
        static ToUnit(units: EPosUnit, carto: ICartographic): ICartographic;
        /**
         * Converts given positions into a Desmos calculator polygon.
         * Warning: If position units are degrees they will be converted to radians.
         * @param cartos
         */
        static toDesmosPolygonString(cartos: ICartographic[]): string;
        /**
         * Uses Chaikin's algorithm to smooth a given line of points.
         * Running this smooth will double the total points.
         * Run multiple times to keep smoothing the line.
         *
         * @Warning: Must have at least 3 points to smooth.
         * @Warning: Heights values will be lost.
         * @param cartos
         */
        static ChaikinSmooth(cartos: Cartographic[]): Cartographic[];
        /**
         * Validates if a given position doesn't have null values.
         * No altitude is allowed.
         * @param carto
         * @returns: true = valid, false = invalid.
         */
        static Validate(carto: ICartographic): boolean;
        /**
         * Returns if given ring is closed.
         * @param positions
         */
        static IsClosedRing(positions: ICartographic[]): boolean;
    }
}
declare module "utils/object-utils" {
    import { ICartesian3 } from "bruce-models/common/cartesian3";
    import { ICartographic } from "bruce-models/common/cartographic";
    export class ObjectUtils {
        /**
         * Generates a UID and returns it.
         */
        static UID(): string;
        /**
         * Generates a tagged UID and returns it.
         * @param tag The tag to prefix with.
         * @param limit The length of the UID (including tag length).
         */
        static TaggedUID(tag: string, limit?: number): string;
        /**
         * Generates a tagged UID and returns it.
         * @param tag The tag to prefix with.
         * @param limit The length of the UID (including tag length).
         * @deprecated Please use 'TaggedUID'.
         */
        static taggedUID(tag: string, limit?: number): string;
        /**
         * Returns if a given arbitrary object is "empty" or not.
         * @param object
         */
        static isEmpty(object: any): boolean;
        /**
         *
         * @param value
         * @param defaultValue
         */
        static nvl<T>(value: T, defaultValue: T): T;
        /**
         * Evaluates given value and if it's empty then returns default, otherwise returns value.
         * @param value
         * @param defaultValue
         */
        static evl<T>(value: T, defaultValue: T): T;
        /**
         * Tries to parse given number or string into float.
         * @param value
         */
        static parseNum(value: string | number): number;
        /**
         *
         * @param key
         * @param source
         */
        static getValue(key: string, source: any): any;
        /**
         * Locates value within obj using given path
         * Usecase example: ObjectUtils.FindValue(info, ["entity", "iBruceInfo", "Bruce", "CreatedTime"]);
         * @param obj
         * @param path
         * @param defaultValue What value to return when value doesn't exist
         */
        static FindValue(obj: any, orgPath: string[], defaultValue?: any): any;
        /**
         * Updates a value in an object at a given path.
         * @param obj
         * @param orgPath
         * @param value
         */
        static UpdateValue(obj: any, orgPath: string[], value: any): void;
        /**
         * makes abc.deff into ${abc.def}
         * @param attribute
         */
        static WrapAtributePathInBashLikeVariable(attribute: string): string;
        /**
         * makes  ${abc.def} into abc.deff
         * in case its just abc.deff it will keep it the same
         * @param attribute
         */
        static UnWrapAtributePathInBashLikeVariable(attribute: string): string;
        /**
         * Takes the string of points we recieve from the bruce JSON and turns it into cartographic positions.
         * TODO: actually make it disconnected rings and not connected ones.
         * @deprecated Please use methods inside of Geometry model.
         */
        static ParsePoints(source: string): ICartographic[];
        /**
         * Returns an array of positions without duplicate positions next to eachother.
         * Eg: [a, a, b, c] would return [a, b, c].
         * @deprecated Please use methods in Geomtry model.
         * @param positions
         */
        static CleanPolylinePoints(positions: ICartesian3[]): ICartesian3[];
        /**
         * Runs stringify -> parse on given data.
         * @param data
         * @param suppressCrash true to return original data on crash and not throw error.
         */
        static Dereference(data: any, suppressCrash?: boolean): any;
        /**
         * Loops through keys of given object and checks if top level values are "bad".
         * Bad values are deleted from object.
         * Bad values are: undefined, empty string, null, NaN and any specified inclusions.
         * Inclusions take priority over exclusions.
         * Does not work on arrays. Will return array as is if an array is passed in as the data.
         * WARNING: Running this will affect original passed data. This does not deference first.
         * @param data
         * @param inclusions what things should count as bad data and be removed.
         * @param exclusions what things should not count as bad data to avoid being removed.
         * @returns
         */
        static CleanData(data: any, inclusions?: any[], exclusions?: any[]): any;
        /**
         * Returns object keys for given data excluding keys matching provided regex exclusion.
         * Default exclusion is "^_|^raw$" which matches for keys starting with "_" or if the key is equal to "raw". Null this to not exclude anything.
         * @param data
         * @param regexExclusion what keys should be excluded when looping through data.
         */
        static GetDataKeys(data: any, regexExclusion?: string): string[];
        /**
         * Updates data using data in updater.
         * Default exclusion is "^_|^raw$" which matches for keys starting with "_" or if the key is equal to "raw". Null this to not exclude anything.
         * WARNING: this method will apply null values or other empty values. Run CleanData method first on updater if this is not what you want.
         * @param data
         * @param updater
         * @param regexExclusion what keys should be excluded when looping through updater.
         */
        static UpdateData(data: any, updater: any, regexExclusion?: string): any;
    }
}
declare module "bruce-models/session/idm-session-access-permissions" {
    import { EBrucePermission } from "bruce-models/session/bruce-permission";
    export interface IIDMSessionAccessPermissions {
        EnabledFeatures?: string[];
        UserGroups?: string[];
    }
    export class IDMSessionAccessPermissions {
        private _raw;
        get raw(): IIDMSessionAccessPermissions;
        EnabledFeatures: string[];
        UserGroups: string[];
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IIDMSessionAccessPermissions;
        constructor(rawData: IIDMSessionAccessPermissions);
        /**
         * Returns a cloned instance.
         */
        Clone(): IDMSessionAccessPermissions;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IIDMSessionAccessPermissions): void;
        /**
         * Returns if given permission is enabled.
         * This is a case insensitive check.
         * @param perm
         */
        isEnabled(perm: string | EBrucePermission): boolean;
    }
}
declare module "bruce-models/session/user-application-settings" {
    import { SessionAPI } from "api/session-api";
    export interface IUserApplicationSettings {
        UserID?: string;
        ClientAccountID?: string;
        Application?: string;
        Settings?: any;
    }
    export class UserApplicationSettings {
        private _raw;
        get raw(): IUserApplicationSettings;
        UserID: string;
        ClientAccountID: string;
        Application: string;
        Settings: any;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IUserApplicationSettings;
        constructor(rawData: IUserApplicationSettings);
        /**
         * Returns a cloned instance.
         */
        Clone(): UserApplicationSettings;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IUserApplicationSettings): void;
        /**
         * Updates or creates record.
         * @param api
         */
        SaveUpdate(api: SessionAPI): Promise<UserApplicationSettings>;
        /**
         * @param api
         * @param userId
         * @param application
         * @returns: application settings for user by application.
         */
        static GetByApplication(api: SessionAPI, userId: string, application: string): Promise<UserApplicationSettings>;
    }
}
declare module "bruce-models/session/idm-session" {
    import { SessionAPI } from "api/session-api";
    import { IUTC, UTC } from "bruce-models/common/utc";
    import { EBrucePermission } from "bruce-models/session/bruce-permission";
    import { IDMSessionAccessPermissions, IIDMSessionAccessPermissions } from "bruce-models/session/idm-session-access-permissions";
    import { UserApplicationSettings } from "bruce-models/session/user-application-settings";
    export interface IIDMSession {
        AccessPermissions: IIDMSessionAccessPermissions;
        HypeportalAccessPermisssions?: IIDMSessionAccessPermissions;
        "ClientAccount.ID": string;
        ID: string;
        IP: string;
        LastAccessTime: IUTC;
        User: any;
    }
    export class IDMSession {
        private _raw;
        get raw(): IIDMSession;
        User: any;
        ID: string;
        IP: string;
        private _accessPermissions;
        get AccessPermissions(): IDMSessionAccessPermissions;
        private _hypeportalAccessPermissions;
        get HypeportalAccessPermissions(): IDMSessionAccessPermissions;
        "ClientAccount.ID": string;
        LastAccessTime: UTC;
        constructor(rawData: IIDMSession);
        /**
         * Updates instance of IDM Session using given raw data.
         * @param rawData
         */
        Update(rawData: IIDMSession): void;
        /**
         * Returns if the current session is anonymous.
         */
        isAnonymous(): boolean;
        /**
         * Returns if given permission is enabled.
         * This is a case insensitive check.
         * @param perm
         */
        isPermissionEnabled(perm: string | EBrucePermission): boolean;
        /**
         * Returns user application settings for a given application.
         * @param api
         * @param application
         */
        GetUserApplicationSettings(api: SessionAPI, application: string): Promise<UserApplicationSettings>;
        /**
         * Creates a session instance from a given session ID.
         * @param sessionID
         */
        static CreateUnknownSessionFromID(sessionID: string): IDMSession;
        /**
         * Creates new session using given user details.
         * @param api
         * @param accountId, optional account id to get account specific permissions for.
         * @param username
         * @param password
         */
        static Login(api: SessionAPI, accountId: string, username: string, password: string): Promise<IDMSession>;
        /**
         * Logs out of current session user.
         * @param api
         */
        static Logout(api: SessionAPI): Promise<void>;
    }
}
declare module "api/abstract-api" {
    import { IDMSession } from "bruce-models/session/idm-session";
    export class AbstractAPI {
        static Session: IDMSession;
        private sessionHeader;
        constructor(sessionHeader: string);
        static Encode(str: string): string;
        /**
         * Creates a GET request to a given url.
         * @param url
         * @param onError
         */
        get(url: string, onError?: (data: any) => void): Promise<any>;
        /**
         * Creates a post request to a given url with given body.
         * @param url
         * @param data
         * @param onError
         */
        post(url: string, data: any, onError?: (data: any) => void): Promise<any>;
        /**
         * Creates a put request to a given url with given body.
         * @param url
         * @param data
         * @param onError
         */
        put(url: string, data: any, onError?: (data: any) => void): Promise<any>;
        /**
         * Creates a delete request to a given url.
         * @param url
         * @param onError
         */
        delete(url: string, onError?: (data: any) => void): Promise<any>;
        /**
         * Uploads given blob file to a given URL.
         * @param url
         * @param blob
         * @param progress
         * @param onError
         * @returns
         */
        upload<TOutput>(url: string, blob: Blob, progress?: (ev: ProgressEvent) => void, onError?: (data: any) => void): Promise<TOutput>;
        /**
         * Uploads given form data file to a given url.
         * @param url
         * @param formData
         * @param progress
         * @param onError
         */
        uploadFormData<TOutput>(url: string, formData: Document | BodyInit, progress?: (ev: ProgressEvent) => void, onError?: (data: any) => void): Promise<TOutput>;
        /**
         * Performs a get request with response type set to blob.
         * @param url
         * @param onError
         */
        getBlob(url: string, onError?: (data: any) => void): Promise<Blob>;
    }
}
declare module "utils/cache-control" {
    /**
     * Generic caching helper.
     * Instantiate for a specific purpose for example entity cache.
     * Then Get by id, if null then request for it from db and Set it so next time Get will find it.
     */
    export class CacheControl<TArgs> {
        private cache;
        fullyFetched: boolean;
        /**
         * Caches given data.
         * @param id Id to retrieve the data back later.
         * @param data
         */
        Set(id: string, data: TArgs): void;
        /**
         * Retrieves cached data by id.
         * @param id
         */
        Get(id: string): TArgs;
        /**
         * Invalidates cached data by id.
         * @param id
         */
        Invalidate(id: string): void;
        /**
         * Invalidates all cached data.
         */
        Clear(): void;
        /**
         * Returns array of cached data ids.
         */
        getKeys(): string[];
    }
}
declare module "bruce-models/common/color" {
    export enum ColorBlendMode {
        HIGHLIGHT = 0,
        REPLACE = 1,
        MIX = 2
    }
    export interface IColorBlendSettings {
        blendMode?: ColorBlendMode;
        blendPercent?: number;
    }
    /**
     * Represents a generic colour in bruce.
     */
    export class Color {
        red: number;
        green: number;
        blue: number;
        alpha: number;
        constructor(r: number, g: number, b: number, alpha?: number);
        /**
         * @returns CSS colour string from current values.
         */
        getCSS(): string;
        /**
         * (Override)
         * @returns CSS colour string from current values.
         */
        toString(): string;
        /**
         * Returns Color instance from given CSS colour string.
         * @param css
         * @returns
         */
        /**
         * Returns Color instance from given rgb values.
         * @param r
         * @param g
         * @param b
         * @returns
         */
        static fromRGB(r: number, g: number, b: number): Color;
        /**
         * Returns Color instance from given rgba values.
         * @param r
         * @param g
         * @param b
         * @param alpha
         * @returns
         */
        static fromRGBA(r: number, g: number, b: number, alpha: number): Color;
    }
}
declare module "entry-points/common/calculator" {
    import { Layer } from "bruce-maps-widget";
    import { Color } from "bruce-models/common/color";
    import { IDictionary } from "bruce-models/common/dictionary";
    export enum FieldPickerType {
        Color = 0,
        Input = 1,
        Gradient = 2,
        Mapping = 3,
        TagColor = 4,
        RandomColor = 5
    }
    export interface IGradientPoint {
        position: number;
        color: string;
    }
    export interface IGradientPickerValueReadonly {
        field: string;
        min: number;
        max: number;
        points: IGradientPoint[];
    }
    export interface IFieldMappingValueReadonly {
        fieldValue: string;
        appliedValue: string;
    }
    export interface IFieldMappingReadonly {
        field: string;
        values: IFieldMappingValueReadonly[];
    }
    export interface IFieldPickerValueReadonly {
        type: FieldPickerType;
        value: string | IGradientPickerValueReadonly | IFieldMappingReadonly;
    }
    export class Calculator {
        private _formulas;
        private _colors;
        getColor(color: string): Color;
        combineColors(color: string, opacity: number): string;
        calcValues(entity: IDictionary<any>, values: IFieldPickerValueReadonly[], layers?: Layer[]): any;
        private getRandomColor;
        private calcGradient;
        private calcMapping;
        /**
        * Checks whether the specified value matches to the specified criterion.
        * @param value The value of the Entity attribute to check against the criteria.
        * @param condition The expected value or the range (e.g. "1-20").
        */
        private isValueMatch;
        calcFormula(entity: IDictionary<any>, expression: string): any;
        calcFormulaOld(entity: IDictionary<any>, expression: string): any;
        calcFormulaNew(entity: IDictionary<any>, expression: string): any;
        isAttributeEscape(expression: string): boolean;
        /**
        * Retrieves the value of the Entity Attribute with the specified Path.
        * @param path
        * @param data
        */
        private getValue;
        static initialize(): void;
        private parseFormula;
    }
}
declare module "bruce-models/common/altitude-options" {
    export enum EAltitudeOption {
        ClampToGround = 0,
        Absolute = 1,
        FromGround = 2
    }
    export interface IAltitudeOption {
        id: EAltitudeOption;
        name: string;
    }
    export enum EAltitudeOptionStr {
        ClampToGround = "clampToGround",
        Absolute = "absolute",
        FromGround = "relativeFromGround"
    }
}
declare module "bruce-models/common/entity-style" {
    import { IFieldPickerValueReadonly } from "entry-points/common/calculator";
    import { IAltitudeOption } from "bruce-models/common/altitude-options";
    import { ColorBlendMode } from "bruce-models/common/color";
    export interface IEntityStyle {
        entityTypeId?: string;
        distance?: number[];
        pointStyle?: IEntityPointStyle;
        polygonStyle?: IEntityPolygonStyle;
        polylineStyle?: IEntityPolylineStyle;
        modelStyle?: IEntityModelStyle;
        tilesetStyle?: IEntityTilesetStyle;
    }
    export interface IEntityPointStyle {
        color: IFieldPickerValueReadonly[];
        size: IFieldPickerValueReadonly[];
        useIcon: boolean;
        iconId: string;
        iconUrl: IFieldPickerValueReadonly[];
        iconScale: IFieldPickerValueReadonly[];
        altitudeOption?: IAltitudeOption;
        hideDistance?: number;
        isSuppressedByCC3D?: boolean;
    }
    export interface IEntityPolygonStyle {
        useExtrusion: boolean;
        extrusionPath: IFieldPickerValueReadonly[];
        fillColor: IFieldPickerValueReadonly[];
        lineColor: IFieldPickerValueReadonly[];
        lineWidth: IFieldPickerValueReadonly[];
        altitudeOption?: IAltitudeOption;
        hideDistance?: number;
    }
    export interface IEntityPolylineStyle {
        lineColor: IFieldPickerValueReadonly[];
        lineWidth: IFieldPickerValueReadonly[];
        altitudeOption?: IAltitudeOption;
        hideDistance?: number;
    }
    export interface IEntityModelStyle {
        lodCategory: string;
        customize: boolean;
        fillColor: IFieldPickerValueReadonly[];
        fillColorBlendMode?: ColorBlendMode;
        fillColorBlendAmount?: number;
        altitudeOption?: IAltitudeOption;
    }
    export interface IEntityTilesetStyle {
        customize: boolean;
        fillColor: IFieldPickerValueReadonly[];
    }
}
declare module "bruce-models/common/relationship-style" {
    import { IFieldPickerValueReadonly } from "entry-points/common/calculator";
    export interface IRelationshipStyle {
        lineColor?: IFieldPickerValueReadonly[];
        lineWidth?: IFieldPickerValueReadonly[];
        heightDistanceRatio?: IFieldPickerValueReadonly[];
        duration?: IFieldPickerValueReadonly[];
    }
}
declare module "bruce-models/common/style" {
    import { IEntityStyle } from "bruce-models/common/entity-style";
    import { IRelationshipStyle } from "bruce-models/common/relationship-style";
    export enum IStyleType {
        Entity = "ENTITY",
        EntityRelationship = "ENTITY_RELATIONSHIP"
    }
    export type IStyle = IEntityStyle & IRelationshipStyle;
    export interface IViewDisplaySettings {
        ID: string;
        Name: string;
        Settings?: IStyle;
        Type: IStyleType;
    }
}
declare module "bruce-models/common/client-account" {
    export interface IClientAccount {
        ID: string;
        Name: string;
        Type: string;
        FullName: string;
    }
    export class ClientAccount {
        private _raw;
        get raw(): IClientAccount;
        ID: string;
        Name: string;
        Type: string;
        FullName: string;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IClientAccount;
        constructor(rawData: IClientAccount);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IClientAccount): void;
    }
}
declare module "bruce-models/common/environment" {
    import { BruceAPI } from "api/bruce-api";
    import { IDMSession, IIDMSession } from "bruce-models/session/idm-session";
    import { ClientAccount, IClientAccount } from "bruce-models/common/client-account";
    /**
     * Deployment goes DEV -> STAGING -> UAT -> PROD.
     *
     * DEV and STG share database.
     * UAT and PROD share database.
     */
    export enum EEnvironmentType {
        DEV = "DEV",
        STAGING = "STG",
        UAT = "UAT",
        PROD = "PROD"
    }
    export interface IEnvironment {
        Environment: string;
        ClientAccount: IClientAccount;
        PageControlLoaded: string;
        RQURI: string;
        RVSuffix: string;
        Resource: string;
        Root: string;
        Session: IIDMSession;
        Settings: any;
        Subdomain: string;
        UIVersion: string;
        UserInterface: string;
        Version: any;
        Debug: boolean;
    }
    /**
     * This class describes data in $$.
     */
    export class Environment {
        private _raw;
        get raw(): IEnvironment;
        ClientAccount: ClientAccount;
        PageControlLoaded: string;
        RQURI: string;
        RVSuffix: string;
        Resource: string;
        Root: string;
        private _session;
        get Session(): IDMSession;
        set Session(value: IDMSession);
        Settings: any;
        Subdomain: string;
        UIVersion: string;
        UserInterface: string;
        Version: any;
        Environment: EEnvironmentType;
        Debug: boolean;
        get apiInstance(): BruceAPI;
        constructor(rawData: IEnvironment);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IEnvironment): void;
        /**
         * Returns if session is not an anonymous user.
         */
        getIsLoggedIn(): boolean;
        /**
         * Returns if session is account admin.
         */
        getIsAdmin(): boolean;
        /**
         * Returns if session is hypeportal admin.
         */
        getIsSuperAdmin(): boolean;
        /**
         * Returns if the environment was marked as debug mode.
         */
        getIsDebug(): boolean;
        getVersion(): number;
        ParseVersion(versionStr: string): number;
        /**
         * @param version
         * @param debugState: if current version is localhost it will default to this state.
         * @returns: if given version is equal or after current UI version.
         */
        IsVersionEqualOrAfter(version: number, debugState?: boolean): boolean;
        /**
         * @param version
         * @param debugState: if current version is localhost it will default to this state.
         * @returns: if given version is equal to the current UI version.
         */
        IsVersionEqual(version: number, debugState?: boolean): boolean;
        /**
         * @param version
         * @param debugState: if current version is localhost it will default to this state.
         * @returns: if given version is equal or before current UI version.
         */
        IsVersionEqualOrBefore(version: number, debugState?: boolean): boolean;
    }
}
declare module "utils/storage-utils" {
    export enum EStorageUnit {
        MB = 1000000,
        GB = 1000000000,
        B = 1
    }
    export class StorageUtils {
        /**
         * Converts given bytes to megabytes.
         * @param bytes
         */
        static BytesToMegabytes(bytes: number): number;
        /**
         * Converts given megabytes to bytes.
         * @param megabytes
         */
        static MegabytesToBytes(megabytes: number): number;
        /**
         * Converts given gigabytes to bytes.
         * @param gigabytes
         */
        static GigabytesToBytes(gigabytes: number): number;
        /**
         * Returns an object's size as a string in bytes.
         * If cannot be converted to string, it will return -1.
         * @param obj
         */
        static ObjectSizeAsText(obj: any): number;
    }
}
declare module "utils/limited-cache-control" {
    export class LimitedCacheControl<TArgs> {
        private cache;
        private cacheOrder;
        fullyFetched: boolean;
        private allowedSizeInBytes;
        private unknownSizeDefault;
        private currentSize;
        private expireyCleanerInterval;
        /**
         * @param allowedSizeInBytes: default value is 1GB.
         * @param unknownSizeDefault: default value is 1MB. This is for objects that fail to have their size calculated.
         */
        constructor(allowedSizeInBytes?: number, unknownSizeDefault?: number);
        /**
         * Caches given data.
         * @param id: Id to retrieve the data back later.
         * @param data:
         * @param duration: Duration in seconds for how long this cached data is valid for. Value smaller or equal to 0 wont expire.
         */
        Set(id: string, data: TArgs, duration?: number): void;
        /**
         * Retrieves cached data by id.
         * @param id
         */
        Get(id: string): TArgs;
        /**
         * Invalidates cached data by id.
         * @param id
         */
        Invalidate(id: string): void;
        /**
         * Invalidates all cached data.
         */
        Clear(): void;
        /**
         * Returns array of cached data ids.
         * Warning: This will include data that may or may not be expired.
         */
        getKeys(): string[];
        /**
         * Returns index of set cache data by it's key.
         * @param key
         */
        private locateOrderIndex;
        /**
         * Removes record in cache order matching given key.
         * @param key
         */
        private removeOrderRecord;
        /**
         * @param obj
         * @returns: given object's size in bytes.
         */
        private getByteSize;
        /**
         * Disposes the cache control and stops cleaners.
         */
        Dispose(): void;
        /**
         * Starts periodic checks on limited duration cache.
         */
        private startExpireyCleaner;
        /**
         * Stops the periodic cache checker.
         */
        private stopExpireyCleaner;
        /**
         * Checks a few records for expirey and removes expired ones.
         * If no expired records are found then automatic cleaner is stopped.
         */
        private doExpireyClean;
    }
}
declare module "bruce-models/common/camera-position" {
    export interface ICameraPosition {
        latitude: string;
        longitude: string;
        height: string;
    }
    export class CameraPosition {
        latitude: number;
        longitude: number;
        height: number;
        /**
         * Returns raw JSON data using current instance data.
         */
        get JSON(): ICameraPosition;
        /**
         * Returns cloned copy of instance.
         */
        clone(): CameraPosition;
        constructor(rawData: ICameraPosition);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: ICameraPosition): void;
    }
}
declare module "bruce-models/common/camera" {
    import { CameraPosition, ICameraPosition } from "bruce-models/common/camera-position";
    export interface ICamera {
        position: ICameraPosition;
        heading: number;
        pitch: number;
        roll: number;
    }
    export class Camera {
        position: CameraPosition;
        heading: number;
        pitch: number;
        roll: number;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): ICamera;
        constructor(rawData: ICamera);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: ICamera): void;
    }
}
declare module "bruce-models/common/camera-frustum" {
    export enum ECameraFrustum {
        Perspective = 0,
        Orthographic = 1
    }
}
declare module "bruce-models/project-view/project-view-bookmark-settings" {
    import { ECameraFrustum } from "bruce-models/common/camera-frustum";
    export interface IProjectViewBookmarkSettings {
        selectedItems?: string[];
        selectedItemIds?: string[];
        selectedStrictItemIds?: any[];
        order?: number;
        hidden?: string[];
        drawnRelationEntityIDs?: string[];
        imagery?: string | any[];
        terrain?: string;
        globeColor?: string;
        shadows?: boolean;
        groundOcclusion?: boolean;
        ambientOcclusion?: boolean;
        markup?: any;
        cameraFrustum?: ECameraFrustum;
        displayTimeline?: boolean;
        timelineSettings?: any;
        timelinePointer?: any;
    }
    export class ProjectViewBookmarkSettings {
        ambientOcclusion: boolean;
        cameraFrustum: ECameraFrustum;
        displayTimeline: boolean;
        drawnRelationEntityIDs: string[];
        globeColor: string;
        groundOcclusion: boolean;
        hidden: string[];
        imagery: any[];
        terrain: string;
        markup: any;
        selectedItemIds: string[];
        shadows: boolean;
        timelinePointer: any;
        timelineSettings: any;
        selectedItems: string[];
        selectedStrictItemIds: any[];
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IProjectViewBookmarkSettings;
        constructor(rawData: IProjectViewBookmarkSettings);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IProjectViewBookmarkSettings): void;
    }
}
declare module "bruce-models/project-view/project-view-bookmark" {
    import { IUTC, UTC } from "bruce-models/common/utc";
    import { Camera, ICamera } from "bruce-models/common/camera";
    import { IProjectViewBookmarkSettings, ProjectViewBookmarkSettings } from "bruce-models/project-view/project-view-bookmark-settings";
    import { BruceAPI } from "api/bruce-api";
    export interface IProjectViewBookmark {
        ID?: string;
        Camera?: ICamera;
        "Created.ByUser.ID"?: string;
        "Created.Date"?: IUTC;
        Location?: {
            Latitude: number;
            Longitude: number;
        };
        Note?: string;
        Settings?: IProjectViewBookmarkSettings;
        Title?: string;
        "UI.View.ID"?: string;
        DisplayOrder?: number;
        "Screenshot.ClientFile.ID"?: string;
        "UI.SlideGroup.ID"?: number;
    }
    export class ProjectViewBookmark {
        Camera: Camera;
        "Created.ByUser.ID": string;
        "Created.Date": UTC;
        DisplayOrder: number;
        ID: string;
        "Screenshot.ClientFile.ID": string;
        Settings: ProjectViewBookmarkSettings;
        Title: string;
        "UI.View.ID": string;
        "UI.SlideGroup.ID": number;
        Location: any;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IProjectViewBookmark;
        constructor(rawData: IProjectViewBookmark);
        /**
         * @param api
         * @returns: URL to the client file associated with the bookmark screenshot.
         */
        getScreenshotURL(api: BruceAPI): string;
        /**
         * Updates instance of this Project View using given raw data.
         * @param rawData
         */
        Update(rawData: IProjectViewBookmark): void;
        /**
         * Saves or creates record for current instance.
         * Warning: If no ID is set then a random one will be generated.
         * @param api
         */
        SaveUpdate(api: BruceAPI): Promise<ProjectViewBookmark>;
        /**
         * Deletes bookmark record corresponding to current bookmark id.
         * @param api
         */
        DeleteRecord(api: BruceAPI): Promise<void>;
        /**
         * Sets the current bookmark as the project view default.
         * @param api
         */
        SetAsDefault(api: BruceAPI): Promise<void>;
        /**
         * Returns all bookmarks for a project view.
         * @param api
         * @param viewId
         */
        static GetBookmarksForProjectView(api: BruceAPI, viewId: string): Promise<ProjectViewBookmark[]>;
        /**
         * Updates the bookmarks order for a project view.
         * @param api
         * @param viewId
         * @param bookmarkIds: bookmark ids in the new order.
         */
        static SetBookmarksOrder(api: BruceAPI, viewId: string, bookmarkIds: string[]): Promise<void>;
        /**
         * Updates what bookmark is marked as default for a project view.
         * @param api
         * @param viewId
         * @param bookmarkId
         */
        static SetDefaultBookmark(api: BruceAPI, viewId: string, bookmarkId: string): Promise<void>;
        /**
         * Deletes bookmark record corresponding to given view and bookmark ids.
         * @param api
         * @param viewId
         * @param bookmarkId
         */
        static DeleteRecordByID(api: BruceAPI, viewId: string, bookmarkId: string): Promise<void>;
    }
}
declare module "bruce-models/common/bruce-tileset-style-mapping" {
    import { IEntityStyle } from "bruce-models/common/entity-style";
    export interface IBruceTilesetStyleMapping {
        EntityTypeID: string;
        StyleID: number;
        Style: IEntityStyle;
    }
    export class BruceTilesetStyleMapping {
        EntityTypeID: string;
        StyleID: number;
        Style: IEntityStyle;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IBruceTilesetStyleMapping;
        constructor(rawData: any);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: any): void;
        /**
         * Returns an array of style mapping from a given raw json.
         * @param rawData
         */
        static StyleMappingArrayFromRaw(rawData: any): BruceTilesetStyleMapping[];
    }
}
declare module "bruce-models/common/camera-zoom-control" {
    import { IEntityStyle } from "bruce-models/common/entity-style";
    import { IStyle } from "bruce-models/common/style";
    /**
     * Options of how an Entity can be rendered based on Camera Zoom.
     */
    export enum ECameraZoomControlDisplayType {
        Hidden = "hidden",
        Point = "point",
        Geometry = "geometry",
        Model3D = "3d",
        Polygon = "forcepolygon",
        GeometryOld = "polygon"
    }
    export interface ICameraZoomControl {
        MinZoom?: number;
        MaxZoom?: number;
        DisplayType?: ECameraZoomControlDisplayType;
        StyleID?: number;
        Style?: IEntityStyle;
        LODCategoryID?: string;
        LODLevel?: number | string;
    }
    /**
     * Describes a single row of camera zoom control.
     * Typically a saved object of zoom control is an array of camera zoom controls.
     */
    export class CameraZoomControl {
        DisplayType: ECameraZoomControlDisplayType;
        LODCategoryID: string;
        LODLevel: number;
        MaxZoom: number;
        MinZoom: number;
        StyleID: number;
        Style: IStyle;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): ICameraZoomControl;
        constructor(rawData: ICameraZoomControl);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: ICameraZoomControl): void;
        /**
         * Returns an array of zoom control rows from a given raw json.
         * @param rawData
         */
        static ZoomControlRowsFromRaw(rawData: ICameraZoomControl[]): CameraZoomControl[];
    }
}
declare module "bruce-models/menu-item/menu-item-legend" {
    import { BruceAPI } from "api/bruce-api";
    import { BruceTilesetStyleMapping } from "bruce-models/common/bruce-tileset-style-mapping";
    import { CameraZoomControl } from "bruce-models/common/camera-zoom-control";
    import { IStyle } from "bruce-models/common/style";
    export interface IMenuItemLegend {
        model3d: boolean;
        point: boolean;
        polygon: boolean;
        polylines: boolean;
        tileset3d: boolean;
    }
    /**
     * Describes what kind of legends should be visible for a menu item.
     */
    export class MenuItemLegend {
        model3d: boolean;
        modelColor: string;
        point: boolean;
        pointSize: number;
        pointColor: string;
        polygon: boolean;
        polygonFill: string;
        polygonStroke: string;
        polygonStrokeWidth: number;
        polylines: boolean;
        polylineColor: string;
        polylineWidth: number;
        tileset3d: boolean;
        tilesetColor: string;
        /**
         * Returns if any legend type is enabled.
         */
        get Enabled(): boolean;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IMenuItemLegend;
        constructor(rawData: IMenuItemLegend);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IMenuItemLegend): void;
        /**
         * Applies zoom control to legend values.
         * Warning: Only applies values to enabled legend types.
         * @param api
         * @param zoomControl
         * @param entityTypeId Used to get default style.
         */
        LoadValuesFromZoomControl(api: BruceAPI, zoomControl: CameraZoomControl[], entityTypeId: string): Promise<void>;
        /**
         * Applies tileset mapping to legend values.
         * Warning: Only applies values to enabled legend types.
         * @param api
         * @param mapping
         * @param fallback Menu item fallback style
         */
        LoadValuesFromMapping(api: BruceAPI, mapping: BruceTilesetStyleMapping[], fallback: IStyle): Promise<void>;
        /**
         * Applies style to legend values.
         * Warning: Only applies values to enabled legend types.
         * @param style
         */
        LoadValuesFromStyle(style: IStyle): void;
    }
}
declare module "bruce-models/menu-item/menu-item-base" {
    import { IMenuItemLegend, MenuItemLegend } from "bruce-models/menu-item/menu-item-legend";
    /**
     * The types of menu items that are available.
     */
    export enum MenuItemType {
        Cesium3DTileset = "Cesium3DTileset",
        BruceEntity = "BruceEntity",
        LoadedBruceEntity = "LoadedBruceEntity",
        SingleEntity = "SingleEntity",
        GeometricBruceEntity = "GeometricBruceEntity",
        ArbitraryTileset = "ArbitraryTileset",
        OSMBuildingsTileset = "OSMBuildingsTileset",
        Custom = "Custom",
        ModelTileset = "ModelTileset"
    }
    export enum RenderPriority {
        Low = 0,
        Medium = 1,
        High = 2
    }
    export interface IMenuItemBase {
        id: string;
        Caption: string;
        Children: IMenuItemBase[];
        Type: MenuItemType;
        hideChildren: boolean;
        legend: IMenuItemLegend;
        authoringEnabled: boolean;
        LabelColor: string;
        enabled: boolean;
        /**
         * What priority does this menu item have compared to other menu items that draw the same entities.
         * The highest priority menu item will be used to for display an entity's visual.
         */
        renderPriority: RenderPriority;
    }
    export class MenuItemBase {
        id: string;
        Caption: string;
        Children: MenuItemBase[];
        Type: MenuItemType;
        hideChildren: boolean;
        legend: MenuItemLegend;
        authoringEnabled: boolean;
        LabelColor: string;
        enabled: boolean;
        /**
         * What priority does this menu item have compared to other menu items that draw the same entities.
         * The highest priority menu item will be used to for display an entity's visual.
         */
        renderPriority: RenderPriority;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IMenuItemBase;
        constructor(rawData: any);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: any): void;
        /**
         * Enables or disables this menu item and it's children.
         * @param state
         */
        SetEnabled(state: boolean): void;
    }
}
declare module "bruce-models/menu-item/menu-item-bruce-entity" {
    import { BruceInfo, IBruceInfo } from "bruce-models/common/bruce-info";
    export interface IMenuItemBruceEntity {
        "EntityType.ID": string;
        EntityId: string;
        Entities: IBruceInfo[];
        ExpandLayers: boolean;
    }
    /**
     * Describes settings related to entity information for a menu item.
     */
    export class MenuItemBruceEntity {
        "EntityType.ID": string;
        EntityId: string;
        Entities: BruceInfo[];
        ExpandLayers: boolean;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IMenuItemBruceEntity;
        constructor(rawData: any);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: any): void;
    }
}
declare module "bruce-models/menu-item/menu-item-bruce-entities" {
    import { IMenuItemBase, MenuItemBase } from "bruce-models/menu-item/menu-item-base";
    import { IMenuItemBruceEntity, MenuItemBruceEntity } from "bruce-models/menu-item/menu-item-bruce-entity";
    import { CameraZoomControl, ICameraZoomControl } from "bruce-models/common/camera-zoom-control";
    import { BruceAPI } from "api/bruce-api";
    export interface IMenuItemBruceEntities extends IMenuItemBase {
        BruceEntity: IMenuItemBruceEntity;
        CameraZoomSettings: ICameraZoomControl[];
        showAllLayers: boolean;
        showAllLayersExcludeBelow: boolean;
        tagIds: number[];
        styleId: number;
    }
    export class MenuItemBruceEntities extends MenuItemBase {
        BruceEntity: MenuItemBruceEntity;
        CameraZoomSettings: CameraZoomControl[];
        showAllLayers: boolean;
        showAllLayersExcludeBelow: boolean;
        tagIds: number[];
        styleId: number;
        /**
         * If polygons should have fix method automatically run on them before rendering.
         */
        fixPolygons: boolean;
        /**
         * Returns the entity type id for this menu item.
         */
        get entityTypeId(): string;
        /**
         * Returns the lod category id for this menu item.
         */
        get lodCategoryId(): string;
        /**
         * Returns zoom control for this menu item.
         */
        get zoomControl(): CameraZoomControl[];
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IMenuItemBruceEntities;
        constructor(rawData: any);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: any): void;
        /**
         * Uses zoom control to load values for the menu item legends.
         */
        LoadLegendValues(api: BruceAPI): Promise<void>;
    }
}
declare module "bruce-models/common/bruce-tileset" {
    export interface IBruceTileset {
        ClientAccountID: string;
        TilesetID: string;
        TilesetName: string;
        TilesetURL: string;
    }
    export class BruceTileset {
        ClientAccountID: string;
        TilesetID: string;
        TilesetName: string;
        TilesetURL: string;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IBruceTileset;
        constructor(rawData: any);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: any): void;
    }
}
declare module "bruce-models/menu-item/menu-item-arbitrary-tileset" {
    import { IMenuItemBase, MenuItemBase } from "bruce-models/menu-item/menu-item-base";
    import { IMenuItemBruceEntity, MenuItemBruceEntity } from "bruce-models/menu-item/menu-item-bruce-entity";
    import { BruceTileset, IBruceTileset } from "bruce-models/common/bruce-tileset";
    import { BruceTilesetStyleMapping, IBruceTilesetStyleMapping } from "bruce-models/common/bruce-tileset-style-mapping";
    import { BruceAPI } from "api/bruce-api";
    import { IEntityStyle } from "bruce-models/common/entity-style";
    export interface IMenuItemArbitraryTileset extends IMenuItemBase {
        FlyTo: boolean;
        BruceEntity: IMenuItemBruceEntity;
        tileset: IBruceTileset;
        StyleMapping: IBruceTilesetStyleMapping[];
        styleId: number;
        style: IEntityStyle;
        tilesetURL: string;
    }
    export class MenuItemArbitraryTileset extends MenuItemBase {
        constructor(rawData: any);
        FlyTo: boolean;
        BruceEntity: MenuItemBruceEntity;
        tileset: BruceTileset;
        StyleMapping: BruceTilesetStyleMapping[];
        styleId: number;
        style: IEntityStyle;
        tilesetURL: string;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IMenuItemArbitraryTileset;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: any): void;
        /**
         * Uses zoom control to load values for the menu item legends.
         */
        LoadLegendValues(api: BruceAPI): Promise<void>;
    }
}
declare module "bruce-models/menu-item/menu-item-loaded-entities" {
    import { IStyle } from "bruce-models/common/style";
    import { IMenuItemBase, MenuItemBase } from "bruce-models/menu-item/menu-item-base";
    import { IMenuItemBruceEntity, MenuItemBruceEntity } from "bruce-models/menu-item/menu-item-bruce-entity";
    export interface IMenuItemLoadedEntities extends IMenuItemBase {
        BruceEntity: IMenuItemBruceEntity;
        StyleID: string;
        Style: IStyle;
        DisplayType: string;
        LODCategoryID: string;
        LODLevel: number;
    }
    export class MenuItemLoadedEntities extends MenuItemBase {
        BruceEntity: MenuItemBruceEntity;
        StyleID: string;
        Style: IStyle;
        DisplayType: string;
        LODCategoryID: string;
        LODLevel: number;
        /**
         * If polygons should have fix method automatically run on them before rendering.
         */
        fixPolygons: boolean;
        /**
         * What client account to assign to the bruce meta.
         */
        clientAccountId: string;
        /**
         * Returns the entity type id for this menu item.
         */
        get entityTypeId(): string;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IMenuItemLoadedEntities;
        constructor(rawData: any);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: any): void;
    }
}
declare module "bruce-models/menu-item/menu-item-model-tileset" {
    import { IMenuItemBase, MenuItemBase } from "bruce-models/menu-item/menu-item-base";
    import { IMenuItemBruceEntity, MenuItemBruceEntity } from "bruce-models/menu-item/menu-item-bruce-entity";
    import { BruceTileset, IBruceTileset } from "bruce-models/common/bruce-tileset";
    import { BruceTilesetStyleMapping, IBruceTilesetStyleMapping } from "bruce-models/common/bruce-tileset-style-mapping";
    import { BruceAPI } from "api/bruce-api";
    import { IStyle } from "bruce-models/common/style";
    import { IColorBlendSettings } from "bruce-models/common/color";
    export interface IMenuItemModelTileset extends IMenuItemBase {
        FlyTo: boolean;
        BruceEntity: IMenuItemBruceEntity;
        tileset: IBruceTileset;
        StyleMapping: IBruceTilesetStyleMapping[];
        styleId: number;
        Style?: IStyle;
        StyleBlending?: IColorBlendSettings;
    }
    export class MenuItemModelTileset extends MenuItemBase {
        constructor(rawData: any);
        FlyTo: boolean;
        BruceEntity: MenuItemBruceEntity;
        tileset: BruceTileset;
        StyleMapping: BruceTilesetStyleMapping[];
        styleId: number;
        Style: IStyle;
        StyleBlending?: IColorBlendSettings;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IMenuItemModelTileset;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: any): void;
        /**
         * Uses zoom control to load values for the menu item legends.
         */
        LoadLegendValues(api: BruceAPI): Promise<void>;
    }
}
declare module "bruce-models/menu-item/menu-item-single-entity" {
    import { CameraZoomControl, ICameraZoomControl } from "bruce-models/common/camera-zoom-control";
    import { IMenuItemBase, MenuItemBase } from "bruce-models/menu-item/menu-item-base";
    import { IMenuItemBruceEntity, MenuItemBruceEntity } from "bruce-models/menu-item/menu-item-bruce-entity";
    export interface IMenuItemSingleEntity extends IMenuItemBase {
        BruceEntity: IMenuItemBruceEntity;
        CameraZoomSettings: ICameraZoomControl[];
    }
    export class MenuItemSingleEntity extends MenuItemBase {
        BruceEntity: MenuItemBruceEntity;
        CameraZoomSettings: CameraZoomControl[];
        /**
         * Returns the entity type id for this menu item.
         */
        get entityTypeId(): string;
        /**
         * Returns the lod category id for this menu item.
         */
        get lodCategoryId(): string;
        /**
         * Returns zoom control for this menu item.
         */
        get zoomControl(): CameraZoomControl[];
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IMenuItemSingleEntity;
        constructor(rawData: any);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: any): void;
    }
}
declare module "bruce-models/menu-item/menu-item" {
    import { MenuItemArbitraryTileset } from "bruce-models/menu-item/menu-item-arbitrary-tileset";
    import { MenuItemBase } from "bruce-models/menu-item/menu-item-base";
    import { MenuItemBruceEntities } from "bruce-models/menu-item/menu-item-bruce-entities";
    import { MenuItemLoadedEntities } from "bruce-models/menu-item/menu-item-loaded-entities";
    import { MenuItemModelTileset } from "bruce-models/menu-item/menu-item-model-tileset";
    import { MenuItemSingleEntity } from "bruce-models/menu-item/menu-item-single-entity";
    export type MenuItem = MenuItemBase | MenuItemBruceEntities | MenuItemSingleEntity | MenuItemArbitraryTileset | MenuItemLoadedEntities | MenuItemModelTileset;
}
declare module "bruce-models/menu-item/menu-item-utils" {
    import { MenuItem } from "bruce-models/menu-item/menu-item";
    export class MenuItemUtils {
        /**
         * Returns menu item corresponding to provided item's type.
         * @param item
         */
        static MenuItemFromRaw(item: any): MenuItem;
        /**
         * Returns array of menu items corresponding to their types.
         * @param items
         */
        static MenuItemsFromRaw(items: any[]): MenuItem[];
    }
}
declare module "bruce-models/common/shadow-settings" {
    export interface IShadowSettings {
        IsShadowEnabled: boolean;
        IsShadowSoft: boolean;
        ShadowSampleSize: number;
    }
    export class ShadowSettings {
        IsShadowEnabled: boolean;
        IsShadowSoft: boolean;
        ShadowSampleSize: number;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IShadowSettings;
        constructor(rawData: IShadowSettings);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IShadowSettings): void;
    }
}
declare module "bruce-models/project-view/project-view-settings-shadows" {
    import { IShadowSettings, ShadowSettings } from "bruce-models/common/shadow-settings";
    export interface IProjectViewSettingsShadows {
        StaticCamera: IShadowSettings;
        MovingCamera: IShadowSettings;
    }
    /**
     * Settings describing the quality of shadows for when camera is moving and static.
     */
    export class ProjectViewSettingsShadows {
        StaticCamera: ShadowSettings;
        MovingCamera: ShadowSettings;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IProjectViewSettingsShadows;
        constructor(rawData: IProjectViewSettingsShadows);
        /**
         * Returns a cloned instance.
         */
        Clone(): ProjectViewSettingsShadows;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IProjectViewSettingsShadows): void;
    }
}
declare module "bruce-models/project-view/project-view-settings-ambient-occlusion" {
    export interface IProjectViewSettingsAmbientOcclusion {
        oa_enabled: boolean;
        oa_intensity: number;
        oa_bias: number;
        oa_lengthCap: number;
        oa_stepSize: number;
        oa_blurStep: number;
    }
    export class ProjectViewSettingsAmbientOcclusion {
        Enabled: boolean;
        Intensity: number;
        Bias: number;
        LengthCap: number;
        StepSize: number;
        BlurStep: number;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IProjectViewSettingsAmbientOcclusion;
        constructor(rawData: IProjectViewSettingsAmbientOcclusion);
        /**
         * Returns a cloned instance.
         */
        Clone(): ProjectViewSettingsAmbientOcclusion;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IProjectViewSettingsAmbientOcclusion): void;
    }
}
declare module "bruce-models/tileset/tileset-entities-map-settings" {
    import { Boundaries, IBoundaries } from "bruce-models/common/boundaries";
    export interface ITilesetEntitiesMapSettings {
        imageSize: ETilesetEntitiesMapImageSize;
        levelMin: number;
        levelMax: number;
        entityTypeId: string;
        styleId: number;
        filter: any;
        boundaries: IBoundaries;
    }
    export enum ETilesetEntitiesMapImageSize {
        IMG_256 = 256,
        IMG_512 = 512,
        IMG_1024 = 1024,
        IMG_2048 = 2048
    }
    export class TilesetEntitiesMapSettings {
        imageSize: ETilesetEntitiesMapImageSize;
        levelMin: number;
        levelMax: number;
        entityTypeId: string;
        styleId: number;
        filter: any;
        boundaries: Boundaries;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): ITilesetEntitiesMapSettings;
        constructor(rawData: ITilesetEntitiesMapSettings);
        /**
         * Returns a cloned instance.
         */
        Clone(): TilesetEntitiesMapSettings;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: ITilesetEntitiesMapSettings): void;
    }
}
declare module "bruce-models/tileset/tileset-entity-lod" {
    export interface ITilesetEntityLOD {
        percent: number;
        lodKey: string;
    }
}
declare module "bruce-models/tileset/tileset-entities-set-settings" {
    import { EAltitudeOptionStr } from "bruce-models/common/altitude-options";
    import { Boundaries, IBoundaries } from "bruce-models/common/boundaries";
    import { ITilesetEntityLOD } from "bruce-models/tileset/tileset-entity-lod";
    export interface ITilesetEntitiesSetSettings {
        zoomControl?: ITilesetEntityLOD[];
        boundaries?: IBoundaries;
        filter?: any;
        altitudeRefType?: EAltitudeOptionStr;
        terrainSource?: string;
        terrainUri?: string;
        doubleSided?: boolean;
        entityTypeId?: string;
        styleId?: number;
    }
    export class TilesetEntitiesSetSettings {
        zoomControl: ITilesetEntityLOD[];
        boundaries: Boundaries;
        filter: any;
        altitudeRefType: EAltitudeOptionStr;
        terrainSource: string;
        terrainUri: string;
        doubleSided: boolean;
        entityTypeId: string;
        styleId: number;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): ITilesetEntitiesSetSettings;
        constructor(rawData: ITilesetEntitiesSetSettings);
        /**
         * Returns a cloned instance.
         */
        Clone(): TilesetEntitiesSetSettings;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: ITilesetEntitiesSetSettings): void;
    }
}
declare module "bruce-models/tileset/tileset-external-geo-map-settings" {
    export interface ITilesetExternalGeoMapSettings {
        url?: string;
        mapType?: ETilesetExternalMapType;
        sourceExt?: string;
        ionId?: number;
        mapBoxStyleId?: string;
        mapBoxAccount?: string;
        mapBoxKey?: string;
    }
    export enum ETilesetExternalMapType {
        TileMapImagery = "TileMapImagery",
        OpenStreetMapImagery = "OpenStreetMapImagery",
        MapBoxImagery = "MapBoxImagery",
        CesiumIon = "CesiumIon"
    }
    export class TilesetExternalGeoMapSettings {
        url: string;
        mapType: ETilesetExternalMapType;
        sourceExt: string;
        ionId: number;
        mapBoxStyleId: string;
        mapBoxAccount: string;
        mapBoxKey: string;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): ITilesetExternalGeoMapSettings;
        constructor(rawData: ITilesetExternalGeoMapSettings);
        /**
         * Returns a cloned instance.
         */
        Clone(): TilesetExternalGeoMapSettings;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: ITilesetExternalGeoMapSettings): void;
    }
}
declare module "bruce-models/tileset/tileset-external-geo-terrain-settings" {
    export interface ITilesetExternalGeoTerrainSettings {
        requestVertexNormals?: boolean;
        url?: string;
    }
    export class TilesetExternalGeoTerrainSettings {
        requestVertexNormals: boolean;
        url: string;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): ITilesetExternalGeoTerrainSettings;
        constructor(rawData: ITilesetExternalGeoTerrainSettings);
        /**
         * Returns a cloned instance.
         */
        Clone(): TilesetExternalGeoTerrainSettings;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: ITilesetExternalGeoTerrainSettings): void;
    }
}
declare module "bruce-models/tileset/tileset-geo-map-settings" {
    export interface ITilesetGeoMapSettings {
        sourceFileId: string;
        imageSize: number;
        levelMin: number;
        levelMax: number;
    }
    export class TilesetGeoMapSettings {
        sourceFileId: string;
        imageSize: number;
        levelMin: number;
        levelMax: number;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): ITilesetGeoMapSettings;
        constructor(rawData: ITilesetGeoMapSettings);
        /**
         * Returns a cloned instance.
         */
        Clone(): ITilesetGeoMapSettings;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: ITilesetGeoMapSettings): void;
    }
}
declare module "bruce-models/tileset/tileset-geo-terrain-settings" {
    export interface ITilesetGeoTerrainSettings {
        sourceFileId?: string;
        startLevel?: number;
    }
    export class TilesetGeoTerrainSettings {
        sourceFileId: string;
        startLevel: number;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): ITilesetGeoTerrainSettings;
        constructor(rawData: ITilesetGeoTerrainSettings);
        /**
         * Returns a cloned instance.
         */
        Clone(): ITilesetGeoTerrainSettings;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: ITilesetGeoTerrainSettings): void;
    }
}
declare module "bruce-models/tileset/tileset-transform" {
    export interface ITilesetTransform {
        heading: number;
        pitch: number;
        roll: number;
        scale: number;
    }
    export class TilesetTransform {
        heading: number;
        pitch: number;
        roll: number;
        scale: number;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): ITilesetTransform;
        constructor(rawData: ITilesetTransform);
        /**
         * Returns a cloned instance.
         */
        Clone(): TilesetTransform;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: ITilesetTransform): void;
    }
}
declare module "bruce-models/tileset/tileset-model-settings" {
    import { ICartesian3 } from "bruce-models/common/cartesian3";
    import { Cartographic, ICartographic } from "bruce-models/common/cartographic";
    import { ETilesetPivot } from "bruce-models/tileset/tileset";
    import { ITilesetTransform, TilesetTransform } from "bruce-models/tileset/tileset-transform";
    export interface ITilesetModelSettings {
        rootEntityId: string;
        entityTypeId: string;
        styleId?: number;
        lodKey?: string;
        movePivot?: ETilesetPivot;
        ucsId?: number;
        epsg?: number;
        thumbFileId?: string;
        location?: ICartographic;
        offset?: ICartesian3;
        transform?: ITilesetTransform;
        doubleSided?: boolean;
        b3dmFileSize?: number;
        maximumScreenSpaceError?: number;
    }
    export class TilesetModelSettings {
        rootEntityId: string;
        entityTypeId: string;
        styleId: number;
        lodKey: string;
        movePivot: ETilesetPivot;
        ucsId: number;
        epsg: number;
        thumbFileId: string;
        location: Cartographic;
        offset: ICartesian3;
        transform: TilesetTransform;
        doubleSided: boolean;
        b3dmFileSize: number;
        maximumScreenSpaceError: number;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): ITilesetModelSettings;
        constructor(rawData: ITilesetModelSettings);
        /**
         * Returns a cloned instance.
         */
        Clone(): TilesetModelSettings;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: ITilesetModelSettings): void;
    }
}
declare module "bruce-models/tileset/tileset-pointcloud-settings" {
    import { Cartographic, ICartographic } from "bruce-models/common/cartographic";
    import { ETilesetPivot } from "bruce-models/tileset/tileset";
    import { ITilesetTransform, TilesetTransform } from "bruce-models/tileset/tileset-transform";
    export interface ITilesetPointCloudSettings {
        sourceFileIds: string[];
        location: ICartographic;
        transform: ITilesetTransform;
        pntFileSize?: number;
        epsg?: number;
        attenuation?: boolean;
        attenuationMax?: number;
        movePivot?: ETilesetPivot;
        maximumScreenSpaceError?: number;
    }
    export class TilesetPointCloudSettings {
        sourceFileIds: string[];
        pntFileSize: number;
        epsg: number;
        movePivot: ETilesetPivot;
        location: Cartographic;
        transform: TilesetTransform;
        attenuation: boolean;
        attenuationMax: number;
        maximumScreenSpaceError: number;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): ITilesetPointCloudSettings;
        constructor(rawData: ITilesetPointCloudSettings);
        /**
         * Returns a cloned instance.
         */
        Clone(): TilesetPointCloudSettings;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: ITilesetPointCloudSettings): void;
    }
}
declare module "bruce-models/tileset/tileset" {
    import { BruceAPI } from "api/bruce-api";
    import { IUTC, UTC } from "bruce-models/common/utc";
    import { ITilesetEntitiesMapSettings, TilesetEntitiesMapSettings } from "bruce-models/tileset/tileset-entities-map-settings";
    import { ITilesetEntitiesSetSettings, TilesetEntitiesSetSettings } from "bruce-models/tileset/tileset-entities-set-settings";
    import { ITilesetExternalGeoMapSettings, TilesetExternalGeoMapSettings } from "bruce-models/tileset/tileset-external-geo-map-settings";
    import { ITilesetExternalGeoTerrainSettings, TilesetExternalGeoTerrainSettings } from "bruce-models/tileset/tileset-external-geo-terrain-settings";
    import { ITilesetGeoMapSettings, TilesetGeoMapSettings } from "bruce-models/tileset/tileset-geo-map-settings";
    import { ITilesetGeoTerrainSettings, TilesetGeoTerrainSettings } from "bruce-models/tileset/tileset-geo-terrain-settings";
    import { ITilesetModelSettings, TilesetModelSettings } from "bruce-models/tileset/tileset-model-settings";
    import { ITilesetPointCloudSettings, TilesetPointCloudSettings } from "bruce-models/tileset/tileset-pointcloud-settings";
    export interface ITileset {
        id: string;
        name: string;
        type: ETilesetType;
        rootFileName?: string;
        settings?: ITilesetSettings;
        fileIds?: string[];
        creationTime?: IUTC;
        modificationTime?: IUTC;
        generateVersion?: number;
        isDeleteDisabled?: boolean;
    }
    export enum ETilesetPivot {
        None = "none",
        Box = "box",
        Weight = "weight",
        UCS = "ucs"
    }
    /**
     * Describes minimal information needed to locate a tileset record.
     */
    export interface ITilesetMeta {
        id: string;
        clientAccountId: string;
    }
    /**
     * Describes basic information about a tileset record.
     */
    export interface ITilesetInfo {
        id: string;
        name: string;
        type: ETilesetType;
        creationTime: IUTC;
        modificationTime: IUTC;
    }
    export enum ETilesetType {
        PointCloud = "POINT_CLOUD",
        GeoMap = "GEO_MAP",
        EntitiesMap = "ENTITIES_MAP",
        EntitiesSet = "ENTITIES_SET",
        Model = "MODEL",
        Terrain = "GEO_TERR",
        ExternalTerrain = "EXTERNAL_TERR",
        ExternalGeoMap = "EXTERNAL_MAP"
    }
    /**
     * Common file prefixes for uploading and requesting files for various purposes.
     */
    export enum ETilesetFilePrefix {
        Import = "src",
        GET = "files",
        GET_OLD = "res"
    }
    type ITilesetSettings = ITilesetPointCloudSettings | ITilesetGeoMapSettings | ITilesetEntitiesMapSettings | ITilesetModelSettings | ITilesetGeoTerrainSettings | ITilesetExternalGeoMapSettings | ITilesetExternalGeoTerrainSettings | ITilesetEntitiesSetSettings;
    type TilesetSettings = TilesetPointCloudSettings | TilesetGeoMapSettings | TilesetEntitiesMapSettings | TilesetModelSettings | TilesetGeoTerrainSettings | TilesetExternalGeoMapSettings | TilesetExternalGeoTerrainSettings | TilesetEntitiesSetSettings;
    export class Tileset {
        private _raw;
        get raw(): ITileset;
        id: string;
        name: string;
        type: ETilesetType;
        rootFileName: string;
        settings: TilesetSettings;
        fileIds: string[];
        creationTime: UTC;
        modificationTime: UTC;
        generateVersion: number;
        isDeleteDisabled: boolean;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): ITileset;
        constructor(rawData: ITileset);
        /**
         * Returns a cloned instance.
         */
        Clone(): Tileset;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: ITileset): void;
        /**
         * Saves current instance to DB or creates new instance using current settings.
         * In the case of a new tileset record being made, the ID will be generated.
         * @param isNew pass NULL if unsure. This will cause a check for you.
         */
        SaveUpdate(api: BruceAPI, isNew: boolean): Promise<Tileset>;
        /**
         * Creates new tileset record and returns updated version of current instance.
         * @param api
         */
        private createRecord;
        /**
         * Saves current instance to DB.
         * @param api
         */
        private saveRecord;
        /**
         * Deletes the DB record corresponding to current instance.
         * @param api
         */
        Delete(api: BruceAPI): Promise<void>;
        /**
         * Uploads given file data to tileset.
         * @param api
         * @param blob
         * @param progress
         * @param onError
         */
        UploadFile(api: BruceAPI, blob: Blob, progress?: (ev: ProgressEvent) => void, onError?: (data: any) => void): Promise<void>;
        /**
         * Uploads a given file to use for import process on this tileset.
         * @param api
         * @param blob
         * @param progress
         * @param onError
         */
        UploadFileForImport(api: BruceAPI, blob: Blob, progress?: (ev: ProgressEvent) => void, onError?: (data: any) => void): Promise<void>;
        /**
         * Deletes file by id from tileset.
         * @param api
         * @param fileId
         * @returns
         */
        DeleteFile(api: BruceAPI, fileId: string): Promise<void>;
        /**
         * Starts tileset generation.
         * Warning: Not every tileset type supports generation.
         * @returns: pending action ID to monitor.
         */
        StartGeneration(api: BruceAPI): Promise<number>;
        /**
         * Deletes file being used in tileset import by id.
         * @param api
         * @param fileId
         * @returns
         */
        DeleteFileFromImport(api: BruceAPI, fileId: string): Promise<void>;
        /**
         * Returns file URL by id.
         * @param api
         * @param fileId
         */
        getFileURL(api: BruceAPI, fileId: string): string;
        /**
         * Returns base URL for getting files (with session requirement).
         * @param api
         */
        getFileBaseURL(api: BruceAPI): string;
        /**
         * Returns file URL for tileset import file by id.
         * @param api
         * @param fileId
         */
        getFileForImportURL(api: BruceAPI, fileId: string): string;
        /**
         * Returns file URL, similar to getFileURL method but without session requirements.
         * @param api
         * @param filePath
         */
        getPublicFileURL(api: BruceAPI, filePath: string): string;
        /**
         * Returns base URL to public file request.
         * @param api
         */
        getPublicBaseURL(api: BruceAPI): string;
        /**
         * Returns list of basic information about all tilesets available.
         * @param api
         */
        static GetList(api: BruceAPI): Promise<ITilesetInfo[]>;
        /**
         * @param api
         * @param id
         * @param noFiles
         * @returns: tileset record corresponding to given id.
         */
        static GetByID(api: BruceAPI, id: string, noFiles?: boolean): Promise<Tileset>;
    }
}
declare module "bruce-models/project-view/project-view-settings" {
    import { CameraPosition, ICameraPosition } from "bruce-models/common/camera-position";
    import { MenuItem } from "bruce-models/menu-item/menu-item";
    import { IProjectViewSettingsShadows, ProjectViewSettingsShadows } from "bruce-models/project-view/project-view-settings-shadows";
    import { ProjectViewSettingsAmbientOcclusion } from "bruce-models/project-view/project-view-settings-ambient-occlusion";
    import { ITilesetMeta } from "bruce-models/tileset/tileset";
    export interface IViewSettingsImagery {
        tilesets: ITilesetMeta[];
    }
    export interface IViewSettingsTerrain {
        tilesets: ITilesetMeta[];
    }
    export interface IProjectViewSettings {
        Camera: ICameraPosition;
        DefaultMapTiles: string;
        DefaultTerrain: string;
        IsLoginRequired: boolean;
        IsRestricted: boolean;
        IsEntityTypeDataPreload: boolean;
        LogoImage: any;
        LegendImage: any;
        GroundOcclusion: boolean;
        DisplayTimeline: boolean;
        LayersMenu?: any[];
        OASettings?: any;
        GlobeColor?: string;
        SelectionHighlightColor?: string;
        ControlsSettings?: any;
        AuthoringsEnabled?: string[];
        CesiumMapSources?: any[];
        CesiumTerrainSources?: any[];
        Shadows: boolean;
        CameraFrustum?: number;
        BookmarkTransitionSpeed?: number;
        CustomFormSettings?: any;
        Shadow: IProjectViewSettingsShadows;
        TilesetBackfaceCulling: boolean;
        TopPanelComponents?: string[];
        LeftPanelComponents?: string[];
        Extensions?: any;
        PostProcessFXAA?: boolean;
        Imagery?: IViewSettingsImagery;
        Terrain?: IViewSettingsTerrain;
    }
    export class ProjectViewSettings {
        AuthoringsEnabled: string[];
        BookmarkTransitionSpeed: number;
        Camera: CameraPosition;
        CameraFrustum: number;
        CesiumMapSources: any[];
        CesiumTerrainSources: any[];
        ControlsSettings: any;
        CustomFormSettings: any;
        DefaultMapTiles: string;
        DefaultTerrain: string;
        DisplayTimeline: boolean;
        Extensions: any;
        GlobeColor: string;
        IsEntityTypeDataPreload: boolean;
        IsLoginRequired: boolean;
        IsPublicAccess: boolean;
        IsRestricted: boolean;
        MenuItems: MenuItem[];
        LeftPanelComponents: string[];
        TopPanelComponents: string[];
        LegendImage: any;
        LogoImage: any;
        OASettings: ProjectViewSettingsAmbientOcclusion;
        SelectionHighlightColor: string;
        Shadow: ProjectViewSettingsShadows;
        Shadows: boolean;
        GroundOcclusion: boolean;
        TilesetBackfaceCulling: boolean;
        PostProcessFXAA: boolean;
        Imagery: IViewSettingsImagery;
        Terrain: IViewSettingsTerrain;
        /**
         * Returns raw JSON data using current instance data.
         */
        get JSON(): IProjectViewSettings;
        constructor(rawData: IProjectViewSettings);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IProjectViewSettings): void;
    }
}
declare module "bruce-models/project-view/project-view" {
    import { BruceAPI } from "api/bruce-api";
    import { IUTC, UTC } from "bruce-models/common/utc";
    import { ProjectViewBookmark } from "bruce-models/project-view/project-view-bookmark";
    import { IProjectViewSettings, ProjectViewSettings } from "bruce-models/project-view/project-view-settings";
    export interface IProjectView {
        ID: string;
        Name: string;
        Description: string;
        Feature: string[];
        "CreatedByUser.ID": string;
        CreatedTime: IUTC;
        Settings?: IProjectViewSettings;
        DefaultUISlideID: string;
        CreatedByUIVersion: string;
    }
    export class ProjectView {
        ID: string;
        Name: string;
        Description: string;
        CreatedByUIVersion: string;
        "CreatedByUser.ID": string;
        CreatedTime: UTC;
        "Default.UISlide": ProjectViewBookmark;
        DefaultUISlideID: string;
        Settings: ProjectViewSettings;
        Feature: string[];
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IProjectView;
        /**
         * Returns a clone of the current instance.
         */
        Clone(): ProjectView;
        constructor(rawData: IProjectView);
        /**
         * Updates instance of this Project View using given raw data.
         * @param rawData
         */
        Update(rawData: IProjectView): void;
        /**
         * Returns all bookmarks associated with project view instance.
         * @param api
         */
        GetBookmarks(api: BruceAPI): Promise<ProjectViewBookmark[]>;
        /**
         * Saves current instance to DB.
         * @param isNew pass NULL if unsure. This will cause a check for you.
         */
        SaveUpdate(api: BruceAPI, isNew: boolean): Promise<ProjectView>;
        /**
         * Returns project view corresponding to given view id.
         * @param api
         * @param viewId
         */
        static GetByID(api: BruceAPI, viewId: string): Promise<ProjectView>;
        /**
         * Returns project views for a given api environment.
         * Project views will include only basic information describing them.
         * @param api
         */
        static GetList(api: BruceAPI): Promise<ProjectView[]>;
    }
}
declare module "api/bruce-api" {
    import { AbstractAPI } from "api/abstract-api";
    import { BruceInfo } from "bruce-models/common/bruce-info";
    import { CacheControl } from "utils/cache-control";
    import { IViewDisplaySettings } from "bruce-models/common/style";
    import { EntityType } from "bruce-models/common/entity-type";
    import { EEnvironmentType } from "bruce-models/common/environment";
    import { LimitedCacheControl } from "utils/limited-cache-control";
    export class BruceAPI extends AbstractAPI {
        static _instances: BruceAPI[];
        /**
         * Returns bruce api instance corresponding to provided parameters.
         * @param environment
         * @param clientAccountId
         */
        static getInstance(environment: EEnvironmentType, clientAccountId: string): BruceAPI;
        /**
         * Returns bruce api instance for production template account.
         */
        static getTemplateInstance(): BruceAPI;
        environment: EEnvironmentType;
        clientAccountId: string;
        BRUCE_URL: string;
        entityCache: LimitedCacheControl<BruceInfo>;
        bruceEntitySourceIdCache: CacheControl<string>;
        instanceIdCache: LimitedCacheControl<string>;
        entityTypeCache: LimitedCacheControl<EntityType>;
        styleCache: LimitedCacheControl<Promise<IViewDisplaySettings> | IViewDisplaySettings>;
        constructor(environment: EEnvironmentType, clientAccountId: string);
        /**
         * Initializes the bruce api link.
         */
        private init;
        /**
         * Clears all cached information.
         */
        ClearCache(): void;
        /**
         * Performs GET request with BruceAPI instance prefix.
         * @param url
         * @param onError
         */
        GET(url: string, onError?: (data: any) => void): Promise<any>;
        /**
         * Performs POST request with BruceAPI instance prefix.
         * @param url
         * @param data
         * @param onError
         */
        POST(url: string, data: any, onError?: (data: any) => void): Promise<any>;
        /**
         * Performs PUT request with BruceAPI instance prefix.
         * @param url
         * @param data
         * @param onError
         */
        PUT(url: string, data: any, onError?: (data: any) => void): Promise<any>;
        /**
         * Performs DELETE request with BruceAPI instance prefix.
         * @param url
         * @param onError
         */
        DELETE(url: string, onError?: (data: any) => void): Promise<any>;
        /**
         * Performs POST UPLOAD request with BruceAPI instance prefix.
         * @param url
         * @param blob
         * @param progress
         * @param onError
         */
        UPLOAD<TOutput>(url: string, blob: Blob, progress?: (ev: ProgressEvent) => void, onError?: (data: any) => void): Promise<TOutput>;
        /**
         * Performs POST UPLOAD FORM DATA request with BruceAPI instance prefix.
         * @param url
         * @param formData
         * @param progress
         * @param onError
         * @returns
         */
        UPLOAD_FORM_DATA<TOutput>(url: string, formData: Document | BodyInit, progress?: (ev: ProgressEvent) => void, onError?: (data: any) => void): Promise<TOutput>;
        /**
         * Returns view settings correponding to a given id.
         * (These are now styles).
         * @param id
         */
        getViewSettings(id: number | string): Promise<IViewDisplaySettings>;
        /**
         * Returns the default view settings.
         * (Default style)
         */
        getDefaultViewSettings(): Promise<IViewDisplaySettings>;
        /**
         * Terrible method that fixes typescript compilation.
         * I hate compilers.
         */
        private circularFix;
    }
}
declare module "bruce-models/common/mouse-event" {
    import { ICartesian2 } from "bruce-models/common/cartesian2";
    export interface IMouseEvent {
        position: ICartesian2;
    }
    export interface IMouseMoveEvent {
        startPosition: ICartesian2;
        endPosition: ICartesian2;
    }
}
declare module "entry-points/cesium/common/cesium-mouse-events" {
    import * as Cesium from "cesium";
    import { IMouseEvent, IMouseMoveEvent } from "bruce-models/common/mouse-event";
    import { BruceEvent } from "utils/bruce-event";
    /**
     * Used to listen to cesium mouse events.
     */
    export class CesiumMouseEvents {
        private viewer;
        ClickEvent: BruceEvent<IMouseEvent>;
        MiddleClickEvent: BruceEvent<IMouseEvent>;
        RightClickEvent: BruceEvent<IMouseEvent>;
        LeftDownEvent: BruceEvent<IMouseEvent>;
        LeftUpEvent: BruceEvent<IMouseEvent>;
        MoveEvent: BruceEvent<IMouseMoveEvent>;
        private cesiumEventHandler;
        constructor(viewer: Cesium.Viewer);
        /**
         * Enables cesium event listeners.
         */
        EnableEventHandling(): void;
        /**
         * Removes cesium event listeners.
         */
        DisableEventHandling(): void;
        /**
         * Disposes the mouse events.
         * @deprecated: Please use Dispose method.
         */
        dispose(): void;
        /**
         * Disposes the mouse event handler.
         */
        Dispose(): void;
    }
}
declare module "entry-points/cesium/viewer/cesium-view-monitor" {
    import * as Cesium from "cesium";
    import { IViewMonitor, IBounds, IAreaOfIntrest, IPoint } from "entry-points/common/view-monitor-ifs";
    import { BruceEvent } from "utils/bruce-event";
    /**
     * This class monitors the view .
     */
    export class CesiumViewMonitor implements IViewMonitor {
        private disposed;
        private _viewer;
        private _positionElapsedTime;
        private _positionTestTimer;
        private _currentPOI;
        private _currentView;
        private _onPositionReady;
        /**
         * The view monitor object.
         * @param viewer the cesium viewer
         */
        constructor(viewer: Cesium.Viewer);
        /**
         * Dispose.
         */
        Dispose(): void;
        /**
         * New view center is ready
         * We now need to filter out movments in progress and take only the final position
         */
        private NewPositionPending;
        /**
         * Calculates the coordinates of intersection between:
         * - a ray comming from the camera and passing the screen cordinates.
         * - Terrain at the approximated height.
         */
        private GetAdjustedGroundIntersectionOfCameraRay;
        /**
         * We scan  net of coordinates on our view to find the borders
         */
        private NetScanViewForBoundaries;
        /**
         * Updates the current view and poi
         * returns: if the view amd POI was changed
         */
        private UpdateCurrentViewAndPoi;
        /**
         * We now have new position,
         * we need to create view area and point of intrest.
         */
        private NewPositionReady;
        /**
         * The postion events updated.
         */
        ViewAreaUpdated(): BruceEvent<IAreaOfIntrest>;
        /**
         * Getting the current view area.
         */
        GetViewAreaInDegrees(): IBounds;
        /**
         * Get the center of the view.
         */
        GetTargetPointInDegrees(): IPoint;
        Update(): void;
    }
}
declare module "entry-points/cesium/viewer/cesium-load-manager" {
    import * as Cesium from "cesium";
    export const MAX_POINTS = 500;
    /**
     * Provides guidance on amount of loaded enteties in the frame.
     */
    export class CesiumLoadManager {
        private viewer;
        private onReadyToDraw;
        private tickedframes;
        private paused;
        private intervalHandler;
        /**
         * A virtual "Weight" counter oh how many load was added betwen frames.
         * In simple words is the entities count.
         */
        private _points;
        private _maxPointsNextFrame;
        constructor(viewer: Cesium.Viewer);
        Pause(state: boolean): void;
        isPaused(): boolean;
        /**
         * Adds item to load.
         * @param loadFn The function to be called to load the entity.
         * @param points the amount of points we evaluate the tasks.
         */
        RequestToAddLoad(points: number): Promise<unknown>;
        Dispose(): void;
    }
}
declare module "entry-points/cesium/common/cesium-utils" {
    import * as Cesium from "cesium";
    import { ICartesian2 } from "bruce-models/common/cartesian2";
    import { ICartesian3 } from "bruce-models/common/cartesian3";
    import { ICartographic } from "bruce-models/common/cartographic";
    import { Color } from "bruce-models/common/color";
    import { CesiumBruceEntity } from "entry-points/cesium/visuals/cesium-bruce-entity";
    /**
     * Utilities relating to Cesium that aren't to do with entities.
     */
    export class CesiumUtils {
        /**
         * Returns "real" entity from given cesium entity.
         * This checks for parent entities to try locate original entity.
         * @param entity
         */
        static GetRealEntity(entity: Cesium.Entity): CesiumBruceEntity;
        /**
         * Transforms radian cartographic to degrees.
         * @param point
         */
        static toDegrees(point: Cesium.Cartographic): Cesium.Cartographic;
        /**
         * Transforms degree cartographic to radians.
         * @param point
         */
        static toRadians(point: Cesium.Cartographic): Cesium.Cartographic;
        /**
         * Returns radians cartographic position from given cartesian position.
         * @param pos
         */
        static toRadiansCartographic(pos: Cesium.Cartesian3): Cesium.Cartographic;
        /**
         * Returns radians cartographic array from given cartesian positions.
         * @param posses
         */
        static toRadiansCartographicArray(posses: Cesium.Cartesian3[]): Cesium.Cartographic[];
        /**
         * Returns degrees cartographic position from given cartesian position.
         * @param pos
         */
        static toCartographic(pos: Cesium.Cartesian3): Cesium.Cartographic;
        /**
         * Returns degrees cartographic positions from cartesian positions.
         * @param pos
         */
        static toCartographicArray(posses: Cesium.Cartesian3[]): Cesium.Cartographic[];
        /**
         * Returns distance in meters between two given points.
         * @param start in degrees
         * @param end in degrees
         */
        static distanceBetweenPoints(start: Cesium.Cartographic, end: Cesium.Cartographic): number;
        /**
         * Returns distance in meters between two points on the surface.
         * @param start
         * @param end
         */
        static distanceBetweenPointsOnSurface(start: Cesium.Cartographic, end: Cesium.Cartographic): number;
        /**
         * Marks a given entity as an inner entity of a parent.
         * @deprecated Moved to CesiumEntityUtils.
         * @param entity
         */
        static markAsInner(entity: Cesium.Entity): Cesium.Entity;
        /**
         * Returns top-most parent entity for a given entity.
         * @deprecated Moved to CesiumEntityUtils.
         * @param entity
         */
        static getParentEntity(entity: Cesium.Entity): Cesium.Entity;
        /**
         * Returns if a given entity is an inner entity or not.
         * This means it has a parent 'container' entity.
         * @deprecated Moved to CesiumEntityUtils.
         * @param entity
         */
        static isInnerEntity(entity: Cesium.Entity): boolean;
        /**
         * Returns associated entities with a given visual.
         * This includes the given visual itself too.
         * @deprecated Moved to CesiumEntityUtils.
         * @param entity
         * @param result
         */
        static allEntities(entity: Cesium.Entity, result?: Cesium.Entity[]): Cesium.Entity[];
        /**
         * Removes an entity and it's associated visuals from the view.
         * @param entity
         * @deprecated Moved to CesiumEntityUtils.
         */
        static removeEntity(viewer: Cesium.Viewer, entity: Cesium.Entity): any;
        /**
         * Returns cesium color from given bruce color.
         * @param color
         */
        static ColorToCesiumColor(color: Color): Cesium.Color;
        /**
         * Returns cesium cartesian 2 from given bruce cartesian 2 interface.
         * @param position
         * @returns
         */
        static ICartesian2ToCartesian2(position: ICartesian2): Cesium.Cartesian2;
        /**
         * Returns cesium cartesian 3 array from given bruce cartesian 3 interfaces.
         * @param positions
         */
        static ICartesian3ToCartesian3(positions: ICartesian3[]): Cesium.Cartesian3[];
        /**
         * Returns cesium cartographic positions from given bruce cartographic interfaces.
         * @param positions
         */
        static ICartographicToCartographic(positions: ICartographic[]): Cesium.Cartographic[];
        /**
         * @param position
         * @returns Cartesian3 from given ICartographic degrees position.
         */
        static ICartographicToCartesian3(position: ICartographic): Cesium.Cartesian3;
        /**
         * @param positions
         * @returns Cartesian3 array from given ICartographic degrees array.
         */
        static ICartographicArrayToCartesian3(positions: ICartographic[]): Cesium.Cartesian3[];
        /**
         * Takes the string of points we recieve from the bruce JSON and turns it into cartesian positions.
         * TODO: actually make it disconnected rings and not connected ones.
         */
        static ParsePoints(source: string): Cesium.Cartesian3[];
        /**
         * Validates a given position to make sure it wont crash under cesium rendering.
         * @param position
         * @returns if position is valid.
         */
        static ValidatePosition(position: Cesium.Cartesian3): boolean;
        /**
         * Validates an array of positions to make sure they wont crash under cesium rendering.
         * @param positions
         * @returns if all positions are valid.
         */
        static ValidatePositions(positions: Cesium.Cartesian3[]): boolean;
        /**
         * Validates a given screen position.
         * @param position
         */
        static Validate2DPosition(position: Cesium.Cartesian2): boolean;
        /**
         * Validates a given array of screen positions.
         * @param positions
         */
        static Validate2DPositions(positions: Cesium.Cartesian2[]): boolean;
        /**
         * Returns value from cesium property.
         * @param property
         */
        static getCesiumValue(viewer: Cesium.Viewer, property: any): any;
        /**
         * Returns if a given point is inside a given polygon.
         * @param polygon
         * @param point
         * @returns
         */
        static getIsPointInPolygon(polygon: Cesium.Cartographic[], point: Cesium.Cartographic): boolean;
        /**
         * Request a cesium render.
         * @param viewer
         * @param callback Callback for when render has finished.
         */
        static Render(viewer: Cesium.Viewer, onRender?: () => void): Promise<void>;
    }
}
declare module "entry-points/cesium/common/cesium-drawing-utils" {
    import * as Cesium from "cesium";
    import { ICartesian2 } from "bruce-models/common/cartesian2";
    import { Polygon } from "bruce-models/common/polygon";
    /**
     * Utilities related to Cesium visuals that may or may not be Bruce entities.
     */
    export class CesiumDrawingUtils {
        /**
         * Returns position across given position array at a given distance
         * @param positions
         * @param distance
         */
        static PointAcrossPolyline(viewer: Cesium.Viewer, positions: Cesium.Cartesian3[], distance: number): Cesium.Cartesian3;
        /**
         * Returns center position from a given array of cartesian 3 positions.
         * @param positions
         */
        static CalculateCenterPosition(viewer: Cesium.Viewer, positions: Cesium.Cartesian3[]): Cesium.Cartesian3;
        /**
         * Returns difference between given position and offset position after applying NESW + altitude offsets
         * @param pos
         * @param n
         * @param e
         * @param alt
         */
        static GetOffset(pos: Cesium.Cartesian3, n: number, e: number, alt: number): Cesium.Cartesian3;
        /**
         * Moves a given point by a given amount and bearing.
         * Given point object isnt affect. A new cartograhic instance is returned.
         *
         * @param pos Cartographic initial position in degrees
         * @param distance Distance in meters to move from position
         * @param bearing Bearing determining the direction of movement in degrees
         * @param radius
         */
        static OffsetPoint(pos: Cesium.Cartographic, distance: number, bearing: number): Cesium.Cartographic;
        /**
         * Returns default entity selection material.
         * @deprecated Moved to cesium entity utils.
         */
        static GetSelectionMaterial(): Cesium.MaterialProperty;
        /**
         * Returns default entity selection color.
         * @deprecated Moved to cesium entity utils.
         */
        static GetSelectionColor(): string;
        /**
         * Returns a bruce info geometry object for a given cartesian3 position array
         * @param posses
         * @deprecated Moved to CesiumBruceInfoUtils
         */
        static PolygonGeometryFromCartesianArray(posses: Cesium.Cartesian3[]): Polygon[];
        /**
         * Returns a bruce info geometry object for a given cartesian 3 position array.
         * @param posses
         * @deprecated Moved to CesiumBruceInfoUtils
         */
        static PolylineGeometryFromCartesianArray(posses: Cesium.Cartesian3[]): string;
        /**
         * Closes a polygon shape (makes sure first and last points are the same).
         * @param posses
         */
        static ClosePolygon(posses: Cesium.Cartesian3[]): Cesium.Cartesian3[];
        /**
         * Returns an un-closed shape (If first and last position match then it will remove last position).
         * @param posses
         */
        static Unclose(posses: Cesium.Cartesian3[]): Cesium.Cartesian3[];
        /**
         * Returns cartesian 3 position for provided screen position.
         * @param viewer
         * @param position
         * @returns
         */
        static GetCartesian3FromMouse(viewer: Cesium.Viewer, position: Cesium.Cartesian2 | ICartesian2): Cesium.Cartesian3;
        /**
         * Returns terrain cartesian 3 position at provided screen position.
         * @param viewer
         * @param position
         * @returns
         */
        static GetCartesian3TerrainFromMouse(viewer: Cesium.Viewer, position: Cesium.Cartesian2 | ICartesian2): Cesium.Cartesian3;
        /**
         * Blows up rectangle by given meters in all 4 cardinal directions.
         * @param rectangle
         * @param meters
         */
        static BlowupRectangle(rectangle: Cesium.Rectangle, meters: number): Cesium.Rectangle;
        /**
         * Returns distance across globe between two positions.
         * @param start in degrees
         * @param end in degrees
         * @returns
         */
        static DistanceAcrossGlobe(start: Cesium.Cartographic, end: Cesium.Cartographic): number;
        /**
         * Raycasts Cesium entities.
         * Returns back first 5 entities hit and the hit position for each entity.
         * @param viewer
         * @param start: The ray start.
         * @param end: The ray end.
         * @param ignoreEntities: What entities to ignore in the raycast.
         * @returns
         */
        static RaycastDrillEntities(viewer: Cesium.Viewer, start: Cesium.Cartesian3, end: Cesium.Cartesian3, ignoreEntities: (Cesium.Entity | Cesium.Primitive | Cesium.Cesium3DTileFeature)[]): {
            entity: Cesium.Entity | Cesium.Primitive | Cesium.Cesium3DTileFeature;
            position?: Cesium.Cartesian3;
        }[];
    }
}
declare module "entry-points/cesium/common/cesium-measure-handler" {
    import * as Cesium from "cesium";
    export interface MeasuredPointResult {
        latitude: number;
        longitude: number;
        absoluteAltitude: number;
        groundAltitude: number;
    }
    export interface MeasuredPolylineResult {
        totalLength: number;
    }
    export interface MeasuredPolygonResult {
        perimeter: number;
        area: number;
    }
    /**
     * Used to handle measurement calculations
     */
    export class CesiumMeasureHandler {
        /**
         * Returns polyline measurements for a given set of positions.
         * @param positions
         * @returns
         */
        measurePolyline(positions: Cesium.Cartesian3[]): MeasuredPolylineResult;
        /**
         * Returns polygon measurements for a given set of positions.
         * @param positions
         * @returns
         */
        measurePolygon(positions: Cesium.Cartesian3[]): MeasuredPolygonResult;
        /**
         * Returns angle in degrees between two given positions
         * Adjusted version of the one in the thread below.
         * Their version I believe does an angle calculation for this:
         *
         *  X marking the angle calculated in the thread
         *
         *        Pos1
         *         /|
         *        / |
         *       /  |
         * Pos2 X___|
         *
         * This calculation gets the angle for (x marker again):
         *
         *        Pos1
         *          X
         *         /|
         *        / |
         *       /  |
         * Pos2 /___|
         *
         * (https://community.cesium.com/t/calculate-elevation-angle-between-two-points/5629/4)
         */
        measureAngle(pos1: Cesium.Cartesian3, pos2: Cesium.Cartesian3): number;
        /**
         * Returns angle in degrees between two given positions
         *
         *  X marking the angle calculated in the thread
         *
         *        Pos1
         *         /|
         *        / |
         *       /  |
         * Pos2 X___|
         *
         * (https://community.cesium.com/t/calculate-elevation-angle-between-two-points/5629/4)
         */
        measureAngle2(pos1: Cesium.Cartesian3, pos2: Cesium.Cartesian3): number;
        /** Returns if the first point is lower than the second point */
        private shouldFlip;
        /**
         * Converts meters to imperial readable text.
         * @param meters
         * @returns
         */
        meterToFeet(meters: number): string;
        angle(pos1: Cesium.Cartesian3, pos2: Cesium.Cartesian3, pos3: Cesium.Cartesian3): number;
    }
}
declare module "entry-points/cesium/common/cesium-entity-utils" {
    import * as Cesium from "cesium";
    import { CesiumBruceEntity } from "entry-points/cesium/visuals/cesium-bruce-entity";
    import { BruceMeta } from "entry-points/common/bruce-meta";
    import { BruceInfo } from "bruce-models/common/bruce-info";
    /**
     * Utilities related to bruce entity Cesium visuals.
     */
    export class CesiumEntityUtils {
        /**
         * Highlights a given cesium entity, primitive or tileset
         * @param viewer
         * @param entity
         * @param color Provide colour to use instead of the default view selection colour
         */
        static HighlightEntity(viewer: Cesium.Viewer, entity: Cesium.Entity | Cesium.Cesium3DTileFeature | Cesium.Primitive | Cesium.Cesium3DTileset, color?: Cesium.Color): void;
        /**
         * Removes highlighting of a cesium entity, primitive or tileset.
         * @param viewer
         * @param entity
         */
        static UnhighlightEntity(viewer: Cesium.Viewer, entity: Cesium.Entity | Cesium.Primitive | Cesium.Cesium3DTileset | Cesium.Cesium3DTileFeature): void;
        /**
         * Returns default entity selection material.
         */
        static GetSelectionMaterial(): Cesium.MaterialProperty;
        /**
         * Returns default entity selection color.
         */
        static GetSelectionColor(): string;
        /**
         * Marks a given entity as an inner entity of a parent.
         * @param entity
         */
        static MarkarkAsInner(entity: Cesium.Entity): Cesium.Entity;
        /**
         * Returns top-most parent entity for a given entity.
         * @deprecated Moved to CesiumEntityUtils.
         * @param entity
         */
        static getParentEntity(entity: Cesium.Entity): Cesium.Entity;
        /**
         * Returns if a given entity is an inner entity or not.
         * This means it has a parent 'container' entity.
         * @param entity
         */
        static isInnerEntity(entity: Cesium.Entity): boolean;
        /**
         * Removes a child inner entity from a parent entity.
         * @param parent
         * @param child
         */
        static removeInnerEntity(parent: Cesium.Entity, child: Cesium.Entity): void;
        /**
         * Returns associated entities with a given visual.
         * This includes the given visual itself too.
         * @param entity
         * @param result
         */
        static getAllEntities(entity: Cesium.Entity, result?: Cesium.Entity[]): Cesium.Entity[];
        /**
         * Removes an entity and it's associated visuals from the view.
         * @param entity
         */
        static RemoveEntity(viewer: Cesium.Viewer, entity: Cesium.Entity): void;
        /**
         * Removes entities and their associated visuals from the view.
         */
        static RemoveEntities(viewer: Cesium.Viewer, entities: Cesium.Entity[]): void;
        /**
         * Drills at given cursor position for first visual matching given meta.
         * @param viewer
         * @param meta
         * @param cursor
         */
        static DigVisualsForMetaByCursor(viewer: Cesium.Viewer, meta: BruceMeta, cursor: Cesium.Cartesian2): Cesium.Entity;
        /**
         * Calculates position from provided bruce info location, geometry, or boundaries.
         * @param viewer
         * @param info
         */
        static CalculatePosition(viewer: Cesium.Viewer, info: BruceInfo): Cesium.Cartesian3;
        /**
         * Flies to a given entity's location.
         * @param viewer
         * @param info
         * @param duration: seconds duration for flight.
         * @returns: if a location to fly to was found successfully.
         */
        static FlyTo(viewer: Cesium.Viewer, info: BruceInfo, duration?: number): boolean;
        /**
         * Applies opacity to given entity's colours.
         * Applies to:
         * - polygon
         * - polyline
         * - point
         *
         * @param viewer
         * @param entity
         * @param opacity: value between 0 and 1.
         */
        static ApplyOpacity(viewer: Cesium.Viewer, entity: Cesium.Entity, opacity: number): void;
        /**
         * Clones and returns Cesium entity.
         * @param entity
         */
        static CloneEntity(entity: Cesium.Entity): Cesium.Entity;
        /**
         * Returns the closest entity from given set at mouse position.
         * @param viewer
         * @param mouse
         * @param entities
         */
        static GetClosestEntity(viewer: Cesium.Viewer, mouse: Cesium.Cartesian2, entities: CesiumBruceEntity[]): CesiumBruceEntity;
    }
}
declare module "entry-points/cesium/visuals/cesium-bruce-entity" {
    import * as Cesium from "cesium";
    import { BruceMeta } from "entry-points/common/bruce-meta";
    interface IBruceCesiumEntity extends Cesium.Entity {
        _bruceEntity: CesiumBruceEntity;
        _bruceEntitySelected: boolean;
    }
    /**
     * Arbitrary class for any bruce entity we are rendering.
     */
    export class CesiumBruceEntity {
        private viewer;
        static ENTITY_ID: number;
        uiEntities: IBruceCesiumEntity[];
        bruceMeta: BruceMeta;
        /**
         * Backwards compatability.
         * @deprecated Please use uiEntities now.
         */
        get uiEntity(): IBruceCesiumEntity;
        /**
         * Backwards compatability.
         * @deprecated Please use uiEntities now.
         */
        set uiEntity(value: IBruceCesiumEntity);
        constructor(viewer: Cesium.Viewer, entities: Cesium.Entity[], bruceMeta: BruceMeta);
        private applyInstance;
        private removeInstance;
        /**
         * Adds a new visual to the bruce entity.
         * @param visual
         */
        AddVisual(visual: Cesium.Entity): void;
        /**
         * Removes a visual from the bruce entity.
         * @param visual
         */
        RemoveVisual(visual: Cesium.Entity): void;
        dispose(): void;
        /**
         * Returns BruceNavigatorEntity for given cesium entity.
         * If entity was not a bruce entity, null is returned.
         * @param entity
         */
        static FromCesiumEntity(entity: Cesium.Entity): CesiumBruceEntity;
        /**
         * Updates the colouring of the cesium visual entity.
         * If the entity is selected then it will update the 'old colours' it falls back on and updates the model fill colour.
         * @param color
         */
        Colorize(color: Cesium.Color): void;
        /**
         * Does a select / deselect depending on current selected state without affecting the selected count
         * This is used when the graphics of the entity have changed and an update is needed
         */
        RefreshSelect(): void;
        /**
         * Highlights the entity
         * Increments the selected count
         */
        Select(): void;
        /**
         * Decrements the selected count
         * Unighlights the entity if selected count is 0 or below
         */
        DeSelect(): void;
        /**
         * Performs callback action on every visual entity.
         * @param action
         */
        DoOnEntity(action: (entity: IBruceCesiumEntity) => void): void;
        /**
         * Performs async callback action on every visual entity.
         * @param action
         */
        DoAsyncOnEntity(action: (entity: IBruceCesiumEntity) => Promise<void>): Promise<void>;
        /**
         * Clones all visuals and returns new Cesium entities for them.
         * Warning: Generated visuals are not added to Cesium Viewer.
         * Warning: Not all visuals can be cloned.
         * @returns: Successfully cloned visuals.
         */
        CloneVisuals(): Cesium.Entity[];
        /**
         * Returns first found entity from given screen position.
         * @param viewer
         * @param screenPos
         */
        static FromMouse(viewer: Cesium.Viewer, screenPos: Cesium.Cartesian2): CesiumBruceEntity;
        /**
         * Returns array of entities from given screen position.
         * @param viewer
         * @param screenPos
         * @returns
         */
        static ManyFromMouse(viewer: Cesium.Viewer, screenPos: Cesium.Cartesian2): CesiumBruceEntity[];
    }
}
declare module "entry-points/cesium/menu-items/cesium-visual-register" {
    import * as Cesium from "cesium";
    import { CesiumBruceEntity } from "entry-points/cesium/visuals/cesium-bruce-entity";
    import { BruceMeta } from "entry-points/common/bruce-meta";
    import { BruceEvent } from "utils/bruce-event";
    /**
     * Acceptable visual types.
     */
    export enum VisualType {
        MODEL3D = 1,
        GLB = 1,
        GEOMETRY = 2,
        POINT = 3,
        TILESET_FEATURE = 4,
        CC3D = 4
    }
    /**
     * Defines cesium visual registration.
     */
    class VisualRego {
        entity: CesiumBruceEntity;
        type: VisualType;
        priority: number;
        constructor(entity: CesiumBruceEntity, type: VisualType, priority: number);
        RemoveVisuals(viewer: Cesium.Viewer): void;
    }
    /**
     * Class to keep track of all rendered entities.
     */
    export class CesiumVisualRegister {
        private viewer;
        private visuals;
        private highlightedEntities;
        private hiddenEntities;
        private isolatedEntity;
        private onVisualUpdate;
        /**
         * Instantiates register for given viewer.
         * @param viewer
         */
        constructor(viewer: Cesium.Viewer);
        /**
         * @returns: visual update event to subscribe to.
         */
        getVisualUpdateEvent(): BruceEvent<VisualRego>;
        /**
         * Returns visuals matching given meta.
         * @param meta
         */
        getVisuals(meta: BruceMeta): CesiumBruceEntity[];
        /**
         * Returns array of entity hashpaths and their corresponding variants.
         */
        getAllVisuals(): {
            hashPath: string;
            variants: CesiumBruceEntity[];
        }[];
        /**
         * Adds an entity to the visual register
         * All items to be added hiden andn the visual register will turn them on
         * @param entity the visual entity added
         * @param actualType the type of the visual used
         * @param intendedType the type of the visual that was requested originally
         * @param clamping the requested clamping style for the item
         * @param menuItem the menu item originating the item
         * @deprecated Please use Add() method instead.
         */
        addVisual(entity: CesiumBruceEntity, actualType: VisualType, intendedType: VisualType, clamping: boolean, menuItem: string): void;
        /**
         * Registers a given entity for a given menu item.
         * @param entity
         * @param type
         * @param menuItemId
         * @param priority The higher the number the more priority this has over other registrations.
         */
        Add(entity: CesiumBruceEntity, type: VisualType, menuItemId: string, priority?: number): void;
        /**
         * Remove entity visual for a provided menu item.
         * @param menuItem
         * @param item
         * @deprecated Please use RemoveForMenuItem() method instead.
         */
        removeVisualForMenuItem(menuItem: string, item: BruceMeta): void;
        /**
         * Remove entity visual for a provided menu item.
         * @param menuItemId
         * @param meta
         */
        RemoveForMenuItem(menuItemId: string, meta: BruceMeta): void;
        /**
         * Returns all visuals for a menu item.
         * Note that these visuals may not be the ones visible as another menu item with higher-
         * render priority rendered them instead.
         * @param menuItemId
         */
        getByMenuItem(menuItemId: string): CesiumBruceEntity[];
        /**
         * Removes all visuals corresponding to given meta.
         * @deprecated Please use Remove() method instead.
         * @param item
         */
        removeVisual(item: BruceMeta): void;
        /**
         * Removes all visuals for a single entity.
         * @param meta
         */
        Remove(meta: BruceMeta): void;
        /**
         * Reviews the entity visuals and picks one to display.
         */
        private UpdateVisibilityOfEntity;
        /**
         * Adds given entity ID to list of highlighted entities, if visual already exists, it highlights it.
         * @param bruceMeta
         * @deprecated Please use Highlight() method instead.
         */
        highlightEntity(bruceMeta: BruceMeta): void;
        /**
         * Adds given entity ID to list of highlighted entities, if visual already exists, it highlights it.
         * @param meta
         */
        Highlight(meta: BruceMeta): void;
        /**
         * Removes given meta from list of highlighted entities, if visual already exists, it unhighlights it
         * @param bruceMeta
         * @deprecated Please use Unhighlight() instead.
         */
        removeHighlight(bruceMeta: BruceMeta): void;
        /**
         * Removes given meta from list of highlighted entities, if visual already exists, it unhighlights it
         * @param meta
         */
        Unhighlight(meta: BruceMeta): void;
        /**
         * Returns if a given meta exists within the visual register.
         * @param meta
         */
        DoesExist(meta: BruceMeta): boolean;
        /**
         * Returns if a given meta is highlighted within the visual register.
         * @param meta
         */
        IsHightlighted(meta: BruceMeta): boolean;
        private isHighlighted;
        /**
         * Returns all highlighted entities.
         */
        getHighlightedEntities(): BruceMeta[];
        /**
         * Isolates entity visuals corresponding to given meta.
         * Pass null to remove isolation.
         * @param meta
         */
        Isolate(meta: BruceMeta): void;
        /**
         * Returns current isolated entity's hashpath.
         */
        getIsolated(): string;
        /**
         * Hides visuals corresponding to given meta.
         * @param meta
         */
        Hide(meta: BruceMeta): void;
        HideByHashPath(hashPath: string): void;
        HideByPath(path: string[]): void;
        /**
         * Hides array of visuals corresponding to given metas.
         * @param metas
         */
        HideList(metas: BruceMeta[]): void;
        /**
         * Unhides visuals corresponding to given meta.
         * @param meta
         */
        Unhide(meta: BruceMeta): void;
        /**
         * Unhides list of visuals corresponding to given meta.
         * @param meta
         */
        UnhideList(metas: BruceMeta[]): void;
        /**
         * Unhides all hidden visuals.
         */
        UnhideAll(): void;
        /**
         * Returns array of hashpaths corresponding to hidden visuals.
         */
        getHidden(): string[];
        /**
         * Returns if visuals corresponding to given meta are set to be hidden or not.
         * @param meta
         * @returns
         */
        isHidden(meta: BruceMeta): boolean;
        /**
         * Returns if visuals corresponding to given meta are isolated.
         * @param meta
         */
        isIsolated(meta: BruceMeta): boolean;
    }
}
declare module "utils/bruce-event-disposable" {
    export class BruceEventDisposable {
        private _eventRemoveCallbacks;
        disposed: boolean;
        /**
         * Records a given event id.
         * @param eventId
         */
        addDisposable(removeCallback: () => void): void;
        /**
         * Disposes any recorded subscriptions.
         */
        dispose(): void;
    }
}
declare module "entry-points/cesium/visuals/cesium-generator-geometry" {
    import * as Cesium from "cesium";
    import { Calculator } from "entry-points/common/calculator";
    import { BruceEventDisposable } from "utils/bruce-event-disposable";
    import { BruceInfo } from "bruce-models/common/bruce-info";
    import { CesiumBruceEntity } from "entry-points/cesium/visuals/cesium-bruce-entity";
    import { BruceAPI } from "api/bruce-api";
    import { IEntityPointStyle, IEntityPolygonStyle, IEntityPolylineStyle, IEntityStyle } from "bruce-models/common/entity-style";
    import { ECameraZoomControlDisplayType } from "bruce-models/common/camera-zoom-control";
    export class CesiumGeneratorGeometry extends BruceEventDisposable {
        private viewer;
        private api;
        private parent;
        pointStyle: IEntityPointStyle;
        polygonStyle: IEntityPolygonStyle;
        polylineStyle: IEntityPolylineStyle;
        calculator: Calculator;
        constructor(api: BruceAPI, viewer: Cesium.Viewer, style: IEntityStyle, cesiumEntity: Cesium.Entity);
        /**
         * Initializes styles for the calculator to reference later.
         */
        private init;
        /**
         * Generates cesium entity and returns bruce navigator entity.
         * @param info The bruce info to use for style calculations.
         * @param displayType If we should be going down the tree of priorities or drawing a fixed type.
         */
        loadEntity(info: BruceInfo, displayType: ECameraZoomControlDisplayType): CesiumBruceEntity;
        private generateVisual;
        /**
         * Returns position value to use for points from given bruce info.
         * @param info
         */
        private getSinglePosition;
        /**
        * Updates the geometry for given cesium entity.
        * @param info What bruce info to use for non-static style calculations?
        * @param geometry What geometry are we reading to use for the update?
        * @param displayType If we should be going down the tree of priorities or drawing a fixed type.
        */
        private updateGeometry;
        /**
         * Creates point / billboard geometry for current cesium entity.
         * @param bruceEntity
         * @param info
         * @param pos
         */
        private createPoint;
        /**
         * Creates polyline geometry for the current cesium entity.
         * @param bruceEntity
         * @param info
         * @param line
         */
        private createPolyline;
        /**
         * Creates polygon geometry for the current cesium entity.
         * @param bruceEntity
         * @param info
         * @param hierarchy
         */
        private createPolygon;
        /**
         * Returns extrusion value caluclated from given bruce info.
         * @param bruceInfo
         */
        private getExtrusion;
        /**
         * Creates polygon hierarchy from given surface geometry string.
         * @param surface
         */
        private createSurfaceGraphics;
        /**
         * Creates cesium polygon hierarchy from given bruce polygon hierarchy record.
         * @param polygons
         */
        private getPolygonGraphics;
        /**
         * Closes a polygon shape (makes sure first and last points are the same).
         * @param posses
         */
        private closePolygon;
        /**
         * @param color
         * @returns: if a given colour is visible or not (exists and has above 0 alpha).
         */
        private isColorVisible;
    }
}
declare module "entry-points/cesium/visuals/cesium-generator-model" {
    import * as Cesium from "cesium";
    import { BruceAPI } from "api/bruce-api";
    import { BruceInfo } from "bruce-models/common/bruce-info";
    import { BruceEventDisposable } from "utils/bruce-event-disposable";
    import { CesiumBruceEntity } from "entry-points/cesium/visuals/cesium-bruce-entity";
    import { IEntityModelStyle } from "bruce-models/common/entity-style";
    export class CesiumGeneratorModel extends BruceEventDisposable {
        private viewer;
        private api;
        private parent;
        private modelStyle;
        private calculator;
        private lod;
        private lodCategory;
        private counter;
        constructor(api: BruceAPI, viewer: Cesium.Viewer, modelStyle: IEntityModelStyle, lodCategory: string, lod: number, cesiumEntity: Cesium.Entity);
        /**
         * Loads a GLB entity
         * @param info the bruce data
         * @param noCache Adds a fake param to the GLB url (cant be used with strict LOD)
        */
        loadEntity(info: BruceInfo, noCache?: boolean): Promise<CesiumBruceEntity>;
        /**
         * Applies color blend mode and colours depending on current model style settings.
         * @param bruceEntity
         * @param info
         */
        private styleEntity;
        /**
         * Returns position value from given bruce info.
         * @param info
         */
        private getSinglePosition;
        /**
         * Sets given position to have height 0.
         * @param pos
         */
        private zeroHeight;
    }
}
declare module "entry-points/common/entities-getter-interface" {
    import { BruceEvent } from "utils/bruce-event";
    import { BruceInfo } from "bruce-models/common/bruce-info";
    /**
     * Represents the possible loading states.
     */
    export enum GetterPagesLoadingState {
        Started = "STARTED",
        Stopped = "STOPPED"
    }
    export interface EntitiesGetter {
        /**
         * Sets the getter to unpaused state.
         * This means entity requests will continue to be made.
         */
        Start(): void;
        /**
         * Sets the getter to paused state.
         * This means entities that are already requested from db will continue to load,
         * but new requests wont be made.
         */
        Pause(): void;
        /**
         * Manual trigger to update.
         */
        Update(): void;
        /**
         * Disposes the getter.
         * This means entities that are already requested from db will not load.
         * New requests will not be made.
         */
        Dispose(): void;
        entityReadyEvent: BruceEvent<BruceInfo>;
        loadingStateChangedEvent: BruceEvent<GetterPagesLoadingState>;
    }
}
declare module "entry-points/cesium/menu-items/cesium-menu-item-ifs" {
    import { MenuItem } from "bruce-models/menu-item/menu-item";
    /**
     * Describes any Cesium Bruce menu item.
     * If a custom menu item is made these three methods must exist for it to work in the manager.
     */
    export interface ICesiumMenuItem {
        Init(): Promise<void>;
        Start(): void;
        dispose(): void;
        menuItem: MenuItem;
    }
}
declare module "entry-points/cesium/menu-items/cesium-menu-item-bruce-entities-extended" {
    import * as Cesium from "cesium";
    import { MenuItemBruceEntities } from "bruce-models/menu-item/menu-item-bruce-entities";
    import { CesiumVisualRegister } from "entry-points/cesium/menu-items/cesium-visual-register";
    import { BruceAPI } from "api/bruce-api";
    import { BruceEventDisposable } from "utils/bruce-event-disposable";
    import { BruceInfo } from "bruce-models/common/bruce-info";
    import { CesiumBruceEntity } from "entry-points/cesium/visuals/cesium-bruce-entity";
    import { BruceMeta } from "entry-points/common/bruce-meta";
    import { IVisualUpdateEvent } from "entry-points/cesium/menu-items/cesium-menu-item-manager";
    import { EntitiesGetter, GetterPagesLoadingState } from "entry-points/common/entities-getter-interface";
    import { BruceEvent } from "utils/bruce-event";
    import { ECameraZoomControlDisplayType } from "bruce-models/common/camera-zoom-control";
    import { ICesiumMenuItem } from "entry-points/cesium/menu-items/cesium-menu-item-ifs";
    export interface ICesiumEntityExtendedWithLOD extends CesiumBruceEntity {
        type?: ECameraZoomControlDisplayType;
        lod?: number;
    }
    /**
     * Loads in bruce entities, registers them and renders them.
     */
    export class CesiumMenuItemBruceEntitiesExtended extends BruceEventDisposable implements ICesiumMenuItem {
        private api;
        private viewer;
        private visualRegister;
        menuItem: MenuItemBruceEntities;
        root: Cesium.Entity;
        private entitiesGetter;
        private loadedEntities;
        private generators;
        private visualUpdateEvent;
        private initialized;
        /**
         * Returns if the menu item has been initialized.
         */
        get IsInitialized(): boolean;
        constructor(api: BruceAPI, viewer: Cesium.Viewer, visualRegister: CesiumVisualRegister, menuItem: MenuItemBruceEntities, getter: EntitiesGetter);
        /**
         * Initializes the menu item.
         */
        Init(): Promise<void>;
        /**
         * Checks if menu item has been initialized.
         * Throws error if false.
         */
        private initCheck;
        /**
         * Starts the loading process.
         */
        Start(): void;
        /**
         * Stops loading anymore entities.
         */
        Pause(): void;
        /**
         * Triggers an update on boundaries.
         * This will cascade into getting entities if boundaries are valid.
         */
        Update(): void;
        /**
         * Returns all visuals registered for this menu item.
         * Note that these visuals may not be the ones visible as another menu item with higher-
         * render priority rendered them instead.
         */
        GetMenuItemVisuals(): CesiumBruceEntity[];
        /**
         * @returns entity ready event for this menu item.
         */
        getEntityReadyEvent(): BruceEvent<BruceInfo>;
        /**
         * @returns loading state change event for this menu item.
         */
        getLoadingStateChangedEvent(): BruceEvent<GetterPagesLoadingState>;
        /**
         * @returns event for when visuals are added or removed.
         */
        getVisualUpdateEvent(): BruceEvent<IVisualUpdateEvent>;
        /**
         * Parses the ZoomControl table to create generators for different LODs.
         */
        private initLods;
        /**
         * Disposes menu item and related subscriptions.
         */
        dispose(): void;
        /**
         * Called when an individual entity loads.
         * @param info
         */
        private entityReady;
        /**
         * Parse the items returned by the request to backend into entities of the UI
         * @param items - the items receievd
         */
        private createEntity;
        /**
         * Creates visual representation of a entity
         * @param item Bruce Info describing the entity
         * @param lod The lod level required for it
         */
        private drawEntity;
        /**
         * Explores an entity and undestant its clamping values.
         * @param entity
         */
        private clampingForEntities;
        /**
         * Returns the zoom control entry for a given distance
         * @param distance the distance to the item
         */
        private zoomControlFromDistance;
        /**
         * Notifies subscriptions about entity visual being created or updated.
         * @param meta
         * @param entity
         */
        private entityDrawn;
        /**
         * Notifies subscriptions about entity visual being removed.
         * @param meta
         */
        private entityRemove;
        /**
         * Adds a given entity if no current entity matches meta.
         * @param entity
         */
        AddEntity(entity: BruceInfo): void;
        /**
         * Removes entity that matches given meta.
         * @param meta
         * @param eventTrigger, if subscriptions should be notified.
         */
        RemoveEntity(meta: BruceMeta, eventTrigger?: boolean): void;
        /**
         * Performs the process of removing and re-adding a given entity.
         * @param entity
         */
        UpdateEntity(entity: BruceInfo): void;
    }
}
declare module "entry-points/cesium/getters/cesium-entities-getter-pages" {
    import { BruceAPI } from "api/bruce-api";
    import { CesiumLoadManager } from "entry-points/cesium/viewer/cesium-load-manager";
    import { CesiumViewMonitor } from "entry-points/cesium/viewer/cesium-view-monitor";
    import { BruceInfo } from "bruce-models/common/bruce-info";
    import { EntityFilter } from "bruce-models/common/entity-filter";
    import { BruceEventDisposable } from "utils/bruce-event-disposable";
    import { BruceEvent } from "utils/bruce-event";
    import { EntitiesGetter, GetterPagesLoadingState } from "entry-points/common/entities-getter-interface";
    /**
     * Handles requesting entities within provided view area using a given entity filter.
     */
    export class CesiumEntitiesGetterPages extends BruceEventDisposable implements EntitiesGetter {
        private api;
        private viewMonitor;
        private loadManager;
        private viewRect;
        private viewCenter;
        private bruceItems;
        private paused;
        private getterDisposed;
        filter: EntityFilter;
        entityReadyEvent: BruceEvent<BruceInfo>;
        loadingStateChangedEvent: BruceEvent<GetterPagesLoadingState>;
        private _lastLoadingState;
        /**
         * Returns the last loading state.
         */
        get LastLoadingState(): GetterPagesLoadingState;
        constructor(api: BruceAPI, viewMonitor: CesiumViewMonitor, loadManager: CesiumLoadManager, filter: EntityFilter);
        /**
         * Initialize subscriptions.
         */
        private subs;
        /**
         * Updates the bounds we are loading for and calls to load entities within those bounds.
         */
        private UpdateBounds;
        /**
         * Loads next area from the defined view rect.
        */
        private LoadingThread;
        /**
         * Sets the getter to paused state.
         * This means entities that are already requested from db will continue to load,
         * but new requests wont be made.
         */
        Pause(): void;
        /**
         * Sets the getter to unpaused state.
         * This means entity requests will continue to be made.
         */
        Start(): void;
        /**
         * Disposes the getter.
         * This means entities that are already requested from db will not load.
         * New requests will not be made.
         */
        Dispose(): void;
        /**
         * Manual trigger to update.
         */
        Update(): void;
    }
}
declare module "entry-points/cesium/common/cesium-tileset-utils" {
    import * as Cesium from "cesium";
    /**
     * Utilities relating to tileset visuals in Cesium.
     */
    export class CesiumTilesetUtils {
        /**
         * Returns tileset information from given tileset entity.
         * @param tileset
         */
        static GetTilesetInfo(tileset: Cesium.Cesium3DTileset): {
            TilesetID: string;
            TilesetURL: string;
            BruceRecURL: string;
        };
        /**
         * Returns tileset ID for given tileset entity.
         * @param tileset
         */
        static GetTilesetID(tileset: Cesium.Cesium3DTileset): string;
        /**
         * Tries to locate a bruce entity path within a given tileset feature.
         * @param entity
         */
        static EntityIDPathFromFeature(entity: Cesium.Cesium3DTileFeature): string[];
    }
}
declare module "bruce-models/common/rotation" {
    export interface IRotation {
        x: number;
        y: number;
        z: number;
    }
}
declare module "bruce-models/tileset-old/tileset-settings-etc" {
    /**
     * Represents the ETC portion of "tileset settings".
     */
    export class TilesetSettingsETC {
        private _raw;
        get raw(): any;
        dontRotate: boolean;
        dontTransform: boolean;
        showAdvancedSettings: boolean;
        /**
         * Returns current state of settings as raw JSON.
         */
        get JSON(): any;
        constructor(rawData: any);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: any): void;
    }
}
declare module "bruce-models/tileset-old/tileset-settings-origin" {
    /**
     * Represents origin settings within tileset settings.
     */
    export class TilesetSettingsOrigin {
        private _raw;
        get raw(): any;
        latitude: number;
        longitude: number;
        altitude: number;
        usingBoundingBox: boolean;
        /**
         * Returns current state of origin settings as raw JSON data.
         */
        get JSON(): any;
        constructor(rawData: any);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: any): void;
    }
}
declare module "bruce-models/tileset-old/tileset-settings-position-offset" {
    /**
     * Represents position offset settings for a UITileset.
     */
    export class TilesetSettingsPositionOffset {
        private _raw;
        get raw(): any;
        north: number;
        east: number;
        altitude: number;
        /**
         * Returns current state of position offset as raw JSON data.
         */
        get JSON(): any;
        constructor(rawData: any);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: any): void;
    }
}
declare module "bruce-models/tileset-old/tileset-settings-rotation" {
    /**
     * Represents rotation settings for a UITileset.
     */
    export class TilesetSettingsRotation {
        private _raw;
        get raw(): any;
        x: number;
        y: number;
        z: number;
        /**
         * Returns current state of rotation settings as raw JSON data.
         */
        get JSON(): any;
        constructor(rawData: any);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: any): void;
    }
}
declare module "bruce-models/tileset-old/tileset-settings-visual" {
    /**
     * Represents visual settings for a UITileset.
     */
    export class TilesetSettingsVisual {
        private _raw;
        get raw(): any;
        maximumScreenSpaceError: number;
        attenuation: boolean;
        attenuationMax: number;
        /**
         * Returns current state of model as raw JSON data.
         */
        get JSON(): any;
        constructor(rawData: any);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: any): void;
    }
}
declare module "bruce-models/tileset-old/tileset-settings-old" {
    import { TilesetSettingsETC } from "bruce-models/tileset-old/tileset-settings-etc";
    import { TilesetSettingsOrigin } from "bruce-models/tileset-old/tileset-settings-origin";
    import { TilesetSettingsPositionOffset } from "bruce-models/tileset-old/tileset-settings-position-offset";
    import { TilesetSettingsRotation } from "bruce-models/tileset-old/tileset-settings-rotation";
    import { TilesetSettingsVisual } from "bruce-models/tileset-old/tileset-settings-visual";
    /**
     * Represents expected data format from API requests.
     */
    export interface ITilesetSettingsOld {
        origin?: {
            latitude?: number;
            longitude?: number;
            altitude?: number;
            usingBoundingBox?: boolean;
        };
        positionOffset?: {
            north: number;
            east: number;
            altitude: number;
        };
        rotation?: {
            x: number;
            y: number;
            z: number;
        };
        visual?: {
            maximumScreenSpaceError: number;
            attenuation: boolean;
            attenuationMax: number;
        };
        etc?: {
            dontRotate: boolean;
            dontTransform: boolean;
        };
    }
    /**
     * Represents tileset settings related to loading and rendering.
     */
    export class TilesetSettingsOld {
        private _raw;
        get raw(): ITilesetSettingsOld;
        origin: TilesetSettingsOrigin;
        positionOffset: TilesetSettingsPositionOffset;
        rotation: TilesetSettingsRotation;
        visual: TilesetSettingsVisual;
        ETC: TilesetSettingsETC;
        /**
         * Returns the current state of settings as formatted JSON.
         */
        get JSON(): ITilesetSettingsOld;
        constructor(rawData: ITilesetSettingsOld);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: ITilesetSettingsOld): void;
    }
}
declare module "entry-points/cesium/visuals/cesium-generator-tileset" {
    import * as Cesium from "cesium";
    import { ITilesetSettingsOld } from "bruce-models/tileset-old/tileset-settings-old";
    export const TilesetEntityRecordVariable = "_TilesetEntityRecord";
    export class CesiumGeneratorTileset {
        static ApplySettings(viewer: Cesium.Viewer, tileset: Cesium.Cesium3DTileset, settings: ITilesetSettingsOld): void;
        static Transform(viewer: Cesium.Viewer, tileset: Cesium.Cesium3DTileset, settings: ITilesetSettingsOld): void;
    }
}
declare module "utils/error-utils" {
    export class ErrorUtils {
        static getMessage(error: any): string;
        static LazyCatch(callback: () => any, defaultValue?: any): any;
        static LazyAsyncCatch(callback: () => Promise<any>, defaultValue?: any): Promise<any>;
    }
}
declare module "bruce-models/common/height-reference" {
    export enum EHeightReference {
        CLAMP_TO_GROUND = 0,
        NONE = 1,
        RELATIVE_TO_GROUND = 2
    }
}
declare module "bruce-models/tileset-old/tileset-creation-settings-location" {
    /**
     * Represents UITileset creation location.
     */
    export class TilesetCreationSettingsLocation {
        private _raw;
        get raw(): any;
        latitude: number;
        longitude: number;
        altitude: number;
        /**
         * Returns current state of model as raw JSON data.
         */
        get JSON(): any;
        constructor(rawData: any);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: any): void;
    }
}
declare module "bruce-models/tileset-old/tileset-creation-settings" {
    import { IFieldPickerValueReadonly } from "entry-points/common/calculator";
    import { EHeightReference } from "bruce-models/common/height-reference";
    import { TilesetCreationSettingsLocation } from "bruce-models/tileset-old/tileset-creation-settings-location";
    export enum ETilesetGeoType {
        Geoloate = "GEOLOCATE",
        Ungeolocate = "UNGEOLOCATE"
    }
    export enum PivotOption {
        None = "none",
        Box = "box",
        Weight = "weight"
    }
    /**
     * Represents expected data format from API requests.
     */
    export interface ITilesetDynamicSettings {
        polygonExtrusion: IFieldPickerValueReadonly[];
        polygonExtrusionEnabled: boolean;
        heightReference: EHeightReference;
        movePivotMode: PivotOption;
        epsg: string;
        TilesetGeoType: ETilesetGeoType;
        location: {
            latitude: number;
            longitude: number;
            altitude: number;
        };
        doubleSidedRendering: boolean;
    }
    /**
     * Represents creation settings for a UITileset.
     * These settings are not applied in any way to the result, only when generating.
     */
    export class UITilesetCreationSettings {
        private _raw;
        get raw(): ITilesetDynamicSettings;
        polygonExtrusion: IFieldPickerValueReadonly[];
        polygonExtrusionEnabled: boolean;
        heightReference: EHeightReference;
        movePivotMode: PivotOption;
        EPSG: string;
        TilesetGeoType: ETilesetGeoType;
        location: TilesetCreationSettingsLocation;
        doubleSidedRendering: boolean;
        /**
         * Returns current state of model as raw JSON data.
         */
        get JSON(): ITilesetDynamicSettings;
        constructor(rawData: ITilesetDynamicSettings);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: ITilesetDynamicSettings): void;
    }
}
declare module "bruce-models/tileset-old/tileset-creation-terrain-source" {
    /**
     * Represents the different terrain source types a creation terrain could be.
     */
    export enum EDynamicUITilesetTerrainSourceType {
        External = "EXTERNAL",
        ION = "ION",
        Default = "DEFAULT"
    }
    /**
     * Represents expected raw data format from bruce API requests.
     */
    export interface IDynamicUITilesetTerrainSource {
        name: string;
        type: EDynamicUITilesetTerrainSourceType;
        ionId?: number;
        url?: string;
    }
    /**
     * Represents terrain source used for height referencing in UITileset generation.
     */
    export class TilesetCreationTerrainSource {
        private _raw;
        get raw(): IDynamicUITilesetTerrainSource;
        name: string;
        type: EDynamicUITilesetTerrainSourceType;
        ionId: number;
        url: string;
        /**
         * Returns current state of model as raw JSON data.
         */
        get JSON(): IDynamicUITilesetTerrainSource;
        constructor(rawData: IDynamicUITilesetTerrainSource);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IDynamicUITilesetTerrainSource): void;
    }
}
declare module "bruce-models/tileset-old/tileset-old" {
    import { BruceAPI } from "api/bruce-api";
    import { ITilesetDynamicSettings, UITilesetCreationSettings } from "bruce-models/tileset-old/tileset-creation-settings";
    import { IDynamicUITilesetTerrainSource, TilesetCreationTerrainSource } from "bruce-models/tileset-old/tileset-creation-terrain-source";
    import { ITilesetSettingsOld, TilesetSettingsOld } from "bruce-models/tileset-old/tileset-settings-old";
    /**
     * Possible valid tileset types.
     */
    export enum ETilesetOldType {
        Static = "S",
        Dynamic = "D",
        External = "X",
        Raster = "R",
        MapTiles = "M"
    }
    /**
     * Represents expected data format from API requests.
     */
    export interface ITilesetOld {
        ID: string;
        Name: string;
        Type: ETilesetOldType;
        RootFileName: string;
        Settings?: ITilesetSettingsOld;
        "TilesetCreation.EntityType.ID"?: string;
        "TilesetCreation.EntitiesFilter"?: any;
        "TilesetCreation.TerrainSource"?: IDynamicUITilesetTerrainSource;
        "TilesetCreation.Settings"?: ITilesetDynamicSettings;
        "TilesetCreation.ZoomControl"?: string;
    }
    /**
     * Represents a single Bruce UITileset.
     */
    export class TilesetOld {
        private _raw;
        get raw(): ITilesetOld;
        ID: string;
        Name: string;
        Type: ETilesetOldType;
        RootFileName: string;
        Settings: TilesetSettingsOld;
        TilesetCreationEntityTypeID: string;
        TilesetCreationEntitiesFilter: any;
        TilesetCreationTerrainSource: TilesetCreationTerrainSource;
        TilesetCreationSettings: UITilesetCreationSettings;
        TilesetCreationZoomControl: string;
        tilesetFileIDs: string[];
        /**
         * Returns current state of tilet as raw JSON data.
         */
        get JSON(): ITilesetOld;
        get isIDValid(): boolean;
        get isNameValid(): boolean;
        constructor(rawData: ITilesetOld);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: ITilesetOld): void;
        /**
         * Requests save on current state.
         * @param onError callback to notify about error.
         */
        Save(api: BruceAPI, onError?: (message: string) => void): Promise<void>;
        /**
         * Requests deletion of current tileset.
         * @param onError callback to notify about error.
         */
        Delete(api: BruceAPI, onError?: (message: string) => void): Promise<void>;
        /**
         * Refreshes tileset using updated record.
         * @param refreshFileIds If array of file ids should be reloaded.
         */
        Refresh(api: BruceAPI, refreshFileIds?: boolean): Promise<void>;
        /**
         * Loads/reloads and returns the list of file ids corresponding to the current tileset.
         */
        LoadTilesetFileIDs(api: BruceAPI): Promise<string[]>;
        /**
         * Deletes all files associated with the tileset.
         */
        DeleteAllTilesetFiles(api: BruceAPI): Promise<void>;
        /**
         * Deletes file associated with the tileset.
         * @param fileName
         */
        DeleteTilesetFile(api: BruceAPI, fileName: string): Promise<void>;
        /**
         * Extracts all DAE files from the tileset and registers them as entities + LOD.
         * @param entityTypeId The entity type to put entity registrations inside.
         * @returns pending action id to monitor.
         */
        IndexGraphics(api: BruceAPI, entityTypeId: string): Promise<number>;
        /**
         * Initiates dynamic tileset generation.
         * @param sourceData Will be deprecated. Currently passes some settings to API. Soon API will check tileset record instead.
         * @returns
         */
        GenerateFiles(api: BruceAPI, sourceData: any): Promise<number>;
        /**
         * Returns tileset corresponding to given id.
         * @param tilesetId
         * @param onError callback to notify about error.
         */
        static GetTilesetByID(api: BruceAPI, tilesetId: string, onError?: (message: string) => void): Promise<TilesetOld>;
        /**
         * Returns raw tileset data corresponding to given id.
         * @param tilesetId
         * @param onError callback to notify about error.
         */
        private static GetRawTilesetByID;
        /**
         * Returns list of all tileset records.
         */
        static GetTilesetList(api: BruceAPI): Promise<TilesetOld[]>;
    }
}
declare module "entry-points/cesium/menu-items/cesium-menu-item-arbitrary-tileset-extended" {
    import * as Cesium from "cesium";
    import { MenuItemArbitraryTileset } from "bruce-models/menu-item/menu-item-arbitrary-tileset";
    import { CesiumVisualRegister } from "entry-points/cesium/menu-items/cesium-visual-register";
    import { BruceAPI } from "api/bruce-api";
    import { BruceEventDisposable } from "utils/bruce-event-disposable";
    import { BruceInfo } from "bruce-models/common/bruce-info";
    import { ICesiumMenuItem } from "entry-points/cesium/menu-items/cesium-menu-item-ifs";
    export class CesiumMenuItemArbitraryTilesetExtended extends BruceEventDisposable implements ICesiumMenuItem {
        private api;
        root: Cesium.Entity;
        private tileset;
        private viewer;
        private loadedCesiumEntities;
        private visualRegister;
        menuItem: MenuItemArbitraryTileset;
        private styleMapping;
        private fallbackStyle;
        private calculator;
        private loadProgressHandler;
        private tileLoadHandler;
        private tileFailedHandler;
        private initialized;
        /**
         * Returns if the menu item has been initialized.
         */
        get IsInitialized(): boolean;
        constructor(api: BruceAPI, viewer: Cesium.Viewer, visualRegister: CesiumVisualRegister, menuItem: MenuItemArbitraryTileset);
        /**
         * Initializes menu item.
         */
        Init(): Promise<void>;
        /**
         * Checks if menu item has been initialized.
         * Throws error if false.
         */
        private initCheck;
        /**
         * Starts loading tileset graphics.
         */
        Start(): Promise<void>;
        /**
         * Parses style mapping.
         */
        private initLods;
        dispose(): void;
        /**
         * Initializes cesium event listeners,
         */
        private listeners;
        /**
         * Apply tileset settings once tileset has loaded in cesium view.
         */
        private onCesiumLoad;
        /**
         * Maps tileset features to bruce entities.
         * @param tile
         */
        mapCyberCityTile(tile: any): void;
        /**
         * Maps and stores CC3D entity to possible Bruce ID.
         * @param cesiumEntity
         */
        private mapCyberCityCesiumEntity;
        /**
         * Customizes tileset entity using current model styling.
         * @param bruceEntity
         * @param info
         */
        private customizeModel;
        /**
         * Performs the process of refreshing application of style on an entity.
         * @param entity
         */
        UpdateEntity(entity: BruceInfo): void;
    }
}
declare module "entry-points/cesium/menu-items/cesium-menu-item-loaded-bruce-entities-extended" {
    import * as Cesium from "cesium";
    import { BruceAPI } from "api/bruce-api";
    import { BruceInfo } from "bruce-models/common/bruce-info";
    import { MenuItemLoadedEntities } from "bruce-models/menu-item/menu-item-loaded-entities";
    import { BruceEvent } from "utils/bruce-event";
    import { BruceEventDisposable } from "utils/bruce-event-disposable";
    import { BruceMeta } from "entry-points/common/bruce-meta";
    import { EntitiesGetter } from "entry-points/common/entities-getter-interface";
    import { CesiumBruceEntity } from "entry-points/cesium/visuals/cesium-bruce-entity";
    import { ICesiumMenuItem } from "entry-points/cesium/menu-items/cesium-menu-item-ifs";
    import { IVisualUpdateEvent } from "entry-points/cesium/menu-items/cesium-menu-item-manager";
    import { CesiumVisualRegister } from "entry-points/cesium/menu-items/cesium-visual-register";
    export class CesiumMenuItemLoadedBruceEntitiesExtended extends BruceEventDisposable implements ICesiumMenuItem {
        private api;
        private viewer;
        private visualRegister;
        menuItem: MenuItemLoadedEntities;
        root: Cesium.Entity;
        private entitiesGetter;
        private geometryGenerator;
        private glbGenerator;
        private loadedEntities;
        private visualUpdateEvent;
        private initialized;
        /**
         * Returns if the menu item has been initialized.
         */
        get IsInitialized(): boolean;
        constructor(api: BruceAPI, viewer: Cesium.Viewer, visualRegister: CesiumVisualRegister, menuItem: MenuItemLoadedEntities, getter: EntitiesGetter);
        /**
         * Initializes menu item.
         */
        Init(): Promise<void>;
        /**
         * Checks if menu item has been initialized.
         * Throws error if false.
         */
        private initCheck;
        /**
         * Starts the loading process.
         */
        Start(): void;
        /**
         * Stops loading anymore entities.
         */
        Pause(): void;
        /**
         * Triggers an update on boundaries.
         * This will cascade into getting entities if boundaries are valid.
         */
        Update(): void;
        /**
         * Adds a given entity if no current entity matches meta.
         * @param entity
         */
        AddEntity(entity: BruceInfo): void;
        /**
         * Removes entity that matches given meta.
         * @param meta
         * @param eventTrigger, if subscriptions should be notified.
         */
        RemoveEntity(meta: BruceMeta, eventTrigger?: boolean): void;
        /**
         * Performs the process of removing and re-adding a given entity.
         * @param entity
         */
        UpdateEntity(entity: BruceInfo): void;
        /**
         * Returns all visuals registered for this menu item.
         * Note that these visuals may not be the ones visible as another menu item with higher-
         * render priority rendered them instead.
         */
        GetMenuItemVisuals(): CesiumBruceEntity[];
        /**
         * @returns entity ready event for this menu item.
         */
        getEntityReadyEvent(): BruceEvent<BruceInfo>;
        /**
         * @returns event for when visuals are added or removed.
         */
        getVisualUpdateEvent(): BruceEvent<IVisualUpdateEvent>;
        /**
         * Parses styles to create generators.
         */
        private initLods;
        /**
         * Disposes menu item and related subscriptions.
         */
        dispose(): void;
        /**
         * Called when an individual entity loads.
         * @param info
         */
        private entityReady;
        /**
         * Parse the items returned by the request to backend into entities of the UI
         * @param items - the items receievd
         */
        private createEntity;
        /**
         * Creates visual representation of a entity
         * @param item Bruce Info describing the entity
         * @param lod The lod level required for it
         */
        private drawEntity;
        /**
         * Explores an entity and undestant its clamping values.
         * @param entity
         */
        private clampingForEntities;
        /**
         * Notifies subscriptions about entity visual being created or updated.
         * @param meta
         * @param entity
         */
        private entityDrawn;
        /**
         * Notifies subscriptions about entity visual being removed.
         * @param meta
         */
        private entityRemove;
    }
}
declare module "entry-points/common/entity-preloaded-getter" {
    import { BruceInfo } from "bruce-models/common/bruce-info";
    import { BruceEvent } from "utils/bruce-event";
    import { BruceEventDisposable } from "utils/bruce-event-disposable";
    import { EntitiesGetter, GetterPagesLoadingState } from "entry-points/common/entities-getter-interface";
    export class EntityPreloadedGetter extends BruceEventDisposable implements EntitiesGetter {
        entityReadyEvent: BruceEvent<BruceInfo>;
        loadingStateChangedEvent: BruceEvent<GetterPagesLoadingState>;
        private _lastLoadingState;
        private getterDisposed;
        private deliverTimeout;
        private delay;
        private batchSize;
        private entities;
        private currentIndex;
        /**
         * Returns the last loading state.
         */
        get LastLoadingState(): GetterPagesLoadingState;
        /**
         * Create getter instance for given entities to deliver batches of entities.
         * @param entities the pool of entities to deliver.
         * @param delay how often in milliseconds should batch be delivered.
         * @param batchSize how many entities to deliver per batch.
         */
        constructor(entities: BruceInfo[], delay?: number, batchSize?: number);
        private startLoadingThread;
        private doDelivery;
        /**
         * Manually calls a batch delivery.
         */
        Update(): void;
        /**
         * Sets the getter to paused state.
         * This means entities that are already delivering will continue to load,
         * but new requests wont be made.
         */
        Pause(): void;
        /**
         * Sets the getter to unpaused state.
         * This means new entity deliveries will be made.
         */
        Start(): void;
        /**
         * Disposes the getter.
         * This means entities that are already delivering will not load.
         * New batches will not be delivered.
         */
        Dispose(): void;
    }
}
declare module "entry-points/cesium/menu-items/cesium-menu-item-unknown" {
    import { BruceInfo } from "bruce-models/common/bruce-info";
    import { MenuItem } from "bruce-models/menu-item/menu-item";
    import { ICesiumMenuItem } from "entry-points/cesium/menu-items/cesium-menu-item-ifs";
    /**
     * Represents a menu item that did not fall into other extended cateogories.
     * This is also used for category level menu items that are used to enable others.
     */
    export class CesiumMenuItemUnknown implements ICesiumMenuItem {
        menuItem: MenuItem;
        constructor(menuItem: MenuItem);
        Init(): Promise<void>;
        Start(): void;
        dispose(): void;
        UpdateEntity(entity: BruceInfo): void;
    }
}
declare module "entry-points/cesium/menu-items/cesium-menu-item-model-tileset-extended" {
    import * as Cesium from "cesium";
    import { CesiumVisualRegister } from "entry-points/cesium/menu-items/cesium-visual-register";
    import { BruceAPI } from "api/bruce-api";
    import { BruceEventDisposable } from "utils/bruce-event-disposable";
    import { BruceInfo } from "bruce-models/common/bruce-info";
    import { ICesiumMenuItem } from "entry-points/cesium/menu-items/cesium-menu-item-ifs";
    import { MenuItemModelTileset } from "bruce-models/menu-item/menu-item-model-tileset";
    export class CesiumMenuItemModelTilesetExtended extends BruceEventDisposable implements ICesiumMenuItem {
        private api;
        root: Cesium.Entity;
        private tileset;
        private viewer;
        private loadedCesiumEntities;
        private visualRegister;
        private tilesetRecord;
        menuItem: MenuItemModelTileset;
        private calculator;
        private loadProgressHandler;
        private tileLoadHandler;
        private tileFailedHandler;
        private initialized;
        private styleMapping;
        private styleMappingLoaded;
        private styleMappingsLoaded;
        private fallbackStyle;
        private runningQueues;
        private recordLoadQueue;
        private recordCheckQueue;
        private queueLoadInterval;
        private queueCheckInterval;
        /**
         * Returns if the menu item has been initialized.
         */
        get IsInitialized(): boolean;
        constructor(api: BruceAPI, viewer: Cesium.Viewer, visualRegister: CesiumVisualRegister, menuItem: MenuItemModelTileset);
        /**
         * Initializes menu item.
         */
        Init(): Promise<void>;
        /**
         * Checks if menu item has been initialized.
         * Throws error if false.
         */
        private initCheck;
        /**
         * Starts loading tileset graphics.
         */
        Start(): Promise<void>;
        /**
         * Parses style mapping.
         */
        private initStyleMap;
        /**
         * Returns array of all entity type ids inside given model tree.
         * @param modelTree
         * @returns
         */
        private getEntityTypeIdsFromModelTree;
        /**
         * Appends to given array all entity type ids found in given branch and its children.
         * @param branch
         * @param arr
         */
        private digEntityTypeIdsFromModelTreeBranch;
        dispose(): void;
        /**
         * Initializes cesium event listeners,
         */
        private listeners;
        /**
         * Apply tileset settings once tileset has loaded in cesium view.
         */
        private onCesiumLoad;
        /**
         * Starts interval that occasionally checks for records that need loading (for styling).
         */
        private startRecordLoadingQueue;
        private positionTileset;
        /**
         * Applies render settings to the tileset.
         */
        private configureTileset;
        /**
         * Maps tileset features to bruce entities.
         * @param tile
         * @returns
         */
        mapTile(tile: Cesium.Cesium3DTile): void;
        /**
         * Queues given tileset feature to be styled.
         * @param meta
         * @param entity
         */
        private queueTilesetFeatureStyle;
        /**
         * Processes queue of tileset features for checking if they need full style data or not.
         */
        private processTilesetFeatureCheckQueue;
        /**
         * Locates bruce data within feature to register it.
         * @param feature
         * @returns
         */
        private mapTilesetFeature;
        private getMetaByGeomId;
        private digMetaByGeomId;
        private getEntityTypeByPath;
        private digModelTreeByPath;
        /**
         * Returns if given meta needs full BruceInfo record to style.
         * @param meta
         * @param feature
         */
        private getTilesetFeatureNeedsFullData;
        /**
         * Returns style applicable to given meta.
         * @param meta
         * @param feature
         */
        private getTilesetFeatureStyle;
        /**
         * Styles given tileset feature without entity data.
         * @param entity
         */
        private styleTilesetFeature;
        /**
         * Styles given tileset feature using full entity data.
         * @param entity
         * @param bruceInfo
         */
        private styleTilesetFeatureFullData;
        /**
         * Returns entities for next queue process.
         */
        private getEntitiesForQueue;
        /**
         * Calls to process current queue of entities to style with full data.
         * If a queue is already in progress then calling will do nothing.
         * Queue will automatically keep calling itself until no mappings are left.
         * @returns
         */
        private processQueue;
        UpdateEntity(data: BruceInfo): void;
    }
}
declare module "entry-points/cesium/menu-items/cesium-menu-item-manager" {
    import * as Cesium from "cesium";
    import { BruceAPI } from "api/bruce-api";
    import { MenuItem } from "bruce-models/menu-item/menu-item";
    import { MenuItemBruceEntities } from "bruce-models/menu-item/menu-item-bruce-entities";
    import { CesiumViewMonitor } from "entry-points/cesium/viewer/cesium-view-monitor";
    import { CesiumLoadManager } from "entry-points/cesium/viewer/cesium-load-manager";
    import { CesiumMenuItemBruceEntitiesExtended } from "entry-points/cesium/menu-items/cesium-menu-item-bruce-entities-extended";
    import { CesiumVisualRegister } from "entry-points/cesium/menu-items/cesium-visual-register";
    import { EntitiesGetter } from "entry-points/common/entities-getter-interface";
    import { CesiumMenuItemArbitraryTilesetExtended } from "entry-points/cesium/menu-items/cesium-menu-item-arbitrary-tileset-extended";
    import { MenuItemSingleEntity } from "bruce-models/menu-item/menu-item-single-entity";
    import { MenuItemLoadedEntities } from "bruce-models/menu-item/menu-item-loaded-entities";
    import { CesiumMenuItemLoadedBruceEntitiesExtended } from "entry-points/cesium/menu-items/cesium-menu-item-loaded-bruce-entities-extended";
    import { BruceMeta } from "entry-points/common/bruce-meta";
    import { CesiumBruceEntity } from "entry-points/cesium/visuals/cesium-bruce-entity";
    import { BruceEvent } from "utils/bruce-event";
    import { CesiumMenuItemUnknown } from "entry-points/cesium/menu-items/cesium-menu-item-unknown";
    import { ProjectViewBookmark } from "bruce-models/project-view/project-view-bookmark";
    import { ProjectView } from "bruce-models/project-view/project-view";
    import { BruceInfo } from "bruce-models/common/bruce-info";
    import { CesiumMenuItemModelTilesetExtended } from "entry-points/cesium/menu-items/cesium-menu-item-model-tileset-extended";
    export interface IVisualUpdateEvent {
        meta: BruceMeta;
        visual: CesiumBruceEntity;
    }
    export const MIN_ZOOM_VERSION = 513;
    export type EnabledItem = CesiumMenuItemBruceEntitiesExtended | CesiumMenuItemArbitraryTilesetExtended | CesiumMenuItemLoadedBruceEntitiesExtended | CesiumMenuItemUnknown | CesiumMenuItemModelTilesetExtended;
    export class CesiumMenuItemManager {
        static counter: number;
        private api;
        private viewer;
        private viewMonitor;
        private loadManager;
        menuItems: MenuItem[];
        visualRegister: CesiumVisualRegister;
        enabledItems: EnabledItem[];
        menuItemStateChangedEvent: BruceEvent<{
            menuItemId: string;
            state: boolean;
        }>;
        /**
         * Instantiates manager using given menu items.
         * @param viewer
         * @param viewMonitor
         * @param menuItems
         */
        constructor(api: BruceAPI, viewer: Cesium.Viewer, viewMonitor: CesiumViewMonitor, loadManager: CesiumLoadManager, visualRegister: CesiumVisualRegister, menuItems: MenuItem[]);
        /**
         * Creates and returns an extended menu item for a given menu item.
         * If a given menu item has already been extended then enabled then the enabled item is returned.
         * If the menu item's type is unsupported then NULL is returned.
         * @param menuItem
         */
        CreateExtendedItem(menuItem: MenuItem): Promise<EnabledItem>;
        /**
         * Enables a given extended menu item.
         * @param extendedItem
         */
        EnableExtendedMenuItem(extendedItem: EnabledItem): Promise<void>;
        /**
         * Enables a given menu item.
         * @param menuItem
         */
        EnableMenuItem(menuItem: MenuItem): Promise<EnabledItem>;
        /**
         * Disables a given menu item.
         * @param menuItem
         * @deprecated Please use DisableMenuItem().
         */
        disableMenuItem(enabledItem: EnabledItem): void;
        /**
         * Disables a given menu item.
         * @param enabledItem
         */
        DisableMenuItem(enabledItem: EnabledItem): void;
        /**
         * Disables all enabled menu items.
         */
        DisableAll(): void;
        /**
         * Returns entities pages getter for a given menu item.
         * @param menuItem
         */
        CreateEntitiesPagesGetter(menuItem: MenuItemBruceEntities): EntitiesGetter;
        /**
         * Returns entities pagination getter for a given menu item.
         * @param menuItem
         */
        CreateLoadedEntitiesGetter(menuItem: MenuItemLoadedEntities): EntitiesGetter;
        /**
         * Returns entity getter for a given menu item.
         * @param menuItem
         */
        CreateEntityGetter(menuItem: MenuItemSingleEntity): EntitiesGetter;
        /**
         * Returns menu item corresponding to given id from list of menu items in manager.
         * It will check child items of menu items too.
         * Warning: This does not check enabled items.
         */
        GetMenuItemByID(id: string): MenuItem;
        /**
         * Returns menu item to enable for a given menu item id.
         * Warning: This does not check enabled items.
         * @param id
         */
        GetMenuItemBranchByID(id: string): MenuItem;
        /**
         * Returns if a menu item is currently enabled by its id.
         * @param id
         */
        GetMenuItemEnabled(id: string): boolean;
        /**
         * Populates bookmark settings to represent what menu items are currently enabled.
         * This also populates hidden entities using the visual register.
         *
         * Warning: Project view must contain the menu items.
         * @param projectView
         * @param bookmark
         */
        PopulateBookmarkMenuItems(projectView: ProjectView, bookmark: ProjectViewBookmark): void;
        /**
         * Runs through enabled menu items and updates them using given bruce info.
         * If entity exists in items it will refresh it.
         * @param bruceInfo
         */
        UpdateMenuItemsByInfo(bruceInfo: BruceInfo): void;
    }
}
declare module "entry-points/cesium/viewer/cesium-camera-handler" {
    import * as Cesium from "cesium";
    /**
     * Handles provided cesium view camera.
     * Allows for manipulating camera state.
     */
    export class CesiumCameraHandler {
        private viewer;
        private _frozen;
        get isFrozen(): boolean;
        set isFrozen(state: boolean);
        constructor(viewer: Cesium.Viewer);
        /**
         * Stops camera movement events.
         */
        private freeze;
        /**
         * Enables camera movement events.
         */
        private unfreeze;
    }
}
declare module "entry-points/cesium/common/cesium-bruce-imagery-provider" {
    import * as Cesium from "cesium";
    export interface ICesiumImageryLayerExtended extends Cesium.ImageryLayer {
        _cesiumBruceImageryLayer: CesiumBruceImageryLayer;
    }
    export class CesiumBruceImageryLayer {
        private _id;
        get id(): string;
        clientAccountId?: string;
        cesiumLayer: Cesium.ImageryLayer;
        name: string;
        description: string;
        imageUrl: string;
        constructor(layer: Cesium.ImageryLayer, name: string, id?: string, clientAccountId?: string);
        /**
         * Returns cesium bruce imagery provider associated with given cesium imagery provider.
         * @param imageryLayer
         * @returns
         */
        static FromCesiumImageryLayer(imageryLayer: Cesium.ImageryLayer): CesiumBruceImageryLayer;
        /**
         * Returns cesium bruce imagery providers associated with given cesium imagery providers.
         * @param imageryLayers
         */
        static FromCesiumImageryLayers(imageryLayers: Cesium.ImageryLayer[]): CesiumBruceImageryLayer[];
    }
}
declare module "entry-points/cesium/common/cesium-imagery-handler" {
    import * as Cesium from "cesium";
    import { CesiumBruceImageryLayer } from "entry-points/cesium/common/cesium-bruce-imagery-provider";
    /**
     * Utility to help with managing imagery layers for a cesium layer collection.
     */
    export class CesiumImageryHandler {
        private layers;
        private collection;
        constructor(imageryLayers?: Cesium.ImageryLayerCollection);
        /**
         * Replaces the collection referenece the handler is made around.
         * This will clear given collection and apply enabled imageries from previous collection to the new one.
         * @param collection
         */
        SetCollection(collection: Cesium.ImageryLayerCollection): void;
        /**
         * Adds new imagery layer to the handler (This will not automatically enable the layer).
         * Returns imagery layer reference id.
         */
        AddCesiumLayer(layer: Cesium.ImageryLayer): string;
        /**
         * Adds new imagery layer to the handler.
         * If layer with same id exists. Data is overriden.
         */
        AddLayer(layer: CesiumBruceImageryLayer): void;
        /**
         * Removes layer from handler.
         * This will also disable it.
         * @param layerId
         */
        RemoveLayerById(layerId: string): void;
        /**
         * @param layer
         * @returns if a given layer is currently enabled.
         */
        GetIsLayerEnabled(layer: CesiumBruceImageryLayer): boolean;
        /**
         * @param layerId
         * @returns if a given layer is currently enabled.
         */
        GetIsLayerEnabledById(layerId: string): boolean;
        /**
         * Returns all currently enabled imagery layers.
         */
        GetEnabledLayers(): CesiumBruceImageryLayer[];
        /**
         * Returns all currently disabled imagery layers.
         */
        GetDisabledLayers(): CesiumBruceImageryLayer[];
        /**
         * Returns all registered imagery layers.
         * @returns
         */
        GetRegisteredLayers(): CesiumBruceImageryLayer[];
        /**
         * Adds all enabled layers in Cesium collection to the handler.
         */
        UpdateUsingCesiumEnabled(): void;
        /**
         * Clears all registered layers and runs an update using Cesium collection.
         */
        Refresh(): void;
        /**
         * Returns registered layer by given layer id.
         * @param layerId
         * @returns
         */
        GetLayerById(layerId: string): CesiumBruceImageryLayer;
        /**
         * Returns a layer's index.
         * -1 means layer is not enabled.
         * @param layerId
         * @returns
         */
        GetLayerIndex(layerId: string): number;
        /**
         * Sets the index for a given layer.
         * If layer was disabled and index set is not -1 then layer is set to be enabled.
         * If layer was enabled and index set is -1 the layer is set to be disabled.
         * @param layerId
         * @param index
         */
        SetLayerIndex(layerId: string, index: number): void;
        /**
         * Enables layer associated with given layer id.
         * @param layerId
         */
        Enable(layerId: string): void;
        /**
         * Disables layer associated with given layer id.
         * @param layerId
         */
        Disable(layerId: string): void;
        /**
         * Moves layer associated with given id to the top.
         * If layer is disabled it will enable it.
         * @param layerId
         */
        MoveLayerToTop(layerId: string): void;
        /**
         * Moves layer associated with given id to the bottom.
         * If layer is disabled it will enable it.
         * @param layerId
         */
        MoveLayerToBottom(layerId: string): void;
        /**
         * Clears all imageries registered in the handler.
         * Imageries cleared are disabled.
         */
        Clear(): void;
        /**
         * Disables all registered and enabled layers.
         */
        DisableAll(): void;
        /**
         * Enables all registered layers.
         */
        EnableAll(): void;
        /**
         * Performs callback on all registered layers.
         * @param callback
         */
        DoOnLayer(callback: (layer: CesiumBruceImageryLayer) => void): void;
        /**
         * Performs callback on all registered layers.
         * @param callback
         */
        DoOnLayerAsync(callback: (layer: CesiumBruceImageryLayer) => Promise<any>): Promise<void>;
    }
}
declare module "entry-points/cesium/common/cesium-shadow-handler" {
    import * as Cesium from "cesium";
    import { ProjectViewSettings } from "bruce-models/project-view/project-view-settings";
    export enum ECesiumShadowHandlerState {
        Moving = 0,
        Static = 1,
        Disabled = 2
    }
    /**
     * Applies settings to Cesium viewer.
     * To manually update state call 'Update'.
     * Alternatively call 'EnableEventListening' to detect camera movements automatically and apply states for you.
     *
     * Warning: The tool starts disabled by default. Update state once before enabling events.
     */
    export class CesiumShadowHandler {
        private viewer;
        private settings;
        private _state;
        get state(): ECesiumShadowHandlerState;
        get disabled(): boolean;
        private moveStartEventCallback;
        private moveStopEventCallback;
        stateSwapDelay: number;
        private stateSwapTimeout;
        constructor(viewer: Cesium.Viewer, settings: ProjectViewSettings, state?: ECesiumShadowHandlerState);
        /**
         * Applies project view settings to Cesium viewer shadows.
         * @param settings
         */
        ApplyViewSettings(settings: ProjectViewSettings): void;
        /**
         * Updates state and applies settings to Cesium Viewer to match it.
         * @param state
         */
        Update(state: ECesiumShadowHandlerState): void;
        private enableSettings;
        private disableShadows;
        /**
         * Starts listening for Cesium camera movements to automatically apply states.
         * Warning: If in disabled state, movements are ignored.
         */
        EnableEventListening(): void;
        /**
         * Stops listening for camera movements.
         */
        DisableEventListening(): void;
    }
}
declare module "entry-points/cesium/common/cesium-ambient-occlusion-handler" {
    import * as Cesium from "cesium";
    import { ProjectViewSettings } from "bruce-models/project-view/project-view-settings";
    export enum ECesiumAmbientOcclusionHandlerState {
        Enabled = 0,
        Disabled = 1
    }
    export class CesiumAmbientOcclusionHandler {
        private viewer;
        private settings;
        private _state;
        get state(): ECesiumAmbientOcclusionHandlerState;
        get disabled(): boolean;
        constructor(viewer: Cesium.Viewer, settings: ProjectViewSettings, state?: ECesiumAmbientOcclusionHandlerState);
        /**
         * Applies project view settings to Cesium viewer ambient occlusion.
         * @param settings
         */
        ApplyViewSettings(settings: ProjectViewSettings): void;
        /**
         * Updates state and applies settings to Cesium Viewer to match it.
         * @param state
         */
        Update(state: ECesiumAmbientOcclusionHandlerState): void;
        private enableSettings;
        private disableAO;
    }
}
declare module "entry-points/cesium/common/cesium-bruce-terrain-provider" {
    import * as Cesium from "cesium";
    export interface ICesiumTerrainProviderExtended extends Cesium.TerrainProvider {
        _cesiumBruceTerrain: CesiumBruceTerrainProvider;
    }
    export class CesiumBruceTerrainProvider {
        private _id;
        get id(): string;
        clientAccountId?: string;
        cesiumProvider: Cesium.TerrainProvider;
        name: string;
        description: string;
        imageUrl: string;
        constructor(provider: Cesium.TerrainProvider, name: string, id?: string, clientAccountId?: string);
        /**
         * Returns cesium bruce terrain provider associated with given cesium terrain provider.
         * @param imageryLayer
         * @returns
         */
        static FromCesiumTerrainProvider(terrainProvider: Cesium.TerrainProvider): CesiumBruceTerrainProvider;
        /**
         * Returns cesium bruce terrain providers associated with given cesium terrain providers.
         * @param imageryLayers
         */
        static FromCesiumTerrainProviders(terrainProviders: Cesium.TerrainProvider[]): CesiumBruceTerrainProvider[];
    }
}
declare module "entry-points/cesium/common/cesium-terrain-handler" {
    import * as Cesium from "cesium";
    import { CesiumBruceTerrainProvider } from "entry-points/cesium/common/cesium-bruce-terrain-provider";
    export class CesiumTerrainHandler {
        private providers;
        private viewer;
        constructor(viewer?: Cesium.Viewer);
        /**
         * Adds new terrain provider to the handler (This will not automatically enable the provider).
         * Returns provider reference id.
         */
        AddCesiumProvider(provider: Cesium.TerrainProvider): string;
        /**
         * Adds new terrain provider to the handler.
         * If provider with same id exists. Data is overriden.
         */
        AddProvider(provider: CesiumBruceTerrainProvider): void;
        /**
         * Removes provider from handler.
         * Cannot remove provider that is currently enabled.
         * @param providerId
         */
        RemoveProviderById(providerId: string): void;
        /**
         * @param provider
         * @returns if a given provider is currently enabled.
         */
        GetIsProviderEnabled(provider: CesiumBruceTerrainProvider): boolean;
        /**
         * @param providerId
         * @returns if a given provider is currently enabled.
         */
        GetIsProviderEnabledById(providerId: string): boolean;
        /**
         * Returns currently enabled terrain provider.
         */
        GetEnabledProvider(): CesiumBruceTerrainProvider;
        /**
         * Returns all currently disabled terrain providers.
         */
        GetDisabledProviders(): CesiumBruceTerrainProvider[];
        /**
         * Returns all registered terrain providers.
         * @returns
         */
        GetRegisteredProviders(): CesiumBruceTerrainProvider[];
        /**
         * Adds enabled Cesium provider to the handler.
         */
        UpdateUsingCesiumEnabled(): void;
        /**
         * Clears all registered providers and runs an update using Cesium enabled provider.
         */
        Refresh(): void;
        /**
         * Returns registered provider by given provider id.
         * @param providerId
         */
        GetProviderById(providerId: string): CesiumBruceTerrainProvider;
        /**
         * Enables provider associated with given provider id.
         * @param providerId
         */
        Enable(providerId: string): void;
        /**
         * Performs callback on all registered providers.
         * @param callback
         */
        DoOnProvider(callback: (provider: CesiumBruceTerrainProvider) => any): void;
        /**
         * Performs callback on all registered providers.
         * @param callback
         */
        DoOnProviderAsync(callback: (provider: CesiumBruceTerrainProvider) => Promise<any>): Promise<void>;
    }
}
declare module "utils/console-utils" {
    export enum EConsoleColor {
        Red = "#c93836",
        Green = "#62c936",
        Blue = "#368cc9",
        Pink = "#c93671",
        Yellow = "#e8ef23",
        Orange = "#f7733b",
        Black = "#0f0f0f"
    }
    export class ConsoleUtils {
        static Log(text: string, color: EConsoleColor | string): void;
        static LogObj(text: string, obj: any, color: EConsoleColor | string): void;
        static Error(text: string): void;
        static ErrorObj(text: string, obj: any): void;
    }
}
declare module "utils/console-stack" {
    import { EConsoleColor } from "utils/console-utils";
    /**
     * Utility for logging information without printing it until requested.
     */
    export class ConsoleStack {
        private static instances;
        /**
         *
         * @param stackId
         * @returns: existing or new instance corresponding to given stack id.
         */
        static getInstance(stackId: string): ConsoleStack;
        private stackId;
        private data;
        /**
         * Returns total amount of logs recorded.
         */
        get logCount(): number;
        /**
         * Warning: To create or get instance use "getInstance". Don't create your own instances.
         * @param stackId
         */
        constructor(stackId: string);
        /**
         * Disposes stack.
         */
        Dispose(): void;
        Log(text: string, color?: EConsoleColor | string): void;
        LogObj(text: string, obj: any, color?: EConsoleColor | string): void;
        Error(text: string): void;
        ErrorObj(text: string, obj: any): void;
        Warning(text: string): void;
        WarningObj(text: string, obj: any): void;
        private recordLog;
        PrintByIndex(index: number): void;
        /**
         * @param startingIndex: inclusive starting point.
         * @param amount: amount inclusive of the starting point.
         */
        PrintGroup(startingIndex: number, amount: number): void;
        PrintAll(): void;
        private printLog;
    }
}
declare module "entry-points/cesium/bruce-cesium" {
    import * as Cesium from "cesium";
    import { BruceAPI } from "api/bruce-api";
    import { MenuItem } from "bruce-models/menu-item/menu-item";
    import { ProjectView } from "bruce-models/project-view/project-view";
    import { IDMSession } from "bruce-models/session/idm-session";
    import { CesiumMouseEvents } from "entry-points/cesium/common/cesium-mouse-events";
    import { CesiumViewMonitor } from "entry-points/cesium/viewer/cesium-view-monitor";
    import { CesiumMenuItemManager, EnabledItem } from "entry-points/cesium/menu-items/cesium-menu-item-manager";
    import { CesiumVisualRegister } from "entry-points/cesium/menu-items/cesium-visual-register";
    import { CesiumBruceEntity } from "entry-points/cesium/visuals/cesium-bruce-entity";
    import { CesiumDrawingUtils } from "entry-points/cesium/common/cesium-drawing-utils";
    import { CesiumEntityUtils } from "entry-points/cesium/common/cesium-entity-utils";
    import { CesiumMeasureHandler } from "entry-points/cesium/common/cesium-measure-handler";
    import { CesiumTilesetUtils } from "entry-points/cesium/common/cesium-tileset-utils";
    import { CesiumUtils } from "entry-points/cesium/common/cesium-utils";
    import { CesiumEntitiesGetterPages } from "entry-points/cesium/getters/cesium-entities-getter-pages";
    import { CesiumMenuItemArbitraryTilesetExtended } from "entry-points/cesium/menu-items/cesium-menu-item-arbitrary-tileset-extended";
    import { CesiumMenuItemBruceEntitiesExtended } from "entry-points/cesium/menu-items/cesium-menu-item-bruce-entities-extended";
    import { CesiumGeneratorGeometry } from "entry-points/cesium/visuals/cesium-generator-geometry";
    import { CesiumGeneratorModel } from "entry-points/cesium/visuals/cesium-generator-model";
    import { CesiumGeneratorTileset } from "entry-points/cesium/visuals/cesium-generator-tileset";
    import { CesiumCameraHandler } from "entry-points/cesium/viewer/cesium-camera-handler";
    import { MenuItemLoadedEntities } from "bruce-models/menu-item/menu-item-loaded-entities";
    import { BruceInfo } from "bruce-models/common/bruce-info";
    import { ECameraZoomControlDisplayType } from "bruce-models/common/camera-zoom-control";
    import { CesiumImageryHandler } from "entry-points/cesium/common/cesium-imagery-handler";
    import { EEnvironmentType } from "bruce-models/common/environment";
    import { CesiumShadowHandler } from "entry-points/cesium/common/cesium-shadow-handler";
    import { CesiumAmbientOcclusionHandler } from "entry-points/cesium/common/cesium-ambient-occlusion-handler";
    import { CesiumTerrainHandler } from "entry-points/cesium/common/cesium-terrain-handler";
    import { ConsoleStack } from "utils/console-stack";
    import { ProjectViewBookmark } from "bruce-models/project-view/project-view-bookmark";
    import { MenuItemModelTileset } from "bruce-models/menu-item/menu-item-model-tileset";
    /**
     * Describes an extended version of Bruce viewer's container element.
     */
    interface BruceHTMLContainer extends HTMLElement {
        _bmInstances: BruceCesium.Viewer[];
    }
    export namespace BruceCesium {
        /**
         * Exports for all the cesium related classes.
         * (Currently not used in new classes. Deprecated?)
         */
        const DrawingUtils: typeof CesiumDrawingUtils;
        const EntityUtils: typeof CesiumEntityUtils;
        const MeasureHandler: typeof CesiumMeasureHandler;
        const MouseEvents: typeof CesiumMouseEvents;
        const TilesetUtils: typeof CesiumTilesetUtils;
        const Utils: typeof CesiumUtils;
        const EntitiesGetterPages: typeof CesiumEntitiesGetterPages;
        const MenuItemArbitraryTilesetExtended: typeof CesiumMenuItemArbitraryTilesetExtended;
        const MenuItemBruceEntitiesExtended: typeof CesiumMenuItemBruceEntitiesExtended;
        const VisualRegister: typeof CesiumVisualRegister;
        const ViewMonitor: typeof CesiumViewMonitor;
        const BruceEntity: typeof CesiumBruceEntity;
        const GeneratorGeometry: typeof CesiumGeneratorGeometry;
        const GeneratorModel: typeof CesiumGeneratorModel;
        const GeneratorTileset: typeof CesiumGeneratorTileset;
        class Viewer {
            private id;
            private _initialized;
            /**
             * @returns: if the viewer has been successfully initialized.
             */
            get hasInitialized(): boolean;
            private _container;
            /**
             * Returns the container the cesium viewer is in.
             */
            get Container(): BruceHTMLContainer;
            private _viewer;
            cameraHandler: CesiumCameraHandler;
            mouseEventHandler: CesiumMouseEvents;
            imageryHandler: CesiumImageryHandler;
            terrainHandler: CesiumTerrainHandler;
            shadowHandler: CesiumShadowHandler;
            ambientOcclusionHandler: CesiumAmbientOcclusionHandler;
            /**
             * Returns the cesium viewer.
             */
            get CesiumViewer(): Cesium.Viewer;
            /**
             * Returns console stack corresponding to this viewer instance.
             */
            get ConsoleStack(): ConsoleStack;
            private viewMonitor;
            private loadManager;
            visualRegister: CesiumVisualRegister;
            menuItemManager: CesiumMenuItemManager;
            private _clientAccount;
            get clientAccount(): string;
            set clientAccount(value: string);
            private _environment;
            get environment(): EEnvironmentType;
            set environment(value: EEnvironmentType);
            projectView: ProjectView;
            private _enabledBookmarkId;
            get enabledBookmarkId(): string;
            /**
             * Initializes BruceMaps widget for a given HTML container.
             * @param container
             * @param clientAccount
             * @param environment
             * @param viewer
             * @deprecated: Please use Init or InitUsingCesiumViewer methods instead.
             */
            Initialize(container: HTMLElement, clientAccount: string, environment: EEnvironmentType, viewer?: Cesium.Viewer): void;
            /**
             * Creates Cesium viewer and initializes Cesium helpers.
             * Warning: Cannot call Init again for the same viewer.
             *
             * @param container: the root container which will have Cesium viewer and other components put inside.
             * @param clientAccount: client account to link to.
             * @param environment: environment to determine what API version to link to.
             */
            Init(container: HTMLElement, clientAccount: string, environment: EEnvironmentType): void;
            /**
             * Uses provided Cesium viewer to initialize.
             * Use this instead of Init method to re-use an existing Cesium viewer / container.
             *
             * Warning: Cannot call Init again for the same viewer.
             *
             * @param cViewer
             * @param clientAccount
             * @param environment
             */
            InitUsingCesiumViewer(cViewer: Cesium.Viewer, clientAccount: string, environment: EEnvironmentType): void;
            /**
             * Disposes viewer.
             * - Removes all HTML elements from container that were added.
             * - Disposes any handlers.
             * - Stops rendering any menu items.
             * Warning: This does not dispose API cache as it is shared between viewers.
             * Warning: If Cesium viewer's container was moved outside of viewer container then it will not be removed.
             * Warning: If there are multiple Bruce Viewer's active for a Cesium viewer then Cesium viewer will not be disposed.
             * Warning: Please dispose of returned ConsoleStack yourself if you do not need it.
             */
            Dispose(): ConsoleStack;
            /**
            * Initializes the created Cesium viewer.
            */
            private initializeCesium;
            /**
            * Creates Cesium viewer for the current container.
            */
            private createCesiumViewer;
            /**
            * Destroys a given Cesium widget.
            * @param widget
            */
            private destroyCesiumWidget;
            /**
            * Returns a list of all available project views.
            */
            GetProjectViews(): Promise<ProjectView[]>;
            /**
            * Loads project view corresponding to given view id.
            * @param viewId
            */
            LoadProjectView(viewId: string): Promise<ProjectView>;
            /**
            * Loads an empty project view to let developers programatically create their own menu items.
            */
            LoadEmptyProjectView(): Promise<ProjectView>;
            /**
            * Enables a given bookmark.
            * Promise will resolve when camera flies to bookmark location.
            * @param bookmark
            */
            EnableBookmark(bookmark: ProjectViewBookmark): Promise<void>;
            /**
             * Enables bookmark terrain and imagery.
             */
            private applyBookmarkTiles;
            /**
            * Applies settings in project view to Cesium viewer.
            * @param view
            */
            private applyProjectViewSettings;
            /**
            * Enables a given menu item.
            * @param menuItem
            */
            EnableMenuItem(menuItem: MenuItem): Promise<EnabledItem>;
            /**
            * Enables a given menu item and all its children.
            * Returns an array of all enabled menu item ids.
            * @param menuItem
            */
            EnableMenuItemHierarchy(menuItem: MenuItem): Promise<string[]>;
            /**
            * Disables a given enabled menu item.
            * @param enabledMenuItem
            */
            DisableMenuItem(enabledMenuItem: EnabledItem): void;
            /**
             * Disables one or many menu items corresponding to given ids.
             * @param ids
             */
            DisableMenuItemsByIds(ids: string[]): void;
            /**
            * Generates a menu item for a provided entity type id.
            * @param entityTypeId
            */
            CreateMenuItemFromEntityTypeId(entityTypeId: string, displayType?: ECameraZoomControlDisplayType): MenuItem;
            /**
            * Generates a menu item for a single entity.
            * @param entityTypeId
            * @param entityId
            * @param displayType
            */
            CreateMenuItemFromEntityId(entityTypeId: string, entityId: string, displayType?: ECameraZoomControlDisplayType): MenuItem;
            /**
            * Generates a menu item for an array of loaded entities.
            * @param entities
            * @param displayType
            * @param styleId
            * @returns
            */
            CreateMenuItemFromLoadedEntities(entities: BruceInfo[], styleId: number | string, displayType?: ECameraZoomControlDisplayType): MenuItemLoadedEntities;
            /**
             * Generates a menu item from a CAD tileset id.
             * @param tilesetId
             * @param styleId: Default style id to apply to all tileset features.
             */
            CreateMenuItemFromCADTilesetId(tilesetId: string, styleId?: number | string): MenuItemModelTileset;
            /**
            * Drills entities at given mouse position.
            * Only returns entities from this initialized instance.
            * If a viewer is shared between two instances of bruce maps, it will only return entities from this one.
            * @param mousePos
            * @param limit How many entities to limit the drill to.
            */
            DigEntitiesFromMouse(mousePos: Cesium.Cartesian2, limit?: number): CesiumBruceEntity[];
            /**
            * Hides unnecessary Cesium elements and applies Cesium default styling.
            * We apply styling in here to avoid having to import Cesium's style file.
            */
            private styleCesiumContainers;
            /**
            * Marks the Cesium viewer's element with this viewer's ID.
            */
            private markCesiumViewer;
            /**
            * Unmarks the Cesium viewer's element with this viewer's ID.
            */
            private unmarkCesiumViewer;
            /**
            * Returns the amount of marks on the Cesium viewer element.
            * This indicates how many Bruce Viewer instances are active in it.
            */
            private getCesiumViewerMarkCount;
            /**
            * Mark's the Bruce viewer's container element with this viewer instance.
            */
            private markHTMLContainer;
            /**
            * Unmark's the Bruce viewer's container element.
            */
            private unmarkHTMLContainer;
            /**
            * Returns a list of Bruce viewer's that have marked the current container.
            */
            private getBruceViewerMarks;
            /**
            * Removes any added Cesium containers for this viewer instance.
            * @param force: if the amount of Bruce Viewer's attached to the Cesium viewer should be ignored.
            */
            private removeCesiumContainers;
            /**
            * Clears API cached information.
            */
            ClearAPICache(): void;
            /**
            * Loads / creates session for given credentials.
            * Does not apply session, call 'SetSession' after.
            * @param login
            * @param pass
            */
            LoadSession(login: string, pass: string): Promise<IDMSession>;
            /**
            * Logs out of current session (if exists).
            */
            LogoutSession(): Promise<void>;
            /**
            * Sets the loaded session.
            * @param sessionId
            */
            SetSession(sessionId: string): void;
            /**
            * Returns API instance for the currently set enviornment.
            */
            GetAPIInstance(): BruceAPI;
            /**
            * Returns BruceCesium viewers from given HTML container.
            * If the HTML container was used to initialize a viewer then it will return that viewer's instance.
            * A viewer that was disposed will not be returned.
            * @param container
            */
            static ViewersFromHTMLContainer(container: HTMLElement): BruceCesium.Viewer[];
        }
    }
}
declare module "entry-points/cesium/common/cesium-bruce-info-utils" {
    import * as Cesium from "cesium";
    import { BruceInfo } from "bruce-models/common/bruce-info";
    import { Geometry } from "bruce-models/common/geometry";
    import { Polygon } from "bruce-models/common/polygon";
    /**
     * Utilities directly working with bruceinfo model or related models.
     */
    export class CesiumBruceInfoUtils {
        /**
         * Parses bruce info geometry arbitrary data into geometry instance.
         * @param bruceInfo
         * @deprecated BruceInfo now has own parser to clean it's own data.
         * @returns
         */
        static ParseGeometry(bruceInfo: BruceInfo): Geometry;
        /**
         * Returns a bruce info geometry object for a given cartesian3 position array
         * @param posses
         */
        static PolygonGeometryFromCartesianArray(posses: Cesium.Cartesian3[]): Polygon[];
        /**
         * Returns a bruce info geometry object for a given cartesian 3 position array.
         * @param posses
         */
        static PolylineGeometryFromCartesianArray(posses: Cesium.Cartesian3[]): string;
    }
}
declare module "utils/delay-queue" {
    /**
     * Utility to help manage updates that are being called often but shouldn't run often.
     *
     * For example we have app-visuals-tree, we want to update the tree everytime an entity is loaded or unloaded.
     * Except if we updated it that often for an IFC tileset, browser would crash.
     *
     * This utlity will help manage that.
     */
    export class DelayQueue {
        private callback;
        delay: number;
        private lastCallTime;
        private delayTimeout;
        /**
         * Initializes delay queue for a given method.
         * @param callback
         * @param delay in milliseconds.
         */
        constructor(callback: () => void, delay?: number);
        /**
         * Queues a call to the method.
         * @param force If queue should be cut and a call forced.
         */
        Call(force?: boolean): void;
        /**
         * Calls callback and records given last call date.
         * @param endDate
         */
        private doCall;
        /**
         * Disposes the utility.
         */
        Dispose(): void;
    }
}
declare module "entry-points/cesium/common/cesium-cached-picking-height-util" {
    import * as Cesium from "cesium";
    /**
     * Sampling heights can be expensive.
     * This utility tries to cache height samples.
     */
    export class CesiumCachedPickingHeightUtil {
        private viewer;
        private proximity;
        private pickedPositions;
        private pickedCacheLimit;
        private terrainChangeSub;
        /**
         * @param viewer
         * @param proximity: default is 5 meters.
         */
        constructor(viewer: Cesium.Viewer, proximity?: number);
        /**
         * @param pos: in radians.
         */
        Pick(pos: Cesium.Cartographic): number;
        private createPick;
        private cull;
        private findNearestPos;
        private distance;
        Clear(): void;
        Dispose(): void;
    }
}
declare module "entry-points/cesium/common/cesium-point-out" {
    import * as Cesium from "cesium";
    import { BruceMeta } from "entry-points/common/bruce-meta";
    import { CesiumVisualRegister } from "entry-points/cesium/menu-items/cesium-visual-register";
    export class CesiumPointOut {
        private viewer;
        private visualRegister;
        private bruceMeta;
        private element;
        private cssColorString;
        private updateQueue;
        private disposed;
        private picker;
        constructor(viewer: Cesium.Viewer, visualRegister: CesiumVisualRegister, bruceMeta: BruceMeta, cssColorString: string);
        /**
         * @returns currently shown visual from all visual register visuals matching meta.
         */
        private getVisual;
        /**
         * Call to queue an update the point out.
         * @param force
         */
        Update(force?: boolean): void;
        /**
         * Performs update to point out.
         */
        private doUpdate;
        /**
         * Removes the point out.
         */
        Remove(): void;
        Dispose(): void;
        private create;
        private constructElementBase;
        private constructPointElementBase;
        private constructBoxElementBase;
        /**
         * Applies needed styling to point element for given position.
         * @param element
         * @param position
         */
        private applyPointElementPosition;
        /**
         * Applies needed styling to box element for given bounds.
         * @param element
         * @param bounds
         */
        private applyBoxElementPosition;
        /**
         * Returns screen position for a given 3d position.
         * @param pos
         * @returns
         */
        private getScreenPosition;
        /**
         * Returns bruce boundaries from array of points.
         * Returns null if no boundaries can be calculated.
         * @param points
         * @returns
         */
        private getBoundaries;
        /**
         * Returns an array of positions that make up all points for a given visual.
         * @param visual
         * @returns
         */
        private getPoints;
        private processPositions;
        private processPosition;
        /**
         * Returns cesium arbitrary value from arbitrary property.
         * @param value
         * @returns
         */
        private getCesiumValue;
    }
}
declare module "entry-points/cesium/common/cesium-render-listener" {
    import * as Cesium from "cesium";
    export class CesiumRenderListener {
        private viewer;
        private renderHandler;
        private renderCallbacks;
        constructor(viewer: Cesium.Viewer);
        /**
         * Starts listening for cesium renders.
         */
        Start(): void;
        /**
         * Disposes render listener.
         */
        Stop(): void;
        /**
         * Adds a given callback to call on render.
         * @param callback
         * @param refId Optional id to reference for removing callback. Will generate one if not provided.
         */
        AddCallback(callback: () => void, refId?: string): string;
        RemoveCallback(refId: string): void;
        /**
         * Returns if a callback exists with a given refId.
         * @param refId
         */
        CallbackExists(refId: string): boolean;
    }
}
declare module "entry-points/cesium/common/cesium-position-map" {
    import * as Cesium from "cesium";
    /**
     * Utility to map an array of positions into IDs while maintaining their order.
     * Allows for adding and removing points at any index.
     * This is useful for managing positions when making editing tools.
     */
    export class CesiumPositionMap {
        private order;
        private data;
        constructor(positions?: Cesium.Cartesian3[]);
        /**
         * Adds new position at end and returns position reference id.
         * @param position
         * @returns
         */
        Add(position: Cesium.Cartesian3): string;
        /**
         * Updates position value using position reference id.
         * @param id
         * @param position
         */
        Update(id: string, position: Cesium.Cartesian3): void;
        /**
         * Updates position value at given index.
         * @param index
         * @param position
         */
        UpdateAtIndex(index: number, position: Cesium.Cartesian3): void;
        /**
         * Returns position value using position reference id.
         * @param id
         * @returns
         */
        Get(id: string): Cesium.Cartesian3;
        /**
         * Returns all position reference ids.
         * @returns
         */
        GetIds(): string[];
        /**
         * Adds a new position at a given inde and returns its reference id.
         * @param position
         * @param index
         * @returns
         */
        Insert(position: Cesium.Cartesian3, index: number): string;
        /**
         * Updates the index of a position using position reference id.
         * @param id
         * @param index
         */
        UpdateIndex(id: string, index: number): void;
        /**
         * Returns position's order index.
         * @param id
         */
        GetIndex(id: string): number;
        /**
         * Removes position using reference id.
         * @param id
         */
        Remove(id: string): void;
        /**
         * Clears all positions from the map.
         */
        Clear(): void;
        /**
         * Returns all positions.
         * @param close
         * @returns
         */
        getPositions(close?: boolean): Cesium.Cartesian3[];
        /**
         * Returns closest insert index for a position.
         * @param position
         * @param closedShape
         * @returns
        */
        GetInsertIndex(position: Cesium.Cartesian3): number;
        /**
         * Returns distance between point and line.
         * This value is not real, it is only used for internal use.
         * This value does not represent a real amount in any known value type.
         * @param refPoint
         * @param pos1
         * @param pos2
         * @returns
         */
        private avgDistanceFromPointPair;
    }
}
declare module "entry-points/cesium/common/cesium-polygon-hierarchy-map" {
    import * as Cesium from "cesium";
    import { Polygon, PolygonFacing } from "bruce-models/common/polygon";
    import { CesiumPositionMap } from "entry-points/cesium/common/cesium-position-map";
    export interface ICesiumPolygonHierarchyMap {
        facing: PolygonFacing;
        positions: CesiumPositionMap;
    }
    export interface ICesiumPolygonHierarchyExtended extends Cesium.PolygonHierarchy {
        _bruceHierarchyMapRefId: string;
    }
    export interface ICesiumPolygonHierarchyEntityExtended extends Cesium.Entity {
        _bruceHierarchyMapRefId: string;
    }
    export class CesiumPolygonHierarchyMap {
        private data;
        constructor(hierarchy?: Cesium.PolygonHierarchy);
        /**
         * Updates the map using given Cesium hierarchy.
         * @param hierarchy
         */
        updateUsingCesiumHierarchy(hierarchy: ICesiumPolygonHierarchyExtended): void;
        /**
         * Updates the outer map using given Cesium hierarchy.
         * @param hierarchy
         */
        updateOuterUsingCesiumHierarchy(hierarchy: ICesiumPolygonHierarchyExtended): void;
        /**
         * Updates the outer map using given cesium polyline.
         * @param viewer
         * @param positions
         */
        updateOuterUsingCesiumPolyline(viewer: Cesium.Viewer, entity: ICesiumPolygonHierarchyEntityExtended): void;
        /**
         * Updates the inner map using given Cesium entities.
         * @param viewer
         * @param entities
         */
        updateInnerUsingCesiumEntities(viewer: Cesium.Viewer, entities: ICesiumPolygonHierarchyEntityExtended[]): void;
        /**
         * Updates the inner and outer maps using given Bruce polygon.
         * @param polygon
         */
        updateUsingPolygon(polygon: Polygon[]): void;
        /**
         * Removes hierarchy branch using hierarchy reference id.
         * @param hierarchyId
         */
        RemoveHierarchyBranch(hierarchyId: string): void;
        /**
         * Clears all mapped hierarchies.
         */
        Clear(): void;
        /**
         * Clears all inner facing maps.
         */
        ClearInner(): void;
        /**
         * @param hierarchyId
         * @returns positions map for a given hierarchy refererence id.
         */
        GetPositionsMap(hierarchyId: string): CesiumPositionMap;
        /**
         * Returns hierarchy map by hierarchy id.
         * @param hierarchyId
         */
        GetMap(hierarchyId: string): ICesiumPolygonHierarchyMap;
        /**
         * @returns all hierarchy map ids.
         */
        GetMapIds(): string[];
        /**
         * @returns all hierarchy map ids excluding outer ring.
         */
        GetInnerMapIds(): string[];
        /**
         * @returns all position ids from all positions maps.
         */
        GetAllPositionIds(): string[];
        /**
         * @returns all position ids from all position maps grouped by hierarchy id.
         */
        GetAllPositionIdsWithHierarchyId(): {
            hierarchyId: string;
            positionIds: string[];
            facing: PolygonFacing;
        }[];
        /**
         * @returns all position maps.
         */
        GetMaps(): {
            hierarchyId: string;
            positions: CesiumPositionMap;
            facing: PolygonFacing;
        }[];
        /**
         * @param posId
         * @returns position value by given position reference id.
         */
        GetPositionById(posId: string): Cesium.Cartesian3;
        /**
         * Constructs Cesium polygon hierarchy from current state of map.
         * @returns
         */
        ConstructCesiumHierarchy(): Cesium.PolygonHierarchy;
        /**
         * Constructs and returns Bruce polygon geometry from current state of map.
         */
        ConstructBrucePolygon(): Polygon[];
        /**
         * Adds new branch to the map.
         * @param facing
         * @returns hierarchy reference id.
         */
        AddMap(facing: PolygonFacing): string;
        /**
         * @returns the outer facing hierarchy positions map.
         */
        GetOutMap(): CesiumPositionMap;
        /**
         * @returns the outer facing hierarchy reference id.
         */
        GetOutMapId(): string;
        /**
         * @returns: all inner facing position maps.
         */
        GetInnerMaps(): CesiumPositionMap[];
        /**
         * @returns if the outer facing hierarchy exists.
         */
        GetOutExists(): boolean;
        /**
         * Returns map id for map that has less than 3 positions.
         */
        GetUnfinishedMapId(): string;
        /**
         * Returns inner map that has less than 3 positions.
         */
        GetUnfinishedHoleId(): string;
        GetClosestHoleId(position: Cesium.Cartesian3, onlyFinished: boolean): string;
        /**
         * Returns closest insert index for a position in a given hierarchy.
         * @param position
         * @returns
         */
        GetInsertIndex(hierarchyId: string, position: Cesium.Cartesian3): number;
        /**
         * Returns distance between point and line.
         * This value is not real, it is only used for internal use.
         * This value does not represent a real amount in any known value type.
         * @param refPoint
         * @param pos1
         * @param pos2
         * @returns
         */
        private avgDistanceFromPointPair;
    }
}
declare module "entry-points/cesium/common/cesium-geometry-editor-point" {
    import * as Cesium from "cesium";
    import { Color } from "bruce-models/common/color";
    export interface ICesiumGeometryEditorPointParams {
        posId: string;
        getPosition: () => Cesium.Cartesian3;
        showCallback: () => boolean;
        updatePosition: (position: Cesium.Cartesian3) => void;
        viewer: Cesium.Viewer;
        heightReference?: Cesium.HeightReference;
        color?: Color;
        pixelSize?: number;
    }
    export interface ICesiumGeometryEditorPointEntityExtended extends Cesium.Entity {
        _cesiumGeometryEditorPointId: string;
    }
    export class CesiumGeometryEditorPoint {
        private _posId;
        get posId(): string;
        private _active;
        get active(): boolean;
        private heightReference;
        private updatePositionCallback;
        private positionCallback;
        private showCallback;
        private viewer;
        private _entities;
        get entities(): ICesiumGeometryEditorPointEntityExtended[];
        private _lastPosition;
        get lastPosition(): Cesium.Cartesian3;
        private color;
        private pixelSize;
        constructor(params: ICesiumGeometryEditorPointParams);
        /**
         * Creates the editor Cesium entity.
         */
        CreateEntity(): void;
        /**
         * Retrieves the editor's position.
         * @returns
         */
        private getPosition;
        /**
         * Notifies callback to update the editor position.
         * @param pos
         */
        updatePosition(pos: Cesium.Cartesian3): void;
        /**
         * Removes the editor point.
         */
        DestroyEntity(): void;
    }
}
declare module "entry-points/cesium/common/cesium-polygon-geometry-editor" {
    import * as Cesium from "cesium";
    import { Polygon } from "bruce-models/common/polygon";
    import { BruceCesium } from "entry-points/cesium/bruce-cesium";
    export interface ICesiumPolygonGeometryEditorParams {
        outlineWidth: number;
        outlineColor: string;
    }
    /**
     * Helper class for editing Cesium Polygon entities.
     * Instantiate with an entity that has Polygon geometry and call 'Start' method.
     */
    export class CesiumPolygonGeometryEditor {
        private viewer;
        private _disposed;
        get disposed(): boolean;
        private _entity;
        get entity(): Cesium.Entity;
        private _active;
        get active(): boolean;
        private mappedHierarchy;
        private editorPoints;
        private activePoint;
        private mouseOffset;
        private heightSampler;
        private mouseHandler;
        private updateQueue;
        private lastCursorPos;
        outerLocked: boolean;
        private params;
        constructor(viewer: BruceCesium.Viewer, entity: Cesium.Entity, params?: ICesiumPolygonGeometryEditorParams);
        /**
         * Attempts to construct needed styling params for the editor from a given entity.
         * @param viewer
         * @param entity
         */
        static ConstructParamsFromEntity(viewer: Cesium.Viewer, entity: Cesium.Entity): ICesiumPolygonGeometryEditorParams;
        /**
         * Starts listening for Cesium mouse events.
         */
        private startMouseListeners;
        /**
         * Returns editing point from this editor from given screen position.
         * @param screenPos
         * @returns
         */
        private getEditorPointFromMouse;
        /**
         * Handles left mouse down event for given screen position.
         * @param screenPos
         */
        private doLeftDown;
        /**
         * Updates the clicked offset from the entity's position.
         * @param screenPos
         */
        private updateOffset;
        /**
         * Handles mouse click event for given screen position.
         * @param screenPos
         */
        private doClick;
        /**
         * Adds point to the map.
         * Point will be added to the closest point branch.
         * If no closest branch is found then it will be added to outer branch.
         * @param position
         */
        private addPosition;
        /**
         * Returns information about the closest position insert for a given point.
         * @param position
         * @returns
         */
        private getInsertPositionInfo;
        /**
         * Returns distance between point and line.
         * This value is not real, it is only used for internal use in this editor.
         * This value does not represent a real amount in any known value type.
         * @param refPoint
         * @param pos1
         * @param pos2
         * @returns
         */
        private avgDistanceFromPointPair;
        /**
         * Returns x,y position from 3d position.
         * @param pos
         */
        private getPointFromPos;
        /**
         * Handles middle mouse click at a given screen position.
         * For this to pass the position has to be within outer branch and outer branch has to have at least 3 positions.
         * @param screenPos
         */
        private doMiddleClick;
        /**
         * Returns if given position is within outer polygon branch.
         * @param position
         */
        private isWithinOuter;
        /**
         * Returns if given position is outside inner polygon branches.
         * @param position
         * @param excludingHierarchyIds
         */
        private isOutsideInners;
        /**
         * Creates a new branch with a given starting position.
         * @param startingPosition
         */
        private createNewBranch;
        /**
         * Handles left mouse up event.
         */
        private doLeftUp;
        /**
         * Handles mouse movement event at a given screen position.
         * @param screenPos
         */
        private doMouseMove;
        /**
         * Runs through all points and makes sure they aren't inside other branch polygons.
         * Checks if all inner points are within the outer ring.
         * Any found leaked points will be moved.
         */
        private fixLeakingPoints;
        /**
         * Finds two intersecting lines from a given triangle and returns closest position for pointer to be without intersections.
         * @param mapId
         * @param posses[] // The triangle, pointer at index 1.
         */
        private findClosestDoubleIntersection;
        /**
         * Finds one intersecting line from a given triangle and returns it.
         * If multiple intersections are found from two different lines in the triangle, nothing is returned.
         * If multiple intersections are found from one line in the triangle, the closest intersection is returned.
         * @param mapId
         * @param posses
         * @returns
         */
        private findSingleIntersection;
        /**
         * Handles right click mouse event at a given screen position.
         * @param screenPos
         */
        private doMouseRightClick;
        /**
         * Stops listening to Cesium mouse events.
         */
        private stopMouseListeners;
        /**
         * Disposes the editor.
         * This removes editor entities, listeners and stops it from being started again.
         */
        Dispose(): void;
        /**
         * Prepares the editing entity.
         * @returns
         */
        prepareEntity(): void;
        /**
         * Creates an editor point for a given point id at a given branch id.
         * @param posId
         * @param hierarchyId
         */
        private createEditorPoint;
        /**
         * Returns if a given point should be visible.
         * @param posId
         * @param hierarchyId
         */
        private isPointVisible;
        private getTerrainDistance;
        /**
         * Creates a new editor point at a given position and calls to update geometry.
         * @param hierarchyId
         * @param position
         * @param insertIndex
         */
        private createAndRegisterEditorPoint;
        /**
         * Returns editor point's 3D position.
         * @param posId
         * @param hierarchyId
         * @returns
         */
        private getEditorPointPosition;
        /**
         * Updates editor point's 3D position.
         * @param posId
         * @param hierarchyId
         * @param position
         */
        private updateEditorPointPosition;
        /**
         * Starts the editing tool.
         * @returns
         */
        Start(): void;
        /**
         * Stops the editing tool.
         */
        Stop(): void;
        /**
         * Removes editing point visuals.
         * @param emptyArray If array of editor points should be cleared.
         */
        private removeEditorPoints;
        /**
         * Removes all editor points for inner facing hierarchies.
         */
        private removeInnerEditorPoints;
        /**
         * Constructs and returns Bruce polygon geometry from current state of editor.
         */
        ConstructBrucePolygon(): Polygon[];
        /**
         * Updates the Cesium 3D visual using the current state of the hierarchy map.
         */
        private updateGeometry;
        /**
         * Updates cursor styling depending on if editing point is found underneath.
         * @param screenPos
         */
        private setPointerCursor;
        /**
         * Updates the screen cursor styling to be grabbing.
         */
        private setGrabCursor;
        /**
         * Removes cursor styling.
         */
        private removeCursor;
    }
}
declare module "entry-points/cesium/common/cesium-polygon-geometry-editor2" {
    import * as Cesium from "cesium";
    import { BruceAPI } from "api/bruce-api";
    import { BruceInfo } from "bruce-models/common/bruce-info";
    import { Geometry } from "bruce-models/common/geometry";
    import { BruceCesium } from "entry-points/cesium/bruce-cesium";
    export enum ECesiumPolygonGeometryEditor2Mode {
        Boundaries = 0,
        Holes = 1,
        All = 2
    }
    export interface ICesiumPolygonGeometryEditor2Params {
        viewer: BruceCesium.Viewer;
        entity: BruceInfo;
        visual?: Cesium.Entity;
        fillColor: string;
        outlineColor: string;
        outlineWidth: number;
    }
    interface ICesiumPolygonGeometryEditor2FinishedData {
        entity: BruceInfo;
        updatedSiblings: BruceInfo[];
    }
    export class CesiumPolygonGeometryEditor2 {
        private zIndex;
        private viewer;
        private get cViewer();
        private _disposed;
        get disposed(): boolean;
        private _started;
        get started(): boolean;
        private mouseHandler;
        private mouseOffset;
        private heightSampler;
        private editingInfo;
        private editingMap;
        editingEntity: Cesium.Entity;
        private editingEntitySupplied;
        private editorPoints;
        private activePoint;
        private updateGeometriesQueue;
        private mode;
        private fillColor;
        private outlineColor;
        private outlineWidth;
        constructor(mode: ECesiumPolygonGeometryEditor2Mode, params: ICesiumPolygonGeometryEditor2Params);
        Start(): void;
        private refreshEditorPoints;
        private refreshEditorPointsForHierarchy;
        Stop(): void;
        /**
         * @param api: api reference for disjoint request.
         * @param siblings: what siblings to cut intersections out of.
         * @param boundary
         */
        Finish(api: BruceAPI, siblings: BruceInfo[], boundary?: Geometry): Promise<ICesiumPolygonGeometryEditor2FinishedData>;
        Dispose(): void;
        private clear;
        private startMouseListeners;
        private stopMouseListeners;
        private doMiddleClick;
        private createHole;
        private doMouseClick;
        private doMouseRightClick;
        private doMouseMove;
        private doMouseLeftUp;
        private doMouseLeftDown;
        /**
         * Removes drawing point and associated map data.
         * @param point
         */
        private removePoint;
        /**
         * Adds new position to nearest outer ring line.
         * @param position
         */
        private addPosition;
        /**
         * Makes a decision on if position should be added to boundaries or holes and adds it.
         */
        private addPositionComplex;
        /**
         * Makes a decision on if position should be added to an existing hole and adds it.
         */
        private addPositionToHoles;
        /**
         * Makes a decision on if position should be added to boundaries and adds it.
         */
        private addPositionBoundaries;
        private addPositionToMap;
        private isWithinBoundaries;
        private isOutsideHoles;
        private isInMap;
        /**
         * Removes editing point visuals.
         * @param emptyArray If array of editor points should be cleared.
         */
        private removeEditorPoints;
        private removeEditorPointsForMap;
        /**
         * Returns editing point from this editor from given screen position.
         * @param screenPos
         * @returns
         */
        private getEditorPointFromMouse;
        /**
         * Returns editor point's 3D position.
         * @param posId
         * @param hierarchyId
         * @returns
         */
        private getEditorPointPosition;
        /**
         * Creates an editor point for a given point id at a given branch id.
         * @param posId
         * @param hierarchyId
         */
        private createEditorPoint;
        /**
         * Updates editor point's 3D position.
         * @param posId
         * @param hierarchyId
         * @param position
         */
        private updateEditorPointPosition;
        /**
         * Updates the clicked offset from the entity's position.
         * @param screenPos
         */
        private updateOffset;
        /**
         * Updates cursor styling depending on if editing point is found underneath.
         * @param screenPos
         */
        private setPointerCursor;
        /**
         * Updates the screen cursor styling to be grabbing.
         */
        private setGrabCursor;
        /**
         * Removes cursor styling.
         */
        private removeCursor;
        private updateGeometry;
        private createPolygonVisual;
        private updatePolygonVisual;
    }
}
declare module "utils/browser-utils" {
    export enum EBrowser {
        Firefox = 0,
        Chrome = 1,
        Opera = 2,
        Edge = 3,
        InternetExplorer = 4,
        Safari = 5,
        Other = 6
    }
    export class BrowserUtils {
        /**
         * Returns if current windowdow is given browser.
         * @param browser
         * @returns
         */
        static IsBrowser(browser: EBrowser): boolean;
        /**
         * Returns a best guess at what the current browser is.
         * @returns
         */
        static GetBrowser(): EBrowser;
    }
}
declare module "entry-points/cesium/common/cesium-polygon-geometry-editor3" {
    import * as Cesium from "cesium";
    import { Color } from "bruce-models/common/color";
    import { Polygon } from "bruce-models/common/polygon";
    import { CesiumCameraHandler } from "entry-points/cesium/viewer/cesium-camera-handler";
    export enum ECesiumPolygonGeometryEditor3Mode {
        Boundaries = 0,
        Holes = 1,
        All = 2
    }
    export interface ICesiumPolygonGeometryEditor3Params {
        viewer: Cesium.Viewer;
        cameraHandler: CesiumCameraHandler;
        hierarchy?: Polygon[];
        entity: Cesium.Entity;
        outlineColor: string;
        outlineWidth: number;
        smoothen: number;
        editorPointColor?: Color;
        editorPointSize?: number;
        heightReference?: Cesium.HeightReference;
        ignoreEntities?: Cesium.Entity[];
    }
    export class CesiumPolygonGeometryEditor3 {
        private browser;
        private viewer;
        private cameraHandler;
        private _disposed;
        get disposed(): boolean;
        private _started;
        get started(): boolean;
        private heightReference;
        private ignoreEntities;
        private mouseHandler;
        private mouseOffset;
        private heightSampler;
        private editingInfo;
        private editingMap;
        editingEntity: Cesium.Entity;
        private editingEntityHierarchy;
        private editorPoints;
        private activePoint;
        private updateGeometriesQueue;
        private mode;
        private outlineColor;
        private outlineWidth;
        private editorPointColor;
        private editorPointSize;
        private startingHierarchy;
        private smoothen;
        constructor(mode: ECesiumPolygonGeometryEditor3Mode, params: ICesiumPolygonGeometryEditor3Params);
        private init;
        /**
         * Returns polygon that represents the current visual.
         */
        getPolygon(): Polygon[];
        Start(): void;
        Stop(): void;
        /**
         * Sets smoothen level, if changed then a refresh on visual is queued.
         * @param value
         */
        SetSmoothen(value: number): void;
        /**
         * If tool is running then calling reset will refresh editor points and visuals.
         */
        Reset(): void;
        Dispose(): void;
        private clear;
        private startMouseListeners;
        private stopMouseListeners;
        private doMiddleClick;
        private createHole;
        private doMouseClick;
        private doMouseRightClick;
        private doMouseMove;
        private doMouseLeftUp;
        private doMouseLeftDown;
        /**
         * Removes drawing point and associated map data.
         * @param point
         */
        private removePoint;
        /**
         * Adds new position to nearest outer ring line.
         * @param position
         */
        private addPosition;
        /**
         * Makes a decision on if position should be added to boundaries or holes and adds it.
         */
        private addPositionComplex;
        /**
         * Makes a decision on if position should be added to an existing hole and adds it.
         */
        private addPositionToHoles;
        /**
         * Makes a decision on if position should be added to boundaries and adds it.
         */
        private addPositionBoundaries;
        private addPositionToMap;
        private isWithinBoundaries;
        private isOutsideHoles;
        private isInMap;
        /**
         * Removes editing point visuals.
         * @param emptyArray If array of editor points should be cleared.
         */
        private removeEditorPoints;
        private removeEditorPointsForMap;
        /**
         * Returns editing point from this editor from given screen position.
         * @param screenPos
         * @returns
         */
        private getEditorPointFromMouse;
        /**
         * Returns editor point's 3D position.
         * @param posId
         * @param hierarchyId
         * @returns
         */
        private getEditorPointPosition;
        /**
         * Creates an editor point for a given point id at a given branch id.
         * @param posId
         * @param hierarchyId
         */
        private createEditorPoint;
        /**
         * Updates editor point's 3D position.
         * @param posId
         * @param hierarchyId
         * @param position
         */
        private updateEditorPointPosition;
        /**
         * Updates the clicked offset from the entity's position.
         * @param screenPos
         */
        private updateOffset;
        /**
         * Updates cursor styling depending on if editing point is found underneath.
         * @param screenPos
         */
        private setPointerCursor;
        /**
         * Updates the screen cursor styling to be grabbing.
         */
        private setGrabCursor;
        /**
         * Removes cursor styling.
         */
        private removeCursor;
        private updateGeometry;
        private updatePolygonVisual;
        private unlinkGeometry;
        private smoothenPoints;
        /**
         * Returns 3d position from given screen position.
         * @param pos2d
         */
        private getCartesian3FromMouse;
    }
}
declare module "entry-points/cesium/common/cesium-polygon-geometry-creator" {
    import { BruceAPI } from "api/bruce-api";
    import { BruceInfo } from "bruce-models/common/bruce-info";
    import { Geometry } from "bruce-models/common/geometry";
    import { BruceCesium } from "entry-points/cesium/bruce-cesium";
    export interface ICesiumPolygonGeometryCreatorParams {
        viewer: BruceCesium.Viewer;
        fillColor: string;
        outlineColor: string;
        outlineWidth: number;
    }
    interface ICesiumPolygonGeometryCreatorFinishedData {
        geometry: Geometry;
        updatedSiblings: BruceInfo[];
    }
    /**
     * Initialize then call 'Start' to let the user click points in the map to draw a polygon.
     * Once happy the call 'Finish' to get the drawn geometry and changes to siblings for no intersections to be active.
     */
    export class CesiumPolygonGeometryCreator {
        private zIndex;
        private viewer;
        private get cViewer();
        private _disposed;
        get disposed(): boolean;
        private _started;
        get started(): boolean;
        private mouseHandler;
        private mouseOffset;
        private heightSampler;
        private drawingMap;
        private drawingEntity;
        private editorPoints;
        private activePoint;
        private updateGeometriesQueue;
        private fillColor;
        private outlineColor;
        private outlineWidth;
        constructor(params: ICesiumPolygonGeometryCreatorParams);
        Start(): void;
        Stop(): void;
        /**
         * @param api: api reference for disjoint request.
         * @param siblings: what siblings to cut intersections out of.
         * @param boundary
         */
        Finish(api: BruceAPI, siblings: BruceInfo[], boundary?: Geometry): Promise<ICesiumPolygonGeometryCreatorFinishedData>;
        Dispose(): void;
        private clear;
        private startMouseListeners;
        private stopMouseListeners;
        private doMouseClick;
        private doMouseRightClick;
        private doMouseMove;
        private doMouseLeftUp;
        private doMouseLeftDown;
        /**
         * Removes drawing point and associated map data.
         * @param point
         */
        private removePoint;
        /**
         * Adds new position to nearest outer ring line.
         * @param position
         */
        private addPosition;
        /**
         * Returns editing point from this editor from given screen position.
         * @param screenPos
         * @returns
         */
        private getEditorPointFromMouse;
        /**
         * Creates an editor point for a given point id at a given branch id.
         * @param posId
         * @param hierarchyId
         */
        private createEditorPoint;
        /**
         * Updates editor point's 3D position.
         * @param posId
         * @param hierarchyId
         * @param position
         */
        private updateEditorPointPosition;
        /**
         * Returns editor point's 3D position.
         * @param posId
         * @param hierarchyId
         * @returns
         */
        private getEditorPointPosition;
        private updateGeometry;
        private createPolygonVisual;
        private updatePolygonVisual;
        /**
         * Updates the clicked offset from the entity's position.
         * @param screenPos
         */
        private updateOffset;
        /**
         * Removes editing point visuals.
         * @param emptyArray If array of editor points should be cleared.
         */
        private removeEditorPoints;
        /**
         * Updates cursor styling depending on if editing point is found underneath.
         * @param screenPos
         */
        private setPointerCursor;
        /**
         * Updates the screen cursor styling to be grabbing.
         */
        private setGrabCursor;
        /**
         * Removes cursor styling.
         */
        private removeCursor;
    }
}
declare module "entry-points/cesium/common/cesium-polygon-geometry-creator2" {
    import * as Cesium from "cesium";
    import { Color } from "bruce-models/common/color";
    import { Polygon } from "bruce-models/common/polygon";
    import { BruceEvent } from "utils/bruce-event";
    import { CesiumCameraHandler } from "entry-points/cesium/viewer/cesium-camera-handler";
    export interface ICesiumPolygonGeometryCreator2Params {
        viewer: Cesium.Viewer;
        cameraHandler: CesiumCameraHandler;
        fillColor: string;
        outlineColor: string;
        outlineWidth: number;
        smoothen: number;
        editorPointColor?: Color;
        editorPointSize?: number;
        heightReference?: Cesium.HeightReference;
        usePrimitive?: boolean;
    }
    export class CesiumPolygonGeometryCreator2 {
        private zIndex;
        private cameraHandler;
        private viewer;
        private _disposed;
        get disposed(): boolean;
        private _started;
        get started(): boolean;
        private usePrimitive;
        private heightReference;
        private mouseHandler;
        private mouseOffset;
        private heightSampler;
        private drawingMap;
        private drawingEntities;
        private drawingEntityHierarchy;
        private editorPoints;
        private activePoint;
        private updateGeometriesQueue;
        private onUpdateEvent;
        private fillColor;
        private outlineColor;
        private outlineWidth;
        private editorPointColor;
        private editorPointSize;
        private smoothen;
        constructor(params: ICesiumPolygonGeometryCreator2Params);
        getOnChangeEvent(): BruceEvent<void>;
        Start(): void;
        /**
         * Returns polygon that represents the current visual.
         */
        getPolygon(): Polygon[];
        Stop(): void;
        /**
         * Sets smoothen level, if changed then a refresh on visual is queued.
         * @param value
         */
        SetSmoothen(value: number): void;
        Dispose(): void;
        private clear;
        private startMouseListeners;
        private stopMouseListeners;
        private doMouseClick;
        private doMouseRightClick;
        private doMouseMove;
        private doMouseLeftUp;
        private doMouseLeftDown;
        /**
         * Removes drawing point and associated map data.
         * @param point
         */
        private removePoint;
        /**
         * Adds new position to nearest outer ring line.
         * @param position
         */
        private addPosition;
        /**
         * Returns editing point from this editor from given screen position.
         * @param screenPos
         * @returns
         */
        private getEditorPointFromMouse;
        /**
         * Creates an editor point for a given point id at a given branch id.
         * @param posId
         * @param hierarchyId
         */
        private createEditorPoint;
        /**
         * Updates editor point's 3D position.
         * @param posId
         * @param hierarchyId
         * @param position
         */
        private updateEditorPointPosition;
        /**
         * Returns editor point's 3D position.
         * @param posId
         * @param hierarchyId
         * @returns
         */
        private getEditorPointPosition;
        private updateGeometry;
        private createPolygonVisual;
        private createPrimitiveVisual;
        /**
         * Updates the clicked offset from the entity's position.
         * @param screenPos
         */
        private updateOffset;
        /**
         * Removes editing point visuals.
         * @param emptyArray If array of editor points should be cleared.
         */
        private removeEditorPoints;
        /**
         * Updates cursor styling depending on if editing point is found underneath.
         * @param screenPos
         */
        private setPointerCursor;
        /**
         * Updates the screen cursor styling to be grabbing.
         */
        private setGrabCursor;
        /**
         * Removes cursor styling.
         */
        private removeCursor;
        private smoothenPoints;
    }
}
declare module "entry-points/cesium/common/cesium-polygon-geometry-restricted-editor" {
    import * as Cesium from "cesium";
    import { Geometry } from "bruce-models/common/geometry";
    import { Polygon } from "bruce-models/common/polygon";
    import { BruceCesium } from "entry-points/cesium/bruce-cesium";
    import { CesiumBruceEntity } from "entry-points/cesium/visuals/cesium-bruce-entity";
    import { CesiumPolygonHierarchyMap } from "entry-points/cesium/common/cesium-polygon-hierarchy-map";
    export interface ICesiumPolygonGeometryRestrictedEditorParams {
        outlineWidth: number;
        outlineColor: string;
        fillColor: string;
    }
    export class CesiumPolygonHierarchyEditorMapExtended extends CesiumPolygonHierarchyMap {
        hierarchyId: string;
        boundingMapId: string;
        entity: Cesium.Entity;
        constructor(hierarchy: Cesium.PolygonHierarchy, boundingMapId: string, entity: Cesium.Entity, hierarchyId: string);
    }
    export class CesiumPolygonGeometryRestrictedEditor {
        private _disposed;
        get disposed(): boolean;
        private _active;
        get active(): boolean;
        private viewer;
        params: ICesiumPolygonGeometryRestrictedEditorParams;
        private boundingMaps;
        private get boundingMapsList();
        private siblingMaps;
        private get siblingMapsList();
        private editorPoints;
        private activePoint;
        private editingMap;
        private mouseHandler;
        private updateGeometriesQueue;
        private mouseOffset;
        private lastCursorPos;
        private deleteEntityCallback;
        constructor(viewer: BruceCesium.Viewer, params: ICesiumPolygonGeometryRestrictedEditorParams, boundingGeometry: Geometry, siblingGeometries: Geometry[], editingEntity: Cesium.Entity, deleteEntityCallback: (entity: CesiumBruceEntity) => void);
        private prepareEditingEntity;
        private getBoundingHierarchyIdFromEntity;
        /**
         * Attempts to construct needed styling params for the editor from given entities.
         * @param viewer
         * @param entities
         */
        static ConstructParamsFromEntities(viewer: Cesium.Viewer, entities: Cesium.Entity[]): ICesiumPolygonGeometryRestrictedEditorParams;
        Start(): void;
        Stop(): void;
        GetPolygons(): Polygon[];
        private refreshEditorPoints;
        private refreshEditorPointsForMap;
        /**
         * Disposes the editor.
         * This removes editor entities, listeners and stops it from being started again.
         */
        Dispose(): void;
        private prepareBoundingGeometry;
        private prepareBoundingPolygon;
        AddSiblings(siblings: Geometry[]): void;
        AddSibling(sibling: Geometry): void;
        private startMouseListeners;
        private stopMouseListeners;
        private doMouseClick;
        private doMouseMove;
        private doMouseLeftUp;
        private doMouseLeftDown;
        private doMouseRightClick;
        private getIsWithinBoundingGeometry;
        private getIsOutsideMaps;
        private getClosestBoundingHierarchy;
        private getBoundingHierarchyIdFromPolygon;
        private getClosestHierarchy;
        /**
         * Returns distance between point and line.
         * This value is not real, it is only used for internal use in this editor.
         * This value does not represent a real amount in any known value type.
         * @param refPoint
         * @param pos1
         * @param pos2
         * @returns
         */
        private avgDistanceFromPointPair;
        private isMoveValid;
        private getValidMove;
        /**
         * Finds one intersecting line from a given triangle and returns it.
         * If multiple intersections are found from two different lines in the triangle, nothing is returned.
         * If multiple intersections are found from one line in the triangle, the closest intersection is returned.
         * @param mapId
         * @param posses
         * @returns
         */
        private findSingleIntersection;
        private findClosestPoint;
        /**
         * Returns x,y position from 3d position.
         * @param pos
         */
        private getPointFromPos;
        private updateGeometry;
        private updatePolygonVisual;
        /**
         * Returns editing point from this editor from given screen position.
         * @param screenPos
         * @returns
         */
        private getEditorPointFromMouse;
        /**
         * Creates a new editor point at a given position and calls to update geometry.
         * @param hierarchyId
         * @param position
         * @param insertIndex
         */
        private createAndRegisterEditorPoint;
        /**
         * Creates an editor point for a given point id at a given branch id.
         * @param posId
         * @param hierarchyId
         */
        private createEditorPoint;
        /**
         * Returns editor point's 3D position.
         * @param posId
         * @param hierarchyId
         * @returns
         */
        private getEditorPointPosition;
        /**
         * Updates editor point's 3D position.
         * @param posId
         * @param hierarchyId
         * @param position
         */
        private updateEditorPointPosition;
        /**
         * Removes editing point visuals.
         * @param emptyArray If array of editor points should be cleared.
         */
        private removeEditorPoints;
        /**
         * Returns if a given point should be visible.
         * @param posId
         * @param hierarchyId
         */
        private isPointVisible;
        /**
         * Updates the clicked offset from the entity's position.
         * @param screenPos
         */
        private updateOffset;
        /**
         * Adds point to the map.
         * Point will be added to the closest point branch.
         * @param position
         */
        private addPosition;
        /**
         * Returns closest insert index for a position in a given hierarchy.
         * @param position
         * @returns
         */
        private getInsertIndex;
        private removeHierarchy;
        /**
         * Updates cursor styling depending on if editing point is found underneath.
         * @param screenPos
         */
        private setPointerCursor;
        /**
         * Updates the screen cursor styling to be grabbing.
         */
        private setGrabCursor;
        /**
         * Removes cursor styling.
         */
        private removeCursor;
    }
}
declare module "entry-points/cesium/common/cesium-snapped-rectangle-creator" {
    import * as Cesium from "cesium";
    import { ICartographic } from "bruce-models/common/cartographic";
    export class CesiumSnappedRectangleCreator {
        private refPoint;
        private cellSize;
        private viewer;
        private mouseHandler;
        private mouseEntity;
        private mousePosition;
        private rectangleEntity;
        private startPos;
        private stopPos;
        OnDrawFinish: (positions: Cesium.Cartesian3[]) => void;
        zIndex: number;
        constructor(viewer: Cesium.Viewer, refPoint: ICartographic, cellSize?: number);
        /**
         * Returns cell reference index for a given amount of meters in either lat or lon direction.
         * @param num
         * @returns
         */
        private getCellDelta;
        /**
         * Returns a position snapped to the cell grid for given cell indexes.
         * @param lonIndex
         * @param latIndex
         * @returns
         */
        private getCellPositionFromIndexes;
        /**
         * Returns position snapped to the grid.
         * @param position
         * @returns
         */
        private getPositionOnCell;
        /**
         * Starts cesium mouse event listeners.
         */
        private startMouseListeners;
        /**
         * Stops cesium mouse event listeners.
         */
        private stopMouseListeners;
        /**
         * Handles mouse movement in cesium view.
         * @param screenPos
         */
        private doMouseMove;
        /**
         * Handles mouse click in cesium view.
         * @param screenPos
         */
        private doClick;
        /**
         * Creates 3d entity representing current mouse position snapped to grid.
         */
        private createMouseEntity;
        /**
         * Removes the 3d entity representing mouse.
         */
        private removeMouseEntity;
        /**
         * Creates cesium 3d entity that represents the current drawn rectangle.
         */
        private createRectangleEntity;
        /**
         * Removes the cesium 3d entity for current drawn rectangle.
         */
        private removeRectangleEntity;
        Start(): void;
        Stop(): void;
        /**
         * Returns positions defining the 4 corners of the currently drawn rectangle.
         * Returns null if there is no defined rectangle.
         */
        getPositions(allowMouse: boolean): Cesium.Cartesian3[];
    }
}
declare module "utils/keyboard-events" {
    import { BruceEvent } from "utils/bruce-event";
    export enum EKeyEventKey {
        Control = "Control",
        Alt = "Alt",
        Backspace = "Backspace",
        ArrowUp = "ArrowUp",
        ArrowDown = "ArrowDown",
        ArrowLeft = "ArrowLeft",
        ArrowRight = "ArrowRight",
        Escape = "Escape",
        CapsLock = "CapsLock",
        Shift = "Shift",
        Z = "z",
        A = "a",
        W = "w",
        S = "s",
        D = "d",
        Q = "q",
        E = "e",
        Space = " ",
        Enter = "Enter"
    }
    export interface IKeyEvent {
        code: string;
        key: EKeyEventKey | string;
        keyCode: number;
        shiftKey: boolean;
        ctrlKey: boolean;
    }
    export class KeyboardEvents {
        private keyUpEventHandler;
        private keyDownEventHandler;
        KeyDownEvent: BruceEvent<IKeyEvent>;
        KeyUpEvent: BruceEvent<IKeyEvent>;
        /**
         * Starts listening for keyboard events.
         */
        EnableEventListening(): void;
        /**
         * Stops listening for keyboard events.
         */
        DisableEventListening(): void;
    }
}
declare module "entry-points/cesium/common/cesium-player-mode" {
    import { Dictionary } from "bruce-models/common/dictionary";
    import { BruceCesium } from "entry-points/cesium/bruce-cesium";
    export enum ECesiumPlayerModeAction {
        Forward = "f",
        Backward = "b",
        Left = "l",
        Right = "r",
        Up = "u",
        Down = "d",
        LookUp = "lu",
        LookDown = "ld",
        LookLeft = "ll",
        LookRight = "lr",
        Looking = "looking"
    }
    export enum ECesiumPlayerModeMovementType {
        Walk = "walk",
        Fly = "fly"
    }
    export class CesiumPlayerMode {
        private viewer;
        keyBinds: Dictionary<ECesiumPlayerModeAction>;
        private actions;
        private screenSpaceHandler;
        private tickHandler;
        private keyDownHandler;
        private keyUpHandler;
        moveRate: number;
        movementType: ECesiumPlayerModeMovementType;
        private running;
        /**
         * Returns if player mode is currently running.
         */
        get isRunning(): boolean;
        private currentMousePos;
        private startMousePos;
        constructor(viewer: BruceCesium.Viewer);
        /**
         * This method sets the keyboard bindings for the different player mode actions.
         *
         * Using method to apply bindings on constructor call instead of part of class declaration because-
         * object declaration in TS does not allow Enum -> Enum application even though they have string values.
         */
        private populateKeybinds;
        /**
         * Starts player mode.
         */
        Start(): void;
        private listeners;
        private updateDirectionByKey;
        private cesiumEvents;
        /**
         * Stops player mode.
         */
        Stop(): void;
        /**
         * Returns a new position using the current camera position, speed and a given heading.
         * @param heading
         * @returns
         */
        private walk;
        /**
         * Gets final heading from all enabled movement directions.
         * @returns
         */
        private getHeading;
        private doTick;
    }
}
declare module "entry-points/cesium/common/cesium-line-creator" {
    import * as Cesium from "cesium";
    export class CesiumLineCreator {
        private viewer;
        private mouseHandler;
        private mouseEntity;
        private mousePosition;
        private startPos;
        private stopPos;
        private polylineEntity;
        zIndex: number;
        constructor(viewer: Cesium.Viewer);
        /**
         * Starts cesium mouse event listeners.
         */
        private startMouseListeners;
        /**
         * Stops cesium mouse event listeners.
         */
        private stopMouseListeners;
        /**
         * Handles mouse movement in cesium view.
         * @param screenPos
         */
        private doMouseMove;
        /**
         * Handles mouse click in cesium view.
         * @param screenPos
         */
        private doClick;
        /**
         * Creates 3d entity representing current mouse position snapped to grid.
         */
        private createMouseEntity;
        /**
         * Removes the 3d entity representing mouse.
         */
        private removeMouseEntity;
        /**
         * Creates cesium 3d entity that represents the current drawn polyline.
         */
        private createPolylineEntity;
        /**
         * Removes the cesium 3d entity for current drawn polyline.
         */
        private removePolylineEntity;
        /**
         * Returns positions defining the line positions.
         * Returns null if there is no defined polyline.
         */
        getPositions(allowMouse: boolean): Cesium.Cartesian3[];
        Start(): void;
        Stop(): void;
    }
}
declare module "entry-points/cesium/common/cesium-outline3d" {
    import * as Cesium from "cesium";
    import { Color } from "bruce-models/common/color";
    export class CesiumOutline3D {
        private viewer;
        private currentEntity;
        private outline;
        color: Color;
        width: number;
        zIndex: number;
        constructor(viewer: Cesium.Viewer);
        /**
         * Outlines a given entity.
         * @Warning: this will detect changes in geometry but will not detect visual type changes.
         * @param entity
         */
        Outline(entity: Cesium.Entity): void;
        /**
         * Removes current outline if there is one.
         */
        Clear(): void;
        private createOutline;
        private detectType;
        /**
         * Returns points for polygon / polyline outline.
         */
        private getPoints;
        private destroyOutline;
    }
}
declare module "entry-points/cesium/common/cesium-polyline-geometry-creator" {
    import * as Cesium from "cesium";
    import { Color } from "bruce-models/common/color";
    import { BruceEvent } from "utils/bruce-event";
    import { CesiumCameraHandler } from "entry-points/cesium/viewer/cesium-camera-handler";
    export interface ICesiumPolylineGeometryCreatorParams {
        viewer: Cesium.Viewer;
        cameraHandler: CesiumCameraHandler;
        color: Color;
        width: number;
        smoothen: number;
        editorPointColor?: Color;
        editorPointSize?: number;
    }
    export class CesiumPolylineGeometryCreator {
        private zIndex;
        private cameraHandler;
        private viewer;
        private _disposed;
        get disposed(): boolean;
        private _started;
        get started(): boolean;
        private mouseHandler;
        private mouseOffset;
        private heightSampler;
        private drawingEntity;
        private drawingMap;
        private editorPoints;
        private activePoint;
        private updateGeometriesQueue;
        private onUpdateEvent;
        private color;
        private width;
        private smoothen;
        private editorPointColor;
        private editorPointSize;
        constructor(params: ICesiumPolylineGeometryCreatorParams);
        getOnChangeEvent(): BruceEvent<void>;
        Start(): void;
        /**
         * @returns: current positions of the polyline.
         */
        getPositions(): Cesium.Cartesian3[];
        /**
         * Sets smoothen level, if changed then a refresh on visual is queued.
         * @param value
         */
        SetSmoothen(value: number): void;
        Stop(): void;
        Dispose(): void;
        private clear;
        private startMouseListeners;
        private stopMouseListeners;
        private doMouseClick;
        private doMouseRightClick;
        private doMouseMove;
        private doMouseLeftUp;
        private doMouseLeftDown;
        /**
         * Removes drawing point and associated map data.
         * @param point
         */
        private removePoint;
        /**
         * Adds new position to nearest outer ring line.
         * @param position
         */
        private addPosition;
        /**
         * Returns editing point from this editor from given screen position.
         * @param screenPos
         * @returns
         */
        private getEditorPointFromMouse;
        /**
         * Creates an editor point for a given point id at a given branch id.
         * @param posId
         * @param hierarchyId
         */
        private createEditorPoint;
        /**
         * Updates the clicked offset from the entity's position.
         * @param screenPos
         */
        private updateOffset;
        /**
         * Removes editing point visuals.
         * @param emptyArray If array of editor points should be cleared.
         */
        private removeEditorPoints;
        /**
         * Updates cursor styling depending on if editing point is found underneath.
         * @param screenPos
         */
        private setPointerCursor;
        /**
         * Updates the screen cursor styling to be grabbing.
         */
        private setGrabCursor;
        /**
         * Removes cursor styling.
         */
        private removeCursor;
        private updateGeometry;
        private createPolylineVisual;
        private smoothenPoints;
    }
}
declare module "entry-points/cesium/common/cesium-polyline-geometry-editor" {
    import * as Cesium from "cesium";
    import { Color } from "bruce-models/common/color";
    import { BruceEvent } from "utils/bruce-event";
    import { CesiumCameraHandler } from "entry-points/cesium/viewer/cesium-camera-handler";
    export interface ICesiumPolylineGeometryEditorParams {
        viewer: Cesium.Viewer;
        cameraHandler: CesiumCameraHandler;
        posses?: Cesium.Cartesian3[];
        entity: Cesium.Entity;
        smoothen: number;
        editorPointColor?: Color;
        editorPointSize?: number;
    }
    export class CesiumPolylineGeometryEditor {
        private cameraHandler;
        private viewer;
        private _disposed;
        get disposed(): boolean;
        private _started;
        get started(): boolean;
        private mouseHandler;
        private mouseOffset;
        private heightSampler;
        private editingEntity;
        private drawingMap;
        private editorPoints;
        private activePoint;
        private updateGeometriesQueue;
        private onUpdateEvent;
        private smoothen;
        private startingPositions;
        private editorPointColor;
        private editorPointSize;
        constructor(params: ICesiumPolylineGeometryEditorParams);
        private init;
        getOnChangeEvent(): BruceEvent<void>;
        Start(): void;
        /**
         * @returns: current positions of the polyline.
         */
        getPositions(): Cesium.Cartesian3[];
        /**
         * If tool is running then calling reset will refresh editor points and visuals.
         */
        Reset(): void;
        /**
         * Sets smoothen level, if changed then a refresh on visual is queued.
         * @param value
         */
        SetSmoothen(value: number): void;
        Stop(): void;
        Dispose(): void;
        private clear;
        private startMouseListeners;
        private stopMouseListeners;
        private doMouseClick;
        private doMouseRightClick;
        private doMouseMove;
        private doMouseLeftUp;
        private doMouseLeftDown;
        /**
         * Removes drawing point and associated map data.
         * @param point
         */
        private removePoint;
        /**
         * Adds new position to nearest outer ring line.
         * @param position
         */
        private addPosition;
        /**
         * Returns editing point from this editor from given screen position.
         * @param screenPos
         * @returns
         */
        private getEditorPointFromMouse;
        /**
         * Creates an editor point for a given point id at a given branch id.
         * @param posId
         * @param hierarchyId
         */
        private createEditorPoint;
        /**
         * Updates the clicked offset from the entity's position.
         * @param screenPos
         */
        private updateOffset;
        /**
         * Removes editing point visuals.
         * @param emptyArray If array of editor points should be cleared.
         */
        private removeEditorPoints;
        /**
         * Updates cursor styling depending on if editing point is found underneath.
         * @param screenPos
         */
        private setPointerCursor;
        /**
         * Updates the screen cursor styling to be grabbing.
         */
        private setGrabCursor;
        /**
         * Removes cursor styling.
         */
        private removeCursor;
        private updateGeometry;
        private unlinkGeometry;
        private smoothenPoints;
    }
}
declare module "utils/cursor-css-handler" {
    export enum ECursor {
        Default = "default",
        Pointer = "pointer",
        Loading = "wait"
    }
    /**
     * Handles cursor state for a provided HTML container.
     */
    export class CursorCSSHandler {
        private container;
        private _state;
        get state(): ECursor | string;
        private data;
        constructor(container: HTMLElement);
        /**
         * @param priority: how important this state is compared to others. Higher priority values itself over others.
         * @param state: the cursor CSS to apply.
         * @returns: request id to use to dismiss the request.
         */
        RequestState(priority: number, state: ECursor | string): string;
        /**
         * Enables the given cursor state by putting it at the top of the priority list.
         * @param state
         * @returns: request id to use to dismiss the a state request.
         */
        ForceState(state: ECursor | string): string;
        /**
         * Dismisses a cursor state request by id.
         * @param requestId
         */
        DismissRequest(requestId: string): void;
        /**
         * Removes all requests and sets cursor to default.
         */
        Reset(): void;
        /**
         * Checks current requests and makes a decision on what cursor should be active.
         */
        private update;
        private setState;
        /**
         * @returns: a priority value higher than any currently active.
         */
        private getNextHighestPriority;
        /**
         * @returns: all current state requests ordered by highest priority first.
         */
        private getRequestsDescending;
    }
}
declare module "entry-points/cesium/common/cesium-rectangle-drawer" {
    import * as Cesium from "cesium";
    import { BruceEvent } from "bruce-maps-widget";
    import { CursorCSSHandler } from "utils/cursor-css-handler";
    import { CesiumCameraHandler } from "entry-points/cesium/viewer/cesium-camera-handler";
    export class CesiumRectangleDrawer {
        private viewer;
        private cameraHandler;
        private cursorHandler;
        private cursorHandlerId;
        private drawEventHandler;
        private editEventHandler;
        private _running;
        get running(): boolean;
        private _paused;
        get paused(): boolean;
        private _onUpdateEvent;
        get OnUpdateEvent(): BruceEvent<void>;
        private rectangleEntity;
        private pos1;
        private pos2;
        private posDrawUpdateQueue;
        private lastDraw2dPos;
        private side1;
        private side2;
        private side3;
        private side4;
        private corner1;
        private corner2;
        private corner3;
        private corner4;
        private get editors();
        private editorEntity;
        private posEditUpdateQueue;
        private lastEdit2dPos;
        constructor(viewer: Cesium.Viewer, cameraHandler: CesiumCameraHandler, cursorHandler: CursorCSSHandler);
        /**
         * Starts the tool.
         */
        Start(): void;
        /**
         * Starts the tool with a defined rectangle.
         */
        StartWithPositions(pos1: Cesium.Cartesian3, pos2: Cesium.Cartesian3): void;
        /**
         * Stops and disposes the tool.
         */
        Stop(): void;
        /**
         * Stops listening to events but keeps the drawn rectangle as is.
         */
        Pause(): void;
        /**
         * Resumes listening to events after a pause.
         */
        Resume(): void;
        /**
         * Returns rectangle positions from its current state.
         */
        GetPositions(): Cesium.Cartesian3[];
        /**
         * Initializes and starts events for detecting mouse in Cesium viewer.
         */
        private initDrawEvents;
        /**
         * Reacts to mouse moving while in rectangle draw.
         * Queues an update on the visual.
         * @param e
         */
        private onDrawMouseMove;
        /**
         * Reacts to visual update queue being triggered for rectangle draw.
         * Updates the rectangle entity.
         */
        private onDrawMouseMoveQueueUpdate;
        /**
         * Reacts to mouse press down when in rectangle draw.
         * Samples position and sets it as starting position.
         * @param e
         */
        private onDrawMouseDown;
        /**
         * Reacts to mouse press up when in rectangle draw.
         * Samples position and finishes rectangle draw.
         * @param e
         */
        private onDrawMouseUp;
        /**
         * Disposes Cesium mouse event handler.
         */
        private disposeDrawEvents;
        /**
         * Creates rectangle entity and adds it to Cesium viewer.
         */
        private createRectangleEntity;
        /**
         * Creates all rectangle side and corner entities.
         */
        private createRectangleEditors;
        /**
         * Disposes all rectangle side and corner entities.
         */
        private disposeRectangleEditors;
        /**
         * Creates and returns rectangle side entity from given set of position getters/setters.
         * @param getPos1
         * @param getPos2
         * @param setPos
         */
        private createRectangleSide;
        /**
         * Disposes rectangle entity.
         */
        private disposeRectangleEntity;
        /**
         * Creates and returns a rectangle corner entity from given callbacks.
         * @param getPos
         * @param setPos
         */
        private createRectangleCorner;
        /**
         * Creates and starts listening to Cesium events for editing rectangle.
         */
        private initEditEvents;
        /**
         * Reacts to mouse move event from editor events.
         * @param e
         */
        private onEditMouseMove;
        private onEditMouseMoveQueueUpdate;
        /**
         * Reacts to mouse down event from editor events.
         * @param e
         */
        private onEditMouseDown;
        /**
         * Returns rectangle editor entity from given screen position.
         * @param pos2d
         */
        private getEditorFromPos2d;
        /**
         * Reacts to mouse up event from editor events.
         * @param e
         */
        private onEditMouseUp;
        /**
         * Disposes editing events.
         */
        private disposeEditEvents;
    }
}
declare module "entry-points/common/fixed-view-monitor" {
    import { IViewMonitor, IBounds, IPoint, IAreaOfIntrest } from "entry-points/common/view-monitor-ifs";
    import { BruceEvent } from "utils/bruce-event";
    /**
     * This class monitors the view .
     */
    export class CFixedViewMonitor implements IViewMonitor {
        private _currentPOI;
        private _currentView;
        private _onPositionReady;
        /**
        * The view monitor object.
        */
        constructor(center: IPoint, bounds: IBounds);
        /**
        * Dispose.
        */
        dispose(): void;
        /**
        * the postion events updated
        */
        ViewAreaUpdated(): BruceEvent<IAreaOfIntrest>;
        /**
        * Getting the current view area
        */
        GetViewAreaInDegrees(): IBounds;
        /**
        * Get the center of the view
        */
        GetTargetPointInDegrees(): IPoint;
        Update(): void;
    }
}
declare module "bruce-models/common/bruce-headers" {
    export class BruceHeaders {
        private _raw;
        get raw(): any;
        constructor(rawData: any);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: any): void;
    }
}
declare module "bruce-models/common/bruce-location" {
    import { Geometry } from "bruce-models/common/geometry";
    export interface IBruceLocation {
        altitude: number | string;
        latitude: number | string;
        longitude: number | string;
    }
    /**
     * DEPRECATED: Please use Cartographic model. This will be removed in a few updates.
     */
    export class BruceLocation {
        altitude: number;
        latitude: number;
        longitude: number;
        /**
         * Returns current state as raw JSON.
         */
        get JSON(): IBruceLocation;
        constructor(rawData: IBruceLocation);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IBruceLocation): void;
        /**
         * Creates location instance from given geometry.
         * Returns null if failed to do so.
         * @param geometry
         */
        static FromGeometry(geometry: Geometry): BruceLocation;
    }
}
declare module "bruce-models/session/cam-account" {
    export class CAMAccount {
        private _raw;
        get raw(): any;
        ID: string;
        Name: string;
        Type: string;
        constructor(rawData: any);
        /**
         * Updates instance of CAM Account using given raw data.
         * @param rawData
         */
        Update(rawData: any): void;
    }
}
declare module "bruce-models/common/test" {
    import { BruceAPI } from "api/bruce-api";
    import { CAMAccount } from "bruce-models/session/cam-account";
    import { IDMSession } from "bruce-models/session/idm-session";
    import { BruceHeaders } from "bruce-models/common/bruce-headers";
    export class Test {
        private _raw;
        get raw(): any;
        SubdomainEffective: string;
        /**
         * Comma-separated list of root domains expected to be supported by this application.
         * NULL for "localhost" debugging.
         */
        RootDomains: string[];
        SubdomainOverride: string;
        Headers: BruceHeaders;
        RequestURL: string;
        "Globals.EnvironmentId": string;
        RequestProtocal: string;
        "System.getProperty": string;
        /**
         * The URL prefix for the API url.
         * For example "http://localhost:8084/Bruce-PaaS-API/test" would have prefix: "/Bruce-PaaS-API".
         */
        RequestContextPath: string;
        /**
         * The URL suffix for the request made.
         * For example "http://localhost:8084/Bruce-PaaS-API/test" would have the suffix: "test".
         */
        RequestURI: string;
        EnvironmentFamily: string;
        ClientAccount: CAMAccount;
        Session: IDMSession;
        constructor(rawData: any);
        /**
         * Updates instance of Test using given test raw data.
         * @param rawData
         */
        Update(rawData: any): void;
        /**
         * @param api
         * @returns: API test data.
         */
        static GetTest(api: BruceAPI): Promise<Test>;
    }
}
declare module "bruce-models/common/layer" {
    import { BruceAPI } from "api/bruce-api";
    export interface ILayer {
        ID: number;
        Name?: string;
        Description?: string;
        IsAccessRestricted?: boolean;
        "EntityType.ID"?: string;
        Color?: string;
    }
    export class Layer {
        ID: number;
        Name?: string;
        Description?: string;
        IsAccessRestricted?: boolean;
        "EntityType.ID"?: string;
        Color: string;
        /**
         * Returns current instance as raw JSON.
         */
        get JSON(): ILayer;
        constructor(rawData: ILayer);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: ILayer): void;
        /**
         * Uses current instance to create or update layer record.
         * @param api
         */
        SaveUpdate(api: BruceAPI): Promise<Layer>;
        /**
         * Deletes record associated with current layer instance.
         * @param api
         */
        Delete(api: BruceAPI): Promise<void>;
        /**
         * Returns all layers either on account or on account matching given entity type id.
         * @param api
         * @param entityTypeId
         */
        static GetLayers(api: BruceAPI, entityTypeId?: string): Promise<Layer[]>;
        /**
         * Returns layer corresponding to given id.
         * @param api
         * @param layerId
         */
        static GetByID(api: BruceAPI, layerId: number): Promise<Layer>;
        /**
         * Returns layers corresponding to given ids.
         * @param api
         * @param layerId
         */
        static GetByIDs(api: BruceAPI, layerIds: number[]): Promise<Layer[]>;
    }
}
declare module "bruce-models/common/bruce-entity-source" {
    import { BruceAPI } from "api/bruce-api";
    /**
     * Describes expected raw data from API.
     */
    export interface IBruceEntitySource {
        "Entity.ID": string;
        "Source.ID": number;
        "SourceRecord.Key": string;
    }
    /**
     * Describes a single bruce entity source.
     * An entity source is a map between arbitrary ID to a bruce entity ID.
     */
    export class BruceEntitySource {
        "Entity.ID": string;
        "SourceRecord.Key": string;
        "Source.ID": number;
        /**
         * Returns current state as raw JSON.
         */
        get JSON(): IBruceEntitySource;
        constructor(rawData: IBruceEntitySource);
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IBruceEntitySource): void;
        /**
         * Creates record matching current state of source.
         * Changing a value in instance after creating a record then calling create again will create a new record.
         * @param api
         */
        CreateRecord(api: BruceAPI): Promise<void>;
        /**
         * Returns a single bruce entity source record corresponding to given sourceId and sourceKey.
         * @param api
         * @param sourceId
         * @param sourceKey
         */
        static GetEntitySourceBySourceKey(api: BruceAPI, sourceId: number, sourceKey: string): Promise<BruceEntitySource>;
        /**
         * Returns array of bruce entity sources corresponding to given sourceId and many source keys.
         * @param api
         * @param sourceId
         * @param sourceKeys
         */
        static GetEntitySourcesBySourceKeys(api: BruceAPI, sourceId: number, sourceKeys: string[]): Promise<BruceEntitySource[]>;
        /**
         * Returns array of bruce entity ids corresponding to given source id and many source keys.
         * Returns values will be in the same order as provided sourceKeys.
         * If there was no record then the index value will be null.
         * @param api
         * @param sourceId
         * @param sourceKeys
         */
        static GetBruceEntityIdsBySourceKeys(api: BruceAPI, sourceId: number, sourceKeys: string[]): Promise<string[]>;
    }
}
declare module "bruce-models/common/entity-relationship-type" {
    import { BruceAPI } from "api/bruce-api";
    export interface IEntityRelationshipType {
        ID: string;
        ForwardName: string;
        ReverseName: string;
        Name: string;
        FlipDisplayDirection?: boolean;
        EntityDisplaySettingID?: string;
        "Relation.EntityType.ID"?: string;
    }
    export class EntityRelationshipType {
        ID: string;
        ForwardName: string;
        ReverseName: string;
        Name: string;
        FlipDisplayDirection: boolean;
        EntityDisplaySettingID: string;
        "Relation.EntityType.ID": string;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IEntityRelationshipType;
        constructor(rawData: IEntityRelationshipType);
        /**
         * Returns a cloned instance.
         */
        Clone(): EntityRelationshipType;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IEntityRelationshipType): void;
        /**
         * Saves or creates the relationship type record.
         * @param api
         */
        SaveUpdate(api: BruceAPI): Promise<EntityRelationshipType>;
        /**
         * Deletes the current entity relationship type record.
         * @param api
         * @returns
         */
        Delete(api: BruceAPI): Promise<void>;
        /**
         * Returns all entity relationship types from given api instance.
         * @param api
         */
        static GetTypes(api: BruceAPI): Promise<EntityRelationshipType[]>;
        /**
         * Returns entity relationship type by id.
         * @param api
         * @param id
         */
        static GetByID(api: BruceAPI, id: string): Promise<EntityRelationshipType>;
    }
}
declare module "bruce-models/common/entity-relationship" {
    import { BruceAPI } from "api/bruce-api";
    import { IBruceInfo } from "bruce-models/common/bruce-info";
    import { EntityRelationshipType, IEntityRelationshipType } from "bruce-models/common/entity-relationship-type";
    export interface IEntityRelationship {
        "Principal.Entity.ID": string;
        "Related.Entity.ID": string;
        RelatedEntity?: IBruceInfo;
        PrincipalEntity?: IBruceInfo;
        "Relation.Type.ID": string;
        RelationType: IEntityRelationshipType;
        "Data.Entity.ID"?: string;
    }
    export class EntityRelationship {
        "Principal.Entity.ID": string;
        "Related.Entity.ID": string;
        PrincipalEntity: IBruceInfo;
        RelatedEntity: IBruceInfo;
        "Relation.Type.ID": string;
        RelationType: EntityRelationshipType;
        "Data.Entity.ID": string;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IEntityRelationship;
        constructor(rawData: IEntityRelationship);
        /**
         * Returns a cloned instance.
         */
        Clone(): EntityRelationship;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IEntityRelationship): void;
        /**
         * Creates or updates the current relationship record.
         * @param api
         */
        SaveUpdate(api: BruceAPI): Promise<EntityRelationship>;
        /**
        * Gets a list of relationships for a given entityId
        * @param api
        * @param entityId
        * @param relationshipTypeId If relationships for a specific type should be returned.
        * @param oneWayOnly If it should only get relationships for one direction.
        * @param loadInfo If bruce info should be loaded for the relationships.
        */
        static GetRelations(api: BruceAPI, entityId: string, relationshipTypeId?: string, oneWayOnly?: boolean, loadInfo?: boolean): Promise<EntityRelationship[]>;
        /**
         * Returns relationship record matching given data entity id.
         * @param api
         * @param dataEntityId
         */
        static GetByDataEntityID(api: BruceAPI, dataEntityId: string): Promise<EntityRelationship>;
    }
}
declare module "bruce-models/common/program-key" {
    import { BruceAPI } from "api/bruce-api";
    export interface IProgramKey {
        ProgramId: string;
        Key: string;
        IsAccessRestricted?: boolean;
    }
    /**
     * Describes an arbitrary key for external programs.
     * An example of this can be a Bing, Cesium ION or Google Maps key.
     */
    export class ProgramKey {
        ProgramId: string;
        Key: string;
        IsAccessRestricted: boolean;
        /**
         * The permission a session must have to access this key if 'IsAccessRestricted' is marked as true.
         */
        get AccessPermission(): string;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IProgramKey;
        constructor(rawData: IProgramKey);
        /**
         * Returns a cloned instance.
         */
        Clone(): ProgramKey;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IProgramKey): void;
        /**
         * Saves current instance to DB.
         * If key does not exist in DB this will create a new record.
         * @param api
         */
        SaveUpdate(api: BruceAPI): Promise<ProgramKey>;
        /**
         * Deletes record associated with current instance.
         * @param api
         */
        Delete(api: BruceAPI): Promise<void>;
        /**
         * Returns access key by program ID.
         * @param api
         */
        static GetByProgramID(api: BruceAPI, id: string): Promise<ProgramKey>;
        /**
         * Returns all access keys.
         * Warning: will not return keys that session does not have access to.
         * @param api
         */
        static GetAll(api: BruceAPI): Promise<ProgramKey[]>;
    }
}
declare module "bruce-models/common/entity-link" {
    import { BruceAPI } from "api/bruce-api";
    export interface IEntityLink {
        DisplayName: string;
        ID?: number;
        "Entity.ID": string;
        URL: string;
    }
    export class EntityLink {
        URL: string;
        DisplayName: string;
        ID: number;
        "Entity.ID": string;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IEntityLink;
        constructor(rawData: IEntityLink);
        /**
         * Returns a cloned instance.
         */
        Clone(): EntityLink;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IEntityLink): void;
        /**
         * Saves or creates entity link record.
         * @param api
         */
        SaveUpdate(api: BruceAPI): Promise<EntityLink>;
        /**
         * Deletes record associated with current instance.
         * @param api
         */
        Delete(api: BruceAPI): Promise<void>;
        /**
         * Returns all entity links for given entity id.
         * @param api
         * @param entityId
         */
        static GetForEntityID(api: BruceAPI, entityId: string): Promise<EntityLink[]>;
    }
}
declare module "bruce-models/common/entity-comment" {
    import { BruceAPI } from "api/bruce-api";
    import { IUTC } from "bruce-models/common/utc";
    export interface IEntityComment {
        Comment: string;
        "Created.ByUser.ID": string;
        "Created.Date": IUTC;
        ID: number;
        RepliesCount: number;
        "ReplyTo.Comment.ID": number;
        "TargetObject.ID": string;
        "TargetObject.Type": string;
    }
    export class EntityComment {
        ID: number;
        Comment: string;
        "Created.ByUser.ID": string;
        "Created.Date": IUTC;
        RepliesCount: number;
        "ReplyTo.Comment.ID": number;
        "TargetObject.Type": string;
        "TargetObject.ID": string;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IEntityComment;
        constructor(rawData: IEntityComment);
        /**
         * Returns a cloned instance.
         */
        Clone(): EntityComment;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IEntityComment): void;
        /**
         * Saves or updates comment record.
         * @param api
         * @returns
         */
        SaveUpdate(api: BruceAPI): Promise<EntityComment>;
        /**
         * Deletes record associated with current instance.
         * @param api
         */
        Delete(api: BruceAPI): Promise<void>;
        /**
         * Returns all comments for an entity.
         * @param api
         * @param entityId
         */
        static GetForEntityID(api: BruceAPI, entityId: string): Promise<EntityComment[]>;
    }
}
declare module "bruce-models/common/ucs" {
    import { BruceAPI } from "bruce-maps-widget";
    import { ITileset, Tileset } from "bruce-models/tileset/tileset";
    import { ICartesian3 } from "bruce-models/common/cartesian3";
    import { Cartographic } from "bruce-models/common/cartographic";
    export interface IUCS {
        id?: number;
        name?: string;
        description?: string;
        pivot?: ICartesian3;
        epsg?: number;
        state?: EUCSState;
        latitude?: number;
        longitude?: number;
        altitude?: number;
        tilesets?: ITileset[];
    }
    export enum EUCSState {
        Undefined = "undef",
        Prepared = "ready"
    }
    export class UCS {
        id: number;
        name: string;
        description: string;
        pivot: ICartesian3;
        epsg: number;
        location: Cartographic;
        state: EUCSState;
        tilesets: Tileset[];
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IUCS;
        constructor(rawData: IUCS);
        /**
         * Returns a cloned instance.
         */
        Clone(): UCS;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IUCS): void;
        /**
         * Creates or updates UCS record.
         * @Warning: New UCS should not have any id set in the model.
         * @param api
         */
        SaveUpdate(api: BruceAPI): Promise<UCS>;
        /**
         * Deletes record corresponding to current instance.
         * @param api
         * @returns
         */
        Delete(api: BruceAPI): Promise<void>;
        /**
         * Deletes record corresponding to given id.
         * @param api
         * @param id
         */
        static Delete(api: BruceAPI, id: number): Promise<void>;
        /**
         * Returns record corresponding to given id.
         * @param api
         * @param id
         * @param includeUsage: If related tilesets should be included in returned data. Default = false.
         * @returns
         */
        static GetByID(api: BruceAPI, id: number, includeUsage?: boolean): Promise<UCS>;
        /**
         * Returns list of all UCS records.
         * @param api
         */
        static GetList(api: BruceAPI): Promise<UCS[]>;
    }
}
declare module "bruce-models/common/entity-attachment-type" {
    import { BruceAPI } from "api/bruce-api";
    export interface IEntityAttachmentType {
        Description: string;
        ID: string | EEntityAttachmentType;
        Name: string;
    }
    /**
     * Set of default entity attachment types.
     */
    export enum EEntityAttachmentType {
        Photo = "photo",
        Document = "document",
        Video = "video",
        Drawing = "drawing",
        Model = "model"
    }
    export class EntityAttachmentType {
        ID: string | EEntityAttachmentType;
        Description: string;
        Name: string;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IEntityAttachmentType;
        constructor(rawData: IEntityAttachmentType);
        /**
         * Returns a cloned instance.
         */
        Clone(): EntityAttachmentType;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IEntityAttachmentType): void;
        /**
         * Creates or updates record to match current instance.
         * @param api
         */
        SaveUpdate(api: BruceAPI): Promise<EntityAttachmentType>;
        /**
         * Calls to delete entity attachment type corresponding to current instance.
         * @param api
         */
        Delete(api: BruceAPI): Promise<void>;
        /**
         * Returns list of all entity attachment types in provided environment.
         * @param api
         */
        static GetAll(api: BruceAPI): Promise<EntityAttachmentType[]>;
    }
}
declare module "bruce-models/common/entity-attachment" {
    import { BruceAPI } from "api/bruce-api";
    import { ClientFile, IClientFile } from "bruce-models/common/client-file";
    import { EEntityAttachmentType } from "bruce-models/common/entity-attachment-type";
    export interface IEntityAttachment {
        ClientFile: IClientFile;
        Group: string;
        "ClientFile.ID": string;
        DisplayOrder: number;
        "Entity.ID": string;
        "EntityAttachmentType.ID": EEntityAttachmentType | string;
    }
    export class EntityAttachment {
        ClientFile: ClientFile;
        Group: string;
        "ClientFile.ID": string;
        DisplayOrder: number;
        "Entity.ID": string;
        "EntityAttachmentType.ID": EEntityAttachmentType | string;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IEntityAttachment;
        constructor(rawData: IEntityAttachment);
        /**
         * Returns a cloned instance.
         */
        Clone(): EntityAttachment;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IEntityAttachment): void;
        /**
         * Updates record with existing data.
         * This will NOT create a new record. Use 'UploadAttachment' instead.
         * @param api
         */
        SaveUpdate(api: BruceAPI): Promise<EntityAttachment>;
        /**
         * Uses instance data to create a new record from given blob.
         * This is NOT an update request. Use 'SaveUpdate'.
         * @param api
         * @param file
         * @param progress
         */
        UploadAttachment(api: BruceAPI, file: Blob, progress?: (ev: ProgressEvent) => void): Promise<EntityAttachment>;
        /**
         * Deletes record corresponding to current instance.
         * @param api
         */
        Delete(api: BruceAPI): Promise<void>;
        /**
         * Returns URL to current attachment.
         * @param api
         */
        GetURL(api: BruceAPI): string;
        /**
         * Returns all attachments for an entity id.
         * @param api
         * @param entityId
         */
        static GetByEntityID(api: BruceAPI, entityId: string): Promise<EntityAttachment[]>;
        /**
         * Deletes multiple entity attachment records for a single entity.
         * @param api
         * @param entityId
         * @param attachmentTypeId
         * @param clientFileIds
         */
        static DeleteByClientFileIDs(api: BruceAPI, entityId: string, attachmentTypeId: EEntityAttachmentType | string, clientFileIds: string[]): Promise<void>;
        /**
         * Updates an entity's attachments order.
         * @param api
         * @param entityId
         * @param attachmentTypeId
         * @param clientFileIds: new order for attachments.
         */
        static UpdateOrder(api: BruceAPI, entityId: string, attachmentTypeId: EEntityAttachmentType | string, clientFileIds: string[]): Promise<void>;
    }
}
declare module "bruce-models/ui-plugin/ui-plugin" {
    import { BruceAPI } from "api/bruce-api";
    import { IUTC, UTC } from "bruce-models/common/utc";
    export interface IUIPlugin {
        ID: string;
        Name: string;
        Version?: number;
        IsAccessRestricted?: boolean;
        IsLoginRequired?: boolean;
        Location?: string;
        Icon?: string;
        "Created.Date"?: IUTC;
        "LastUpdated.Date"?: IUTC;
    }
    export class UIPlugin {
        ID: string;
        Name: string;
        Version: number;
        IsAccessRestricted: boolean;
        IsLoginRequired: boolean;
        Location: string;
        Icon: string;
        CreatedDate: UTC;
        LastUpdatedDate: UTC;
        /**
         * The permission a session must have to access this key if 'IsAccessRestricted' is marked as true.
         */
        get AccessPermission(): string;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IUIPlugin;
        constructor(rawData: IUIPlugin);
        /**
         * Returns a cloned instance.
         */
        Clone(): UIPlugin;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IUIPlugin): void;
        /**
         * Saves or updates plugin record.
         * ID must be set.
         * @param api
         */
        SaveUpdate(api: BruceAPI): Promise<void>;
        /**
         * Deletes plugin corresponding to current instance.
         * @param api
         */
        Delete(api: BruceAPI): Promise<void>;
        /**
         * Uploads and replaces the plugin source file.
         * Provided file MUST be a zip.
         * @param api
         * @param blob
         * @param progress
         * @param onError
         */
        UploadZIP(api: BruceAPI, blob: Blob, progress?: (ev: ProgressEvent) => void, onError?: (data: any) => void): Promise<void>;
        /**
         * Returns URL to file within plugin ZIP by given path.
         * @param api
         * @param path
         */
        getFileURL(api: BruceAPI, path: string): string;
        /**
         * Returns all plugins in account.
         * @param api
         */
        static GetAll(api: BruceAPI): Promise<UIPlugin[]>;
        /**
         * Returns plugin corresponding to given id.
         * @param api
         * @param id
         */
        static GetByID(api: BruceAPI, id: string): Promise<UIPlugin>;
        /**
         * Returns access permission user needs to have to access plugin by given id.
         * @param id
         */
        static GetAccessPermission(id: string): string;
    }
}
declare module "utils/url-utils" {
    import { IDictionary } from "bruce-models/common/dictionary";
    export class URLUtils {
        /**
         * Converts the Query String of the current page URL into JSON object.
         */
        static GetQueryString(doc: Document): IDictionary<string>;
    }
}
declare module "utils/window-url-handler" {
    import { IDictionary } from "bruce-models/common/dictionary";
    /**
     * Helps manage the process of updating and reading current URL state.
     */
    export class WindowURLHandler {
        private _window;
        get window(): Window;
        private get document();
        private _allowedKeys;
        get allowedKeys(): string[];
        constructor(window: Window, allowedKeys?: string[]);
        /**
         * Updates what keys are allowed in URL and calls a refresh.
         * @param allowedKeys
         */
        UpdateAllowedKeys(allowedKeys: string[]): void;
        /**
         * Updates a key/value pair from URL matching given key.
         * @param key
         */
        UpdateParam(key: string, value: string | number): void;
        /**
         * Returns a key/value pair from URL matching given key.
         * @param key
         */
        RemoveParam(key: string): void;
        /**
         * @returns: array of all param keys.
         */
        GetParamKeys(): string[];
        /**
         * @returns: dictionary of all param keys and their values.
         */
        GetParams(): IDictionary<string>;
        /**
         * @param key
         * @returns: returns param value by given key.
         */
        GetParam(key: string): string;
        /**
         * Clears all params.
         */
        Clear(): void;
        /**
         * Refreshes URL with given dictionary.
         */
        private refresh;
    }
}
declare module "api/account-api" {
    import { AbstractAPI } from "api/abstract-api";
    export class AccountAPI extends AbstractAPI {
        static _instances: AccountAPI[];
        /**
         * Returns account api instance corresponding to provided parameters.
         * @param environment
         */
        static getInstance(environment: string): AccountAPI;
        environment: string;
        BASE_URL: string;
        constructor(environment: string);
        /**
         * Initializes the session api link.
         */
        private init;
        /**
         * Performs GET request with AccountAPI instance prefix.
         * @param url
         * @param onError
         */
        GET(url: string, onError?: (data: any) => void): Promise<any>;
        /**
         * Performs POST request with AccountAPI instance prefix.
         * @param url
         * @param data
         * @param onError
         */
        POST(url: string, data: any, onError?: (data: any) => void): Promise<any>;
        /**
         * Performs PUT request with AccountAPI instance prefix.
         * @param url
         * @param data
         * @param onError
         */
        PUT(url: string, data: any, onError?: (data: any) => void): Promise<any>;
        /**
         * Performs DELETE request with AccountAPI instance prefix.
         * @param url
         * @param onError
         */
        DELETE(url: string, onError?: (data: any) => void): Promise<any>;
        /**
         * Performs POST UPLOAD request with AccountAPI instance prefix.
         * @param url
         * @param blob
         * @param progress
         * @param onError
         */
        UPLOAD<TOutput>(url: string, blob: Blob, progress?: (ev: ProgressEvent) => void, onError?: (data: any) => void): Promise<TOutput>;
    }
}
declare module "bruce-models/data-model-template" {
    export interface IDataModelTemplate {
    }
    export class DataModelTemplate {
        private _raw;
        get raw(): IDataModelTemplate;
        /**
         * Returns current instance as raw data.
         */
        get JSON(): IDataModelTemplate;
        constructor(rawData: IDataModelTemplate);
        /**
         * Returns a cloned instance.
         */
        Clone(): DataModelTemplate;
        /**
         * Updates instance using given raw data.
         * @param rawData
         */
        Update(rawData: IDataModelTemplate): void;
    }
}
