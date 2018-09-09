import { ComponentFactory, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';
import { LoaderRef } from '../models/loaderref';

export class LoaderHelper {
    private _viewChild: ViewContainerRef;
    private _components: Array<ComponentRef<any>>;
    private _factories: Array<ComponentFactory<any>>;
    
    constructor(private resolver: ComponentFactoryResolver) {
        this._components = new  Array<ComponentRef<any>>();
        this._factories = Array.from(this.resolver['_factories'].values());
    }

    public SetContainer(viewChild: ViewContainerRef) {
        this._viewChild = viewChild;
    }

    public LoadComponent(selector: string): LoaderRef {
        this.clearComponents();
        return this.loadFactory(selector);
    }

    public LoadComponentToView(selector: string, viewChild: ViewContainerRef): LoaderRef {
        let factory = <ComponentFactory<any>> this._factories.find((item: ComponentFactory<any>) => item.selector === selector);
        if(factory) {
            let component = this.resolver.resolveComponentFactory(factory.componentType);
            let created = viewChild.createComponent(component);
            return new LoaderRef(selector, true, created);
        }
        else
            return new LoaderRef(selector);
    }

    public LoadComponents(selectors: Array<string>): Array<LoaderRef>{
        this.clearComponents();
        let components = new Array<LoaderRef>();
        selectors.forEach(selector => {
            components.push(this.loadFactory(selector));
        });

        return components;
    }

    private loadFactory(selector: string): LoaderRef {
        if(this._viewChild != null)
        {
            let factory = <ComponentFactory<any>> this._factories.find((item: ComponentFactory<any>) => item.selector === selector);
            if(factory) {
                let component = this.resolver.resolveComponentFactory(factory.componentType);
                let created = this._viewChild.createComponent(component);
                this._components.push(created);
                return new LoaderRef(selector, true, created);
            }
            else
                return new LoaderRef(selector);
        }
        else {
            console.error("emmlib-outlet not found");
            return new LoaderRef(selector);
        }
    }

    private clearComponents() {
        this._components.forEach(component => {
            component.destroy();
        });
    }
}