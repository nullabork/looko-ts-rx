import axios from 'axios';
import { App } from '@conf/App';
import { AccessKey } from '@store/AccessKeyStore';

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

  
}