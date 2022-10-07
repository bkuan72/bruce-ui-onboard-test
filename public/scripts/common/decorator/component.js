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
define(["require", "exports", "./../utils/disposable"], function (require, exports, disposable_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AbstractComponent = exports.Component = void 0;
    function Component(params) {
        return function (target) {
            // This stops knockout from spamming logs about empty templates.
            if (!params.template) {
                params.template = "<!-- NO TEMPLATE PROVIDED -->";
            }
            ko.components.register(params.name, {
                viewModel: {
                    createViewModel: function (params, componentInfo) {
                        params = params || {};
                        params.element = componentInfo.element;
                        return new target(params);
                    }
                },
                template: "<!-- ko template: {afterRender: $component.rendered.bind($component)} -->" + params.template + "<!-- /ko -->"
            });
            return target;
        };
    }
    exports.Component = Component;
    var AbstractComponent = /** @class */ (function (_super) {
        __extends(AbstractComponent, _super);
        function AbstractComponent(params) {
            var _this = _super.call(this) || this;
            // General use loading indicator for components.
            _this.IsLoading = ko.observable(false);
            // Set to true after first render.
            _this.hasRendered = false;
            _this.element = params.element;
            return _this;
        }
        /**
         * Called on component HTML render.
         */
        AbstractComponent.prototype.rendered = function () {
            this.hasRendered = true;
        };
        /**
         * Pass an array of knockout observables and a callback to trigger when any of the given observables get updated.
         * @param observables
         * @param callback
         */
        AbstractComponent.prototype.subscribeObsArray = function (observables, callback) {
            if (!observables || !callback) {
                return;
            }
            for (var i = 0; i < observables.length; i++) {
                var obs = observables[i];
                this.addDisposable(obs.subscribe(function () { return callback(); }));
            }
        };
        return AbstractComponent;
    }(disposable_1.Disposable));
    exports.AbstractComponent = AbstractComponent;
});

//# sourceMappingURL=component.js.map
