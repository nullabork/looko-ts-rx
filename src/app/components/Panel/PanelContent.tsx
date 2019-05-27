
import React, { ReactNode } from 'react';

// Create the containers interface
interface IProps {
  children? : ReactNode;
  scroll? : boolean;
}

export const PanelContent: React.SFC<IProps> = (props : IProps) => {
  return (
    <div className='c-panel__content'>
      <div className='c-panel__content-inner'>
        { props.children }
      </div>
    </div>
  );
}

