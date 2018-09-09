import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

import { LoaderHelper, StampHelper } from './helpers';
import { Delay } from './decorators/delay';
import { LoaderRef } from './models/loaderref';

@Injectable()
export class EmmlibService {
    private _loader: LoaderHelper;
    private _stamp: StampHelper;

    private _loaderState: string;

    constructor(private resolver: ComponentFactoryResolver) {
        this._loader = new LoaderHelper(resolver);
        this._stamp = new StampHelper();
    }

    public set Container(viewChild: ViewContainerRef) {
        this._loader.SetContainer(viewChild);
    }

    public get LoaderState(): string {
        return this._loaderState;
    }

    public get Stamp(): StampHelper {
        return this._stamp;
    }

    public Load(selector: string): LoaderRef;
    public Load(selectors: Array<string>): Array<LoaderRef>;
    public Load(selector: string, viewChild: ViewContainerRef): LoaderRef;
    public Load(param: string | Array<string>, viewChild?: ViewContainerRef): any {
        if (param instanceof Array)
            return this._loader.LoadComponents(param);
        else if (viewChild != null)
            return this._loader.LoadComponentToView(param, viewChild);
        else {
            window.scroll(0, 0);
            this._loaderState = "out";
            this.showLoader();
            return this._loader.LoadComponent(param);
        }
    }

    @Delay(1)
    private showLoader() {
        this._loaderState = "in";
    }
}