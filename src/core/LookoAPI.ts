import axios from 'axios';
import { App } from '@conf/App';
import { AccessKey } from '@store/AccessKeyStore';
import { Pager } from '@store/ResultStore';
import build from 'build-url';

export class LookoAPI {
  public static getAccount<T>( name : string ) {    
    return axios.get<T>(`${App.api}/accounts/${name}`);
  }

  public static getAccessKeys<T>( name : string ) {    
    return axios.get<T>(`${App.api}/accounts/${name}`);
  }

  public static updateAccessKey<TData, TRepsponse>( data : TData ) {    
    return axios.patch<TRepsponse>(`${App.api}/accesskey`, data);
  }

  public static getResults<TRepsponse>(accessKeyID: string, pager : Pager ) {
    const url = build(App.api, {
      path: `/accesskey/${accessKeyID}/results`,
      queryParams: pager as any
    });

    return axios.get<TRepsponse>(url);
  }

}