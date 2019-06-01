
import React, { ReactNode } from 'react';

// Create the containers interface
interface IProps {
  children? : ReactNode;
  title?: string;
  subTitle?: string;
}

export const PanelHeader: React.SFC<IProps> = (props : IProps) => {
  return (
    <div className='c-panel__header'>
        <h2>{ props.title }</h2>
        <h3>{ props.subTitle }</h3>
        { props.children }
    </div>
  );
}

