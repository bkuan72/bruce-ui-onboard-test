export interface IDisposable {
    dispose(): void;
}

export class Disposable implements IDisposable {
    private _disposable: IDisposable[] = [];
    private _disposed: boolean = false;


    public addDisposable(disposable: IDisposable): void {
        this._disposable.push(disposable);
    }

    public dispose(): void {
        this._disposable.forEach(disposable => {
            disposable.dispose();
        });

        this._disposable = [];
        this._disposed = true;
    }

    public isDisposed(): boolean {
        return this._disposed;
    }
}

export class CDisposableFunction implements IDisposable {
    private _fn: any;


    constructor(fn: any) {
        this._fn = fn;
    }

    dispose(): void {
        this._fn();
    }
}