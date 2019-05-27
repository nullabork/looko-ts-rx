
import React, { ReactNode } from 'react';
import { IPanel } from '@store/UserInterfaceStore';

// Create the containers interface
export interface IPanelPane extends IPanel{
  children? : ReactNode;
}

export const PanelPane: React.SFC<IPanelPane> = (props : IPanelPane) => {
  return (
    <div className='c-horizontal-panels c-horizontal-panels--featured'>
      { props.children }
    </div>
  );
}

