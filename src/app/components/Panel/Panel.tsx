
import React, { ReactNode } from 'react';
import { IPanel } from '@store/UserInterfaceStore';

// Create the containers interface
interface IProps extends IPanel{
  children? : ReactNode;
}

export const Panel: React.SFC<IProps> = (props : IProps) => {
  return (
    <div className='c-panel'>
      { props.children }
    </div>
  );
}

