import {observable, action, computed, IObservableArray} from 'mobx';
import { AccessKey } from './AccessKeyStore';
import { stores, resultStores } from './index';
import { ResultStore } from './ResultStore';

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


export interface WorkspaceGroup extends IPanel {
    sort: number;
    accessKeyID: string;
}

export class UserInterfaceStore {
    @observable scheme = Scheme.DARK;
    @observable workspaceGroups = observable.map<string,WorkspaceGroup>([])


    @computed 
    public get SchemeModifier():string {
        return `u-theme-${this.scheme.valueOf()}`;
    }

    @computed 
    public get panels():string {
        return `u-theme-${this.scheme.valueOf()}`;
    }

    @action
    public addWorkspaceGroup(accessKeyID: string){
        resultStores.set(accessKeyID, new ResultStore(accessKeyID));
        this.workspaceGroups.clear();
        this.workspaceGroups.set(accessKeyID, {
            sort: this.workspaceGroups.size,
            accessKeyID
        });
    }

    @action.bound
    public setScheme(scheme:Scheme):void {
        this.scheme = scheme;
    }
}