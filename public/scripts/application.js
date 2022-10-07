var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "bruce-maps-widget", "cesium", "./common/utils/disposable", "./global-imports"], function (require, exports, BruceMaps, Cesium, disposable_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Application = void 0;
    /**
     * Used as the loader for dependencies from global-imports for require.js.
     */
    var Application = /** @class */ (function (_super) {
        __extends(Application, _super);
        function Application() {
            var _this = _super.call(this) || this;
            // Making sure the libs are accessable anywhere they need to be.
            var win = window;
            win.BruceMaps = BruceMaps;
            win.Cesium = Cesium;
            return _this;
        }
        return Application;
    }(disposable_1.Disposable));
    exports.Application = Application;
});

//# sourceMappingURL=application.js.map
