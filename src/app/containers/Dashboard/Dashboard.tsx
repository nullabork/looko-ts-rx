
import * as React from 'react';
import { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { UserInterfaceStore, Scheme } from '@store/UserInterfaceStore';
import { stores } from '@store/index';

import { PanelPane } from '@components/PanelPane';
import { AccountPanel } from '@components/Panel';
import { AccountList } from '@components/AccountList';


interface IDashboardProps {
  account?: string;
  userInterfaceStore?: UserInterfaceStore;
}

@inject('userInterfaceStore')
@observer
export class Dashboard extends Component<IDashboardProps> {
  
  componentDidMount() {
    stores.accountStore.fetchAccount(this.props.account);
    console.log(stores.workspaceStore);
  }

  render() {
    const { scheme } = this.props.userInterfaceStore!;

    return (
      <PanelPane scheme={Scheme.DARK}>
        <AccountPanel>
        <>
          asd
          <AccountList />
        </>
        </AccountPanel>
      </PanelPane>
    );
  }
};