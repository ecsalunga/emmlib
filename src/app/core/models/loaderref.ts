import { ComponentRef } from '@angular/core';

export class LoaderRef {
    private _selector: string;
    private _isLoaded: boolean;

    public Component: ComponentRef<any>;

    constructor(selector: string, isLoaded: boolean = false, component?: ComponentRef<any>) {
        this._selector = selector;
        this._isLoaded = isLoaded;
        this.Component = component;
    }

    public get Selector(): string {
        return this._selector;
    }

    public get IsLoaded(): boolean {
        return this._isLoaded;
    }
}