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
define(['require','exports','text!./app-test-navigation-item.html','../../../common/decorator/component','../../../common/utils/ko-utils','../../../common/utils/pubsub','css!./app-test-navigation-item.css'], function (require, exports, html, component_1, ko_utils_1, pubsub_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppTestForm = void 0;
    var AppTestForm = /** @class */ (function (_super) {
        __extends(AppTestForm, _super);
        function AppTestForm(params) {
            var _this = _super.call(this, params) || this;
            _this.entity = ko.observable('');
            _this.address = ko.observable('');
            var data = ko_utils_1.KoUtils.GetValue(params.entity);
            if (data) {
                _this.entity(data);
            }
            _this.addDisposable(params.entity.subscribe(function (data) {
                console.log(data);
                _this.entity(data);
            }));
            return _this;
        }
        AppTestForm.prototype.navigationClick = function () {
            console.log('navigationClick', this.entity());
            pubsub_1.default.publish("SelectedEntity", this.entity().value);
        };
        AppTestForm = __decorate([
            component_1.Component({ name: "app-test-navigation-item", template: html })
        ], AppTestForm);
        return AppTestForm;
    }(component_1.AbstractComponent));
    exports.AppTestForm = AppTestForm;
});

//# sourceMappingURL=app-test-navigation-item.js.map
