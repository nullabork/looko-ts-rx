
import React, { ReactNode } from 'react';

// Create the containers interface
interface IProps {
  children? : ReactNode;
}

export const PanelHeader: React.SFC<IProps> = (props : IProps) => {
  return (
    <div className='c-panel__header'>
        { props.children }
    </div>
  );
}

