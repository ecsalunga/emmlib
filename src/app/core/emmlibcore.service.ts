import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { LoadHelper, StampHelper } from './helpers';
import { LoadRef, Codes, Update } from './models';
import { DelayCall } from './decorators';

@Injectable()
export class EmmLibCoreService {
    public Changed: Observable<Update>;

    private _isCoreLoaded: boolean;
    private _updater: Subject<Update>;
    private _loader: LoadHelper;
    private _stamp: StampHelper;

    constructor(private resolver: ComponentFactoryResolver) { 
        this._updater = new Subject<Update>();
        this.Changed = this._updater.asObservable();

        this._loader = new LoadHelper(resolver);
        this._stamp = new StampHelper();
    }

    public get IsCoreLoaded(): boolean {
        return this._isCoreLoaded;
    }

    public SetComponents(viewChild: ViewContainerRef, imageSelector: HTMLInputElement) {
        this._loader.SetMainContainer(viewChild);
        this._loader.SetImageSelector(imageSelector);

        this._isCoreLoaded = true;
        this.Publish(new Update(Codes.CoreLoaded, this._isCoreLoaded));
    }

    public SelectImage() {
        this._loader.SelectImage();
    }

    public Publish(update: Update) {
        if(this._updater != null)
            this._updater.next(update);
    }

    public Load(selector: string): LoadRef;
    public Load(selectors: Array<string>): Array<LoadRef>;
    public Load(selector: string, viewChild: ViewContainerRef): LoadRef;
    public Load(param: string | Array<string>, viewChild?: ViewContainerRef): any
    {
        if(param instanceof Array)
            return this._loader.LoadComponents(param);
        else if(viewChild != null)
            return this._loader.LoadComponentToView(param, viewChild);
        else
            return this._loader.LoadComponent(param);
    }

    public get Stamp(): StampHelper {
        return this._stamp;
    }
}