import * as BruceMaps from "bruce-maps-widget";
import * as Cesium from "cesium";

export interface IWindowExtended extends Window {
    Cesium: typeof Cesium;
    BruceMaps: typeof BruceMaps;
}