import * as BruceMaps from "bruce-maps-widget";
import * as Cesium from "cesium";
import { IWindowExtended } from "./common/ifs/window-ext";

import { Disposable } from "./common/utils/disposable";
import "./global-imports";

/**
 * Used as the loader for dependencies from global-imports for require.js.
 */
export class Application extends Disposable {
    constructor() {
        super();

        // Making sure the libs are accessable anywhere they need to be.
        let win = <IWindowExtended> <any> window;
        win.BruceMaps = BruceMaps;
        win.Cesium = Cesium;
    }
}