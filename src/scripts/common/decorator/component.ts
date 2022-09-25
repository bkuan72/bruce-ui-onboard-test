import { Disposable } from "./../utils/disposable";

export interface IComponentParams {
    name: string;
    template: string;
}

export function Component(params: IComponentParams) {
    return (target: any): any => {
        // This stops knockout from spamming logs about empty templates.
        if (!params.template) {
            params.template = "<!-- NO TEMPLATE PROVIDED -->";
        }

        ko.components.register(params.name,
            {
                viewModel:
                {
                    createViewModel: function(params: IAbstractComponentParams, componentInfo) {
                        params = params || <IAbstractComponentParams> {};
                        params.element = <HTMLElement> componentInfo.element;
                        return new (<any> target)(params);
                    }
                },
                template: `<!-- ko template: {afterRender: $component.rendered.bind($component)} -->${params.template}<!-- /ko -->`
            });
        return <any> target;
    };
}

export interface IAbstractComponentParams {
    element: HTMLElement;
}

export class AbstractComponent<T extends IAbstractComponentParams> extends Disposable {
    // General use loading indicator for components.
    public IsLoading: KnockoutObservable<boolean> = ko.observable(false);

    // Set to true after first render.
    public hasRendered: boolean = false;

    // The component HTML element.
    protected element: HTMLElement;


    constructor(params: IAbstractComponentParams) {
        super();
        this.element = params.element;
    }

    /**
     * Called on component HTML render.
     */
    public rendered(): void {
        this.hasRendered = true;
    }

    /**
     * Pass an array of knockout observables and a callback to trigger when any of the given observables get updated.
     * @param observables 
     * @param callback 
     */
    public subscribeObsArray(observables: KnockoutObservable<any>[], callback: () => void): void {
        if (!observables || !callback) {
            return;
        }

        for (let i = 0; i < observables.length; i++) {
            let obs = observables[ i ];
            this.addDisposable(obs.subscribe(() => callback()));
        }
    }
}