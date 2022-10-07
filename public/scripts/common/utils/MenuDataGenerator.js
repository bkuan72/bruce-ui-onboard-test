// generate menudata according to 
// the dataSchema,UI schema and data provided
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.findParentKeys = exports.generateMenuData = void 0;
    function generateMenuData(dataSchema, uiSchema, data) {
        console.log('recieved dataSchema', dataSchema);
        console.log('recieved uiSchema', uiSchema);
        console.log('recieved data', data);
        // traverse the nested dataSchema object  to key-value pairs
        var dataSchemaMap = new Map();
        var traverseDataSchema = function (dataSchema, parent) {
            if (dataSchema && dataSchema.Key) {
                dataSchemaMap.set(dataSchema.Key, __assign(__assign({}, dataSchema), { parent: parent }));
            }
            if (dataSchema && dataSchema.Structure) {
                dataSchema.Structure.forEach(function (child) {
                    traverseDataSchema(child, dataSchema);
                });
            }
        };
        traverseDataSchema(dataSchema, null);
        // traverse the nested record object to key-value pairs
        var dataMap = new Map();
        var traverseData = function (data) {
            if (data) {
                Object.keys(data).forEach(function (key) {
                    if (typeof data[key] === 'object') {
                        traverseData(data[key]);
                    }
                    else {
                        dataMap.set(key, data[key]);
                    }
                });
            }
        };
        traverseData(data);
        console.log(dataSchemaMap, dataMap, uiSchema);
        // combine the dataSchema/ uiSchema / data to generate menuData
        var menuData = [];
        uiSchema.forEach(function (ui) {
            var key = ui.key;
            var type = ui.type;
            var dataSchema = dataSchemaMap.get(key);
            var data = dataMap.get(key);
            var item = {};
            if (dataSchema) {
                item = __assign(__assign({}, ui), { dataSchema: dataSchema, defaultValue: data });
                menuData.push(item);
            }
        });
        console.log('outPutMenuData', menuData);
        return menuData;
    }
    exports.generateMenuData = generateMenuData;
    function findParentKeys(MenuDataSchema) {
        var _a, _b;
        var parentKeys = [];
        var parent = (_a = MenuDataSchema === null || MenuDataSchema === void 0 ? void 0 : MenuDataSchema.dataSchema) === null || _a === void 0 ? void 0 : _a.parent;
        while (parent) {
            parentKeys.push(parent.Key);
            parent = (_b = parent === null || parent === void 0 ? void 0 : parent.dataSchema) === null || _b === void 0 ? void 0 : _b.parent;
        }
        parentKeys.push(MenuDataSchema.key);
        return parentKeys;
    }
    exports.findParentKeys = findParentKeys;
});

//# sourceMappingURL=MenuDataGenerator.js.map
