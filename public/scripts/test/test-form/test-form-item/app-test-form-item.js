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
define(['require','exports','text!./app-test-form-item.html','../../../common/decorator/component','../../../common/utils/MenuDataGenerator','../../../common/utils/ko-utils','css!./app-test-form-item.css'], function (require, exports, html, component_1, MenuDataGenerator_1, ko_utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppTestForm = void 0;
    var AppTestForm = /** @class */ (function (_super) {
        __extends(AppTestForm, _super);
        function AppTestForm(params) {
            var _this = _super.call(this, params) || this;
            _this.value = ko.observable();
            _this.FormDataSchema = ko.observableArray([]);
            // the params can be converted  asynchronous by click or synchronous by recurve component
            _this.init(params);
            return _this;
        }
        AppTestForm.prototype.init = function (params) {
            var _this = this;
            var _a;
            var uiSchema = params.uiSchema;
            var data = ko_utils_1.KoUtils.GetValue(params.value);
            if (data != null) {
                var dataSchema = (_a = data === null || data === void 0 ? void 0 : data.type) === null || _a === void 0 ? void 0 : _a.DataSchema;
                var formData = MenuDataGenerator_1.generateMenuData(dataSchema, uiSchema, data === null || data === void 0 ? void 0 : data.record).map(function (item) {
                    item.defaultValue = ko.observable(item.defaultValue);
                    return item;
                });
                this.FormDataSchema(formData);
                this.value(data);
            }
            this.addDisposable(params.value.subscribe(function (data) {
                var _a;
                var dataSchema = (_a = data === null || data === void 0 ? void 0 : data.type) === null || _a === void 0 ? void 0 : _a.DataSchema;
                var formData = MenuDataGenerator_1.generateMenuData(dataSchema, uiSchema, data === null || data === void 0 ? void 0 : data.record).map(function (item) {
                    if (item["control"]) {
                        item.defaultValue = ko.observable(item.defaultValue);
                    }
                    return item;
                });
                _this.FormDataSchema(formData);
                _this.value(data);
            }));
            var _loop_1 = function (i) {
                var item = this_1.FormDataSchema()[i];
                if (item["control"]) {
                    item.defaultValue.subscribe(function (value) {
                        // console.log(value);
                        console.log(MenuDataGenerator_1.findParentKeys(item), value);
                        alert("controled filed " + MenuDataGenerator_1.findParentKeys(item).join(".") + " changed to " + value);
                    });
                }
            };
            var this_1 = this;
            for (var i in this.FormDataSchema()) {
                _loop_1(i);
            }
        };
        AppTestForm.prototype.onChange = function (data) {
            console.log(data);
        };
        AppTestForm = __decorate([
            component_1.Component({ name: "app-test-form-item", template: html })
        ], AppTestForm);
        return AppTestForm;
    }(component_1.AbstractComponent));
    exports.AppTestForm = AppTestForm;
});

//# sourceMappingURL=app-test-form-item.js.map
