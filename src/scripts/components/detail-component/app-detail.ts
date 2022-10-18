import * as html from "./app-detail.html";
import "./app-detail.css";

import { IAbstractComponentParams, Component, AbstractComponent } from "../../common/decorator/component";
import { KoUtils } from "../../common/utils/ko-utils";
import { IBranchData } from "../entity-detail-component/app-entity-detail-component";
import { ILabelParams } from "../label-component/app-label";
import { IValueParams } from "../value-component/app-value";

export interface IDetailComponentParams extends IAbstractComponentParams {
    value: KnockoutObservable<IBranchData> | IBranchData;
}

@Component({ name: "app-detail-component", template: html })
export class AppDetail extends AbstractComponent<IDetailComponentParams> {
    branch: IBranchData;
    hdrTabs: string[];
    tabs: string[];
    hdrTrailingTabs: string[];
    trailingTabs: string[];
    constructor(params: IDetailComponentParams) {
        super(params);
        // If it's an observable, we want to detect the change and reload the component.
        // Or do something else, up to your and your component's design!
        if (params.element["value"] != null && ko.isObservable(params.element["value"] )) {
            this.addDisposable(params.element["value"].subscribe((value) => {
                this.init(value);
            }));
        }
        // We want to guarantee a non-observable value so we use the 'GetValue' util.
        this.init(KoUtils.GetValue(params.element["value"]));
    }
    private init(value: IBranchData) {
        console.log(value);
        this.branch = value;
        this.hdrTabs = [];
        this.tabs = [];
        this.hdrTrailingTabs = [];
        this.trailingTabs = [];
        if (this.branch.depth > 0) {
            for(let i = 0; i < this.branch.depth; i++) {
                this.tabs.push(" ");
            }
        }

        if (this.tabs.length < this.branch.maxDepth) {
            const xTab = this.branch.maxDepth - this.tabs.length;
            for(let i = 0; i < xTab; i++) {
                this.trailingTabs.push(" ");
            }
        }

        if (this.branch.depth > 1) {
            for(let i = 0; i < this.branch.depth - 1; i++) {
                this.hdrTabs.push(" ");
            }
        }
        if (this.hdrTabs.length < this.branch.maxDepth - 1) {
            const xTab = this.branch.maxDepth - 1 - this.hdrTabs.length;
            for(let i = 0; i < xTab; i++) {
                this.hdrTrailingTabs.push(" ");
            }
        }
    }

    leafSchemas () {
        if (this.branch.leafSchemas && this.branch.leafSchemas.length > 0) {
            return this.branch.leafSchemas;
        }
        return [];
    }

    BranchLabel(): ILabelParams {
        return {
            label: this.branch.branchSchema.Name,
            title: this.branch.branchSchema.Description
        };
    }

    BranchValue(): IValueParams {
        if (this.branch.data &&
            this.branch.branchSchema.Type !== "Structure") {
            return {
                schema: this.branch.branchSchema,
                value: this.branch.data[this.branch.branchSchema.Key]
            };
        }
        return {
            schema: { Key: ""},
            value: ""
        };
    }

    LeafLabel(leafKey: string): ILabelParams {

        if (this.branch.data[this.branch.branchSchema.Key][leafKey]) {
            const leafIdx = this.branch.leafSchemas.findIndex((leaf) => leaf.Key === leafKey);
            return {
                label:  this.branch.leafSchemas[leafIdx].Name,
                title: this.branch.leafSchemas[leafIdx].Description
            };
        }
        return {
            label: "",
            title: ""
        };
    }

    LeafValue(leafKey: string): IValueParams {
        if (this.branch.data[this.branch.branchSchema.Key][leafKey]) {
            const leafIdx = this.branch.leafSchemas.findIndex((leaf) => leaf.Key === leafKey);
            return {
                schema: this.branch.leafSchemas[leafIdx],
                value: this.branch.data[this.branch.branchSchema.Key][leafKey]
            };
        }
        return {
            schema: { Key: ""},
            value: ""
        };
    }
}