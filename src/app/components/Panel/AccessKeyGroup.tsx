
import React, { ReactNode } from 'react';
import { IPanel } from '@store/UserInterfaceStore';
import cn from 'classnames';
import { Provider } from 'mobx-react';
import { stores, resultStores } from '@store/index';
import { AccessKey } from '../../../store/AccessKeyStore';

// Create the containers interface
interface IProps extends IPanel{
  children? : ReactNode;
  accessKeyID? : string;
}

    
export const Panel: React.SFC<IProps> = (props : IProps) => {
  let allStores = {...stores, resultsStore : resultStores.get(props.accessKeyID)};
  
  return (
  <Provider {...allStores}>
      <div>
        { props.children }
      </div>
  </Provider>)
}

