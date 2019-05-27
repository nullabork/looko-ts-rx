import {observable, action, computed} from 'mobx';
import { LookoAPI } from '../core/LookoAPI';
import axios, {AxiosResponse} from 'axios';
import { string } from 'prop-types';
import { AccessKey, AccessKeyStore } from './AccessKeyStore';
import { stores } from './index';


interface Account {
    Name?: string;
    Created?: string;
    IsActive?: boolean;
}

interface ServerData extends Account {
    AccessKeys: AccessKey[];
}

export interface AccountResponse {
    account: ServerData
}

export class AccountStore {

    @observable account : Account = null;

    @computed
    public get AccessKeys() {
        return stores.accessKeyStore.accesskeyMap.values();
    }

    @action
    public fetchAccount(name : string) {
        LookoAPI.getAccount<ServerData>(name)
            .then(this.fetchAccountSuccess, this.fetchAccountFailure)
    }

    @action.bound
    public fetchAccountSuccess( resp : AxiosResponse<ServerData>) {
        // console.log(resp.data);
        let { AccessKeys } = resp.data;
        let { accessKeyStore } = stores;

        delete resp.data.AccessKeys;
        this.account = resp.data as Account;
        
        accessKeyStore.addAccessKeys(AccessKeys);
    }

    @action.bound
    public fetchAccountFailure( error : any ) {

    }
}