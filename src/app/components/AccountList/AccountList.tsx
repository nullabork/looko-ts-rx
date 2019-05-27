
import * as React from 'react';
import { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { AccessKeyStore } from '@store/AccessKeyStore';
import { WorkspaceStore } from '@store/WorkspaceStore';

import { stores } from '@store/index';

import { ReactNode } from 'react';
import { Workspace } from '../../../store/WorkspaceStore';


interface IAccountProps {
  account?: string;
  accessKeyStore?: AccessKeyStore;
  workspaceStore?: WorkspaceStore;
  children? : ReactNode;
}

@inject(
  'userInterfaceStore',
  'workspaceStore'  
)
@observer
export class AccountList extends Component<IAccountProps> {
  render() {

    const { workspaceMap } = this.props.workspaceStore!;

    return (
      <>
        {
          this.props.workspaceStore.workspaceMap.forEach( (v:Workspace, k:string) => (
            <div key={v.WorkspaceId}>
              { v.Name }
            </div>  
          ))
        }
      </>
    );
  }
};