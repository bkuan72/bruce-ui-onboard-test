define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Pubsub = /** @class */ (function () {
        function Pubsub() {
            this.events = {};
        }
        Pubsub.prototype.subscription = function (eventName, func) {
            var _this = this;
            return {
                subscribe: function () {
                    if (_this.events[eventName]) {
                        _this.events[eventName].push(func);
                        console.log(func.name + " has subscribed to " + eventName + " Topic!");
                    }
                    else {
                        _this.events[eventName] = [func];
                        console.log(func.name + " has subscribed to " + eventName + " Topic!");
                    }
                },
                unsubscribe: function () {
                    if (_this.events[eventName]) {
                        _this.events[eventName] = _this.events[eventName].filter(function (subscriber) { return subscriber !== func; });
                        console.log(func.name + " has unsubscribed from " + eventName + " Topic!");
                    }
                }
            };
        };
        Pubsub.prototype.publish = function (eventName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var funcs = this.events[eventName];
            if (Array.isArray(funcs)) {
                funcs.forEach(function (func) {
                    func.apply(null, args);
                });
            }
        };
        return Pubsub;
    }());
    exports.default = new Pubsub();
});
//   const speak = (param) => {
//     console.log(`I am ${param}`);
//   };
//   const greetAll = (x, y, z) => {
//     console.log(`Hello ${x}, ${y}, ${z}`);
//   };
//   const pubsub = new Pubsub();
//   pubsub.subscription("greet", greetAll).subscribe() // prints greetAll has subscribed to greet Topic!
//   pubsub.subscription("sayName", speak).subscribe() // prints speak has subscribed to sayName Topic!
//   pubsub.subscription("sayName", greetAll).unsubscribe() // prints greetAll has unsubscribed from sayName Topic!
//   pubsub.publish("greet", "Lawrence Eagles", "John Doe", "Jane Doe"); // prints Hello Lawrence Eagles, John Doe, Jane Doe
//   pubsub.publish("sayName", "Lawrence Eagles"); // prints I am Lawrence Eagles

//# sourceMappingURL=pubsub.js.map
