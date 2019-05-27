import React, { ReactNode } from 'react';

// Create the containers interface
interface IProps {
  children? : ReactNode;
  onSelect? : { () : void };
}

export const PanelContentRow: React.SFC<IProps> = (props : IProps) => {
  return (
    <div className='c-content-row' onClick={ () => { props.onSelect && props.onSelect() } }>
        { props.children }
    </div>
  );
}
