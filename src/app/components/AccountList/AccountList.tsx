
import * as React from 'react';
import { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { AccessKeyStore } from '@store/AccessKeyStore';
import { WorkspaceStore } from '@store/WorkspaceStore';

import { stores } from '@store/index';

import { ReactNode } from 'react';
import { Workspace } from '../../../store/WorkspaceStore';
import { UserInterfaceStore } from '../../../store/UserInterfaceStore';


interface IAccountProps {
  account?: string;
  accessKeyStore?: AccessKeyStore;
  workspaceStore?: WorkspaceStore;
  userInterfaceStore?: UserInterfaceStore;
  children? : ReactNode;
}

@inject(
  'workspaceStore',
  'userInterfaceStore',
  'accessKeyStore'
)
@observer
export class AccountList extends Component<IAccountProps> {
  render() {
    let aks = this.props.accessKeyStore;
    let userInterfaceStore = this.props.userInterfaceStore;

    return (
      <>
        {
          [...aks.accesskeyMap.values()].map((v) => {
            let workspace = aks.getWorkspace(v.Workspace as any as string);

            return (
              <div key={workspace.WorkspaceId} onClick={ (e) => {
                  userInterfaceStore.addWorkspaceGroup(v.Id);
                }}>
                <div className="c-content-row c-content-row--short">{ v.Name }</div>
              </div>
            )
          })
        }
      </>
    );
  }
};