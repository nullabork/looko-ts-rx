import React, { ReactNode } from 'react';

// Create the containers interface
interface IProps {
  children? : ReactNode;
}

export const PanelFooter: React.SFC<IProps> = (props : IProps) => {
  return (
    <div className='c-panel__footer'>
        { props.children }
    </div>
  );
}
