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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define(['require','exports','text!./app-test-entity-data.html','../../common/decorator/component','bruce-maps-widget','../../common/utils/pubsub','../../common/data/schema','css!./app-test-entity-data.css'], function (require, exports, html, component_1, bruce_maps_widget_1, pubsub_1, schema_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppTestEntityData = void 0;
    var VIEWER_CONTAINER_ID = "APP_TEST_ENTITY_DATA_VIEWER";
    var ACCOUNT_ID = "onboarding";
    var ENV = bruce_maps_widget_1.EEnvironmentType.STAGING;
    var TEST_VIEW_ID = "TestRenderEntityData2ca2010";
    var AppTestEntityData = /** @class */ (function (_super) {
        __extends(AppTestEntityData, _super);
        function AppTestEntityData(params) {
            var _this = _super.call(this, params) || this;
            _this.TooltipPos = ko.observable(null);
            _this.TooltipVisible = ko.observable(false);
            _this.DialogVisible = ko.observable(false);
            _this.Bookmarks = ko.observable([]);
            _this.SelectedBookmark = ko.observable();
            _this.SelectedEntity = ko.observable();
            _this.SelectedData = ko.observable();
            _this.uiSchema = schema_1.uiSchema;
            _this.handleSelect = function (data) { return __awaiter(_this, void 0, void 0, function () {
                var pos, entities, entity, api, entityId, record, _a;
                var _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            pos = data.position;
                            if (!bruce_maps_widget_1.CesiumUtils.Validate2DPosition(pos)) return [3 /*break*/, 4];
                            if ((_b = this.SelectedEntity()) === null || _b === void 0 ? void 0 : _b.bruceMeta) {
                                this.viewer.visualRegister.Unhighlight(this.SelectedEntity().bruceMeta);
                            }
                            this.SelectedEntity(null);
                            entities = this.viewer.DigEntitiesFromMouse(pos, 1);
                            entity = entities.length ? entities[0] : null;
                            if (!entity) return [3 /*break*/, 4];
                            api = this.viewer.GetAPIInstance();
                            entityId = (_c = entity === null || entity === void 0 ? void 0 : entity.bruceMeta.EntityID()) !== null && _c !== void 0 ? _c : null;
                            if (!entityId) return [3 /*break*/, 2];
                            return [4 /*yield*/, bruce_maps_widget_1.BruceInfo.GetById(api, entityId)];
                        case 1:
                            _a = _d.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            _a = null;
                            _d.label = 3;
                        case 3:
                            record = _a;
                            console.log('record', record);
                            pubsub_1.default.publish("trace", __assign(__assign({}, entity), { position: __assign({}, pos), bruceInfo: record }));
                            this.viewer.visualRegister.Highlight(entity.bruceMeta);
                            this.SelectedEntity(entity);
                            _d.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            }); };
            _this.addDisposable(_this.SelectedEntity.subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(data != null)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.loadData(data)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            }); }));
            _this.addDisposable(_this.SelectedBookmark.subscribe(function (bookmark) {
                _this.viewer.EnableBookmark(bookmark);
                _this.viewer.visualRegister.Unhighlight(_this.SelectedEntity().bruceMeta);
                _this.TooltipVisible(false);
                _this.DialogVisible(false);
                pubsub_1.default.publish("trace", null);
            }));
            pubsub_1.default.subscription("TooltipVisible", _this.TooltipVisible).subscribe();
            pubsub_1.default.subscription("DialogVisible", _this.DialogVisible).subscribe();
            pubsub_1.default.subscription("SelectedEntity", function (data) {
                _this.showTooltip(data);
                _this.handleSelect(data);
            }).subscribe();
            return _this;
        }
        AppTestEntityData.prototype.rendered = function () {
            _super.prototype.rendered.call(this);
            this.createViewer();
        };
        AppTestEntityData.prototype.dispose = function () {
            var _a;
            _super.prototype.dispose.call(this);
            (_a = this.viewer) === null || _a === void 0 ? void 0 : _a.Dispose();
        };
        AppTestEntityData.prototype.createViewer = function () {
            var container = document.getElementById(VIEWER_CONTAINER_ID);
            if (!container) {
                console.error("Viewer container not found");
                return;
            }
            var viewer = this.viewer = new bruce_maps_widget_1.BruceCesium.Viewer();
            viewer.Init(container, ACCOUNT_ID, ENV);
            this.renderTestData();
            this.listenSelection();
        };
        AppTestEntityData.prototype.renderTestData = function () {
            return __awaiter(this, void 0, Promise, function () {
                var viewer, data, bookmarks;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            viewer = this.viewer;
                            return [4 /*yield*/, viewer.LoadProjectView(TEST_VIEW_ID)];
                        case 1:
                            data = _a.sent();
                            return [4 /*yield*/, viewer.projectView.GetBookmarks(viewer.GetAPIInstance())];
                        case 2:
                            bookmarks = _a.sent();
                            this.Bookmarks(bookmarks);
                            this.SelectedBookmark(bookmarks.length ? bookmarks[0] : null);
                            return [2 /*return*/];
                    }
                });
            });
        };
        AppTestEntityData.prototype.showTooltip = function (data) {
            var pos = data.position;
            if (bruce_maps_widget_1.CesiumUtils.Validate2DPosition(pos)) {
                this.TooltipPos(pos);
                this.TooltipVisible(true);
            }
        };
        AppTestEntityData.prototype.listenSelection = function () {
            var _this = this;
            var viewer = this.viewer;
            var events = new bruce_maps_widget_1.CesiumMouseEvents(viewer.CesiumViewer);
            // RightClick show tooltip
            // Left click show dialog and hide tooltip
            events.RightClickEvent.Subscribe(function (data) {
                _this.handleSelect(data);
                _this.DialogVisible(true);
                _this.TooltipVisible(false);
            });
            events.ClickEvent.Subscribe(function (data) {
                _this.handleSelect(data);
                _this.DialogVisible(false);
                _this.showTooltip(data);
            });
            events.LeftDownEvent.Subscribe(function (event) {
                _this.DialogVisible(false);
            });
            events.EnableEventHandling();
        };
        AppTestEntityData.prototype.loadData = function (entity) {
            var _a;
            return __awaiter(this, void 0, Promise, function () {
                var api, entityId, record, _b, type, _c, name, attachments, defaultPhoto;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            console.log('loadData', entity);
                            this.SelectedData(null);
                            if (!entity)
                                return [2 /*return*/];
                            api = this.viewer.GetAPIInstance();
                            entityId = (_a = entity === null || entity === void 0 ? void 0 : entity.bruceMeta.EntityID()) !== null && _a !== void 0 ? _a : null;
                            if (!entityId) return [3 /*break*/, 2];
                            return [4 /*yield*/, bruce_maps_widget_1.BruceInfo.GetById(api, entityId)];
                        case 1:
                            _b = _d.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            _b = null;
                            _d.label = 3;
                        case 3:
                            record = _b;
                            if (!record) return [3 /*break*/, 5];
                            return [4 /*yield*/, bruce_maps_widget_1.EntityType.GetByID(api, record.Bruce["EntityType.ID"])];
                        case 4:
                            _c = _d.sent();
                            return [3 /*break*/, 6];
                        case 5:
                            _c = null;
                            _d.label = 6;
                        case 6:
                            type = _c;
                            return [4 /*yield*/, (record === null || record === void 0 ? void 0 : record.CalculateName(api))];
                        case 7:
                            name = _d.sent();
                            return [4 /*yield*/, bruce_maps_widget_1.EntityAttachment.GetByEntityID(api, entityId)];
                        case 8:
                            attachments = _d.sent();
                            attachments.sort(function (a, b) { return a.DisplayOrder - b.DisplayOrder; });
                            defaultPhoto = attachments.find(function (x) { return x["EntityAttachmentType.ID"] == "photo"; });
                            console.log('SelectedData', record, type, name, defaultPhoto);
                            console.log('defaultPhoto', defaultPhoto === null || defaultPhoto === void 0 ? void 0 : defaultPhoto.ClientFile.getDownloadURL(api));
                            this.SelectedData({
                                record: record,
                                type: type,
                                photoUrl: defaultPhoto === null || defaultPhoto === void 0 ? void 0 : defaultPhoto.ClientFile.getDownloadURL(api),
                                name: name
                            });
                            return [2 /*return*/];
                    }
                });
            });
        };
        AppTestEntityData = __decorate([
            component_1.Component({ name: "app-test-entity-data", template: html })
        ], AppTestEntityData);
        return AppTestEntityData;
    }(component_1.AbstractComponent));
    exports.AppTestEntityData = AppTestEntityData;
});

//# sourceMappingURL=app-test-entity-data.js.map
