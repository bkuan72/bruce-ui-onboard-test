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
define(['require','exports','text!./app-test-navigation.html','../../common/decorator/component','../../common/utils/pubsub','css!./app-test-navigation.css'], function (require, exports, html, component_1, pubsub_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppTestForm = void 0;
    var traceNode = /** @class */ (function () {
        function traceNode(key, value, next, prev) {
            if (next === void 0) { next = null; }
            if (prev === void 0) { prev = null; }
            this.key = key;
            this.value = value;
            this.next = next;
            this.prev = prev;
            this.key = key;
            this.value = value;
            this.next = null;
            this.prev = null;
        }
        return traceNode;
    }());
    var AppTestForm = /** @class */ (function (_super) {
        __extends(AppTestForm, _super);
        function AppTestForm(params) {
            var _this = _super.call(this, params) || this;
            _this.capacity = 10;
            _this.traceMap = {};
            _this.count = 0;
            _this.dummyHead = new traceNode("", null);
            _this.dummyTail = new traceNode("", null);
            _this.current = ko.observable(_this.dummyHead);
            _this.showTrace = ko.observable(true);
            _this.dummyHead.next = _this.dummyTail;
            _this.dummyTail.prev = _this.dummyHead;
            pubsub_1.default.subscription("trace", function (entity) {
                if (!entity) {
                    debugger;
                    _this.clearTrace();
                    return;
                }
                var key = entity === null || entity === void 0 ? void 0 : entity.bruceMeta.EntityID();
                if (key) {
                    _this.addTraceNode(key, entity);
                }
            }).subscribe();
            return _this;
        }
        AppTestForm.prototype.clearTrace = function () {
            this.dummyHead = new traceNode("", null);
            this.dummyTail = new traceNode("", null);
            this.dummyHead.next = this.dummyTail;
            this.dummyTail.prev = this.dummyHead;
            this.count = 0;
            this.traceMap = {};
            this.current(this.dummyHead);
        };
        AppTestForm.prototype.addTraceNode = function (key, value) {
            var node = this.traceMap[key];
            console.log('map', this.traceMap);
            if (node) {
                node.value = value;
                this.moveToHead(node);
                this.traceMap[node.key] = node;
            }
            else {
                var newNode = new traceNode(key, value);
                this.traceMap[key] = newNode;
                this.addToHead(newNode);
                if (this.count == this.capacity) {
                    this.removeTraceNode(this.dummyTail.prev);
                }
                else {
                    this.count++;
                }
            }
            this.current(this.dummyHead.next);
            console.log('next', this.dummyHead.next);
        };
        AppTestForm.prototype.moveToHead = function (node) {
            this.removeTraceNode(node);
            this.addToHead(node);
        };
        AppTestForm.prototype.addToHead = function (node) {
            node.next = this.dummyHead.next;
            node.prev = this.dummyHead;
            this.dummyHead.next.prev = node;
            this.dummyHead.next = node;
        };
        AppTestForm.prototype.removeTraceNode = function (node) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
            delete this.traceMap[node.key];
        };
        AppTestForm.prototype.hideNav = function () {
            this.showTrace(false);
        };
        AppTestForm.prototype.showNav = function () {
            this.showTrace(true);
        };
        AppTestForm = __decorate([
            component_1.Component({ name: "app-test-navigation", template: html })
        ], AppTestForm);
        return AppTestForm;
    }(component_1.AbstractComponent));
    exports.AppTestForm = AppTestForm;
});

//# sourceMappingURL=app-test-navigation.js.map
