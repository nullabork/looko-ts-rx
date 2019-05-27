import {observable, action, computed, IObservableArray, ObservableMap} from 'mobx';
import { LookoAPI } from '../core/LookoAPI';
import axios, {AxiosResponse} from 'axios';
import { AccountResponse } from './AccountStore';
import { stores } from './index';
import { AccessKey } from '@store/AccessKeyStore';

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

export interface WorkspaceData extends AccessKey {
    AccessKeys : AccessKey[]
}

export class WorkspaceStore {
    workspaceMap = observable.map<string, Workspace>({});

    @computed
    public get workspaces() : ObservableMap<string, Workspace> {
        return computed( () => this.workspaceMap ) as any as ObservableMap<string, Workspace>;
    }
}