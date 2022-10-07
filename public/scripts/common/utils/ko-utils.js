define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.KoUtils = void 0;
    var KoUtils;
    (function (KoUtils) {
        function GetValue(obj) {
            if (obj && ko.isObservable(obj)) {
                return obj();
            }
            return obj;
        }
        KoUtils.GetValue = GetValue;
        function GuaranteeObs(obj) {
            if (obj && ko.isObservable(obj)) {
                return obj;
            }
            return ko.observable(obj);
        }
        KoUtils.GuaranteeObs = GuaranteeObs;
    })(KoUtils = exports.KoUtils || (exports.KoUtils = {}));
});

//# sourceMappingURL=ko-utils.js.map
