import {observable, action, computed} from 'mobx';
import { LookoAPI } from '../core/LookoAPI';
import axios, {AxiosResponse} from 'axios';
import { string } from 'prop-types';
import { AccessKey, AccessKeyStore } from './AccessKeyStore';
import { stores } from './index';


export interface Result {
    DataHash: string;
    UriHash: string;
    URI: string;
    RefererUri: string;
    Uri: string;
    Title: string;
    Description: string;
    Tags: Array<string>,
    Created: string;
    PageSize: string;
    Sequence: number;
    [propName: string]: any;
}

export interface Pager {
    count : number;
    offset : number;
    query : string;
};

interface ServerData extends Account {
    Results: Result[],
    QueryText: "tag:Environment",
    SubsetCount: 0,
    TotalWorkspaceResults: 31,
    PageNumber: 0,
    PageSize: 0,
}

export class ResultStore {

    pagerDefaults = {
        count: 10,
        offset : 0,
        query : ""
    };

    resultMap = observable.map<string, Result>({});
    @observable accessKeyID : string = null;
    @observable pager : Pager = {
        ...this.pagerDefaults
    };

    @action
    public setAccessKey(accessKeyID? : string) {
        this.accessKeyID = accessKeyID;
        
        this.pager = {
            ...this.pagerDefaults
        };
    }

    @action.bound
    public fetch(pager? : Pager) {
        LookoAPI.getResults<ServerData>(this.accessKeyID, pager || this.pager)
            .then(this.fetchAccountSuccess, this.fetchAccountFailure)
    }

    @action
    public next() {
        let pager = this.pager;

        this.fetch({ 
            ...pager,
            offset : pager.offset + pager.count 
        });
    }
    
    @action
    public prev() {
        let pager = this.pager;

        this.fetch({ 
            ...pager, 
            offset : pager.offset - pager.count 
        });
    }

    @action.bound
    public fetchAccountSuccess( resp : AxiosResponse<ServerData>) {
        resp.data.Results.forEach( (result : Result) => {
            this.resultMap.set(result.UriHash, result);
        })
    }

    @action.bound
    public fetchAccountFailure( error : any ) {

    }
}