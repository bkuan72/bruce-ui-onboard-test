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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(['require','exports','text!./app-test-tooltip.html','../../common/decorator/component','../../common/utils/MenuDataGenerator','../../common/utils/pubsub','../../common/utils/ko-utils','css!./app-test-tooltip.css'], function (require, exports, html, component_1, MenuDataGenerator_1, pubsub_1, ko_utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppTestMenu = void 0;
    var AppTestMenu = /** @class */ (function (_super) {
        __extends(AppTestMenu, _super);
        function AppTestMenu(params) {
            var _a;
            var _this = _super.call(this, params) || this;
            _this.value = ko.observable();
            _this.MenuDataSchema = ko.observableArray([]);
            var uiSchema = params.uiSchema;
            var data = ko_utils_1.KoUtils.GetValue(params.value);
            if (data != null) {
                var dataSchema = (_a = data === null || data === void 0 ? void 0 : data.type) === null || _a === void 0 ? void 0 : _a.DataSchema;
                var menuData = MenuDataGenerator_1.generateMenuData(dataSchema, uiSchema, data === null || data === void 0 ? void 0 : data.record);
                _this.MenuDataSchema(menuData);
                _this.value(data);
            }
            _this.addDisposable(params.value.subscribe(function (data) {
                var _a;
                console.log('data', data);
                var dataSchema = (_a = data === null || data === void 0 ? void 0 : data.type) === null || _a === void 0 ? void 0 : _a.DataSchema;
                var menuData = MenuDataGenerator_1.generateMenuData(dataSchema, uiSchema, data === null || data === void 0 ? void 0 : data.record);
                console.log('menuData', menuData);
                _this.MenuDataSchema(menuData);
                _this.value(data);
            }));
            return _this;
        }
        AppTestMenu.prototype.openDialog = function () {
            pubsub_1.default.publish("DialogVisible", true);
            pubsub_1.default.publish("TooltipVisible", false);
        };
        AppTestMenu = __decorate([
            component_1.Component({ name: "app-test-tooltip", template: html })
        ], AppTestMenu);
        return AppTestMenu;
    }(component_1.AbstractComponent));
    exports.AppTestMenu = AppTestMenu;
});

//# sourceMappingURL=app-test-tooltip.js.map
