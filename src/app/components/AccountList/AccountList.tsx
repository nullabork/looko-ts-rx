
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
  'workspaceStore'  
)
@observer
export class AccountList extends Component<IAccountProps> {
  render() {
    let { workspaceMap } = this.props.workspaceStore;
    return (
      <>
        {
          [...workspaceMap.values()].map((v) => (
            <div key={v.WorkspaceId}>
              <div className="c-content-row c-content-row--short">{ v.Name }</div>
            </div>  
          ))
        }
      </>
    );
  }
};