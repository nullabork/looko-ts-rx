import {observable, action, computed, IObservableArray} from 'mobx';

export enum Scheme {
    DARK   = "dark",
    LIGHT  = "light",
    BLUE   = "blue",
    PURPLE = "purple",
    CUSTOM = "custom"
}

export interface IPanel {
    scheme?       : Scheme;
    expanded?     : boolean;
    collapsed?    : boolean;
    hidden?       : boolean;
}

export interface IPanel {
    scheme?       : Scheme;
    expanded?     : boolean;
    collapsed?    : boolean;
    hidden?       : boolean;
}

export interface IUserInterfaceStore {
    scheme? : Scheme;
    panels? : IObservableArray<IPanel>
}

export class UserInterfaceStore implements IUserInterfaceStore {
    @observable scheme = Scheme.DARK;
    @observable panels = observable.array<IPanel>([
        {
            scheme  : Scheme.DARK,

        }
    ])


    @computed 
    public get SchemeModifier():string {
        return `u-theme-${this.scheme.valueOf()}`;
    }

    @action.bound
    public setScheme(scheme:Scheme):void {
        this.scheme = scheme;
    }
}