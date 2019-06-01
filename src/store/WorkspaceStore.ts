import {observable, action, computed, IObservableArray, ObservableMap} from 'mobx';
import { LookoAPI } from '../core/LookoAPI';
import axios, {AxiosResponse} from 'axios';
import { AccountResponse } from './AccountStore';
import { stores } from './index';
import { AccessKey } from '@store/AccessKeyStore';
import { Observer } from 'mobx-react';

export interface Workspace {
    WorkspaceId?: string;
    Name?: string;
    Description?: string;
    QueryText?: string;
    Created?: string;
    IsActive?: boolean;
    IsWellknown?: boolean;
    ResultCount?: number;
    Revision?: number;
    AccessKeys?: (string|AccessKey)[],
    [propName: string]: any;
}

export class WorkspaceStore {
    workspaceMap = observable.map<string, Workspace>({});
    @observable thing: string = "aaaaaa";

    @action.bound
    public addWorkspace(workspace:Workspace) {
        this.thing = "bbbbbb";
        this.workspaceMap.set(workspace.WorkspaceId, workspace);
    }


    @computed
    public get workspaces() {
        return this.workspaceMap;
    }
}