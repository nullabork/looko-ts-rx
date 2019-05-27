
import * as React from 'react';
import { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { UserInterfaceStore, Scheme } from '@store/UserInterfaceStore';
import { stores } from '@store/index';

import { Panel } from './Panel';
import { PanelContent } from './PanelContent';
import { ReactNode } from 'react';


interface IAccountProps {
  userInterfaceStore?: UserInterfaceStore;
  children? : ReactNode;
}

@inject('userInterfaceStore')
@observer
export class AccountPanel extends Component<IAccountProps> {
  render() {

    const { scheme } = this.props.userInterfaceStore!;

    return (
      <Panel scheme={scheme}>
        <PanelContent scroll={true} >
          { this.props.children }
        </PanelContent>
      </Panel>
    );
  }
};