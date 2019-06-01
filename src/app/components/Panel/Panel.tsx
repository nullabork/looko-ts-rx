
import React, { ReactNode } from 'react';
import { IPanel } from '@store/UserInterfaceStore';
import cn from 'classnames';

// Create the containers interface
interface IProps extends IPanel{
  children? : ReactNode;
  featured? : boolean;
}

export const Panel: React.SFC<IProps> = (props : IProps) => {

  let className = cn([
    "c-panel",
    { "c-panel--featured" : props.featured }
  ]);

  return (
    <div className={className}>
      { props.children }
    </div>
  );
}

