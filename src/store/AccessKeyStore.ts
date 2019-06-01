import {observable, action, computed, IObservableArray} from 'mobx';
import { LookoAPI } from '../core/LookoAPI';
import axios, {AxiosResponse} from 'axios';
import { AccountResponse } from './AccountStore';
import { stores } from './index';
import { Workspace } from './WorkspaceStore';


export interface AccessKey {
    Name? : string;
    Id? : string;
    AccountName? : string;
    Expiry? : string;
    Created? : string;
    IsWellknown? : boolean;
    Permissions? : number;
    IsActive? : boolean;
    Revision?: number;
    CreatedDate? : Date;
    Selected? : boolean;

    // relationship
    Workspace : Workspace|string
}

export interface AccessKeyData extends AccessKey {
    
}

export interface AccessKeyResponse {
    accessKey: AccessKey
}

export class AccessKeyStore {

    accesskeyMap = observable.map<string, AccessKey>({});

    public getAccessKeys(ids : string[]) {
        return computed( () => ids.map( id => this.accesskeyMap.get(id)));
    }

    @action
    public addAccessKeys( AccessKeys: AccessKey[]) {
        let { workspaceMap } =  stores.workspaceStore;
        let { accesskeyMap } = this;

        //gonna update everything
        accesskeyMap.clear();        
        workspaceMap.clear();

        AccessKeys.forEach( (accessKey) => {
            this.addAccessKey(accessKey);
        });
    }

    @action
    public addAccessKey( accessKey: AccessKey) {

        let { accesskeyMap } = this;

        accesskeyMap.set(accessKey.Id, accessKey);
        
        
        // NO !!!
        if(! accessKey.Workspace) return;
        let workspace = <Workspace>accessKey.Workspace;

        // We dont want accessKey as AccessKeyData any more
        accessKey.Workspace = workspace.WorkspaceId;

        //we need some workspaces in out workspaces
        stores.workspaceStore.addWorkspace(workspace);
        
        //woah our access keys that workspaces also .... have acess keys
        if(!workspace.AccessKeys || !workspace.AccessKeys.length) return;
        
        workspace.AccessKeys.map( (workspace_accesskey : AccessKey ) => {
            this.addAccessKey(workspace_accesskey);
            return workspace_accesskey.Id;
        });
    }

    @action
    public fetchAccessKeys() {
        LookoAPI.getAccessKeys<AccountResponse>(stores.accountStore.account.Name)
            .then(this.fetchAccessKeysSuccess, this.fetchAccessKeyFailure)
    }

    @action.bound
    public fetchAccessKeysSuccess({ data } : AxiosResponse<AccountResponse>) {
        let { AccessKeys } = data.account;
        this.addAccessKeys(AccessKeys);
    }


    @action.bound
    public fetchAccessKeyFailure( error : any ) { }


    @action
    public updateAccessKey(accessKey: AccessKey) {
        let ak : AccessKey = this.accesskeyMap.get(accessKey.Id)
        
        LookoAPI.updateAccessKey<AccessKey,AccessKeyResponse>(ak)
            .then(this.updateAccessKeySuccess, this.updateAccessKeyFailure)
    }

    @action.bound
    public updateAccessKeySuccess({ data } : AxiosResponse<AccessKeyResponse>) {
        this.addAccessKey(data.accessKey);
    }


    @action.bound
    public updateAccessKeyFailure( error : any ) { }
}