define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CDisposableFunction = exports.Disposable = void 0;
    var Disposable = /** @class */ (function () {
        function Disposable() {
            this._disposable = [];
            this._disposed = false;
        }
        Disposable.prototype.addDisposable = function (disposable) {
            this._disposable.push(disposable);
        };
        Disposable.prototype.dispose = function () {
            this._disposable.forEach(function (disposable) {
                disposable.dispose();
            });
            this._disposable = [];
            this._disposed = true;
        };
        Disposable.prototype.isDisposed = function () {
            return this._disposed;
        };
        return Disposable;
    }());
    exports.Disposable = Disposable;
    var CDisposableFunction = /** @class */ (function () {
        function CDisposableFunction(fn) {
            this._fn = fn;
        }
        CDisposableFunction.prototype.dispose = function () {
            this._fn();
        };
        return CDisposableFunction;
    }());
    exports.CDisposableFunction = CDisposableFunction;
});

//# sourceMappingURL=disposable.js.map
