
import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux'
import {ThunkDispatch} from 'redux-thunk';
import { IAppState } from '@store/Store';

import { IUIState, IPanel } from '@reducers/UIReducer';
import { setUIState } from '@actions/UIActions';

// Create the containers interface
interface IProps {
  uiState: IUIState;
  panel : IPanel;
}


let mapStateToProps = (store: IAppState) => { uiState: store.uiState   };
let mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => { };


@(connect(mapStateToProps, mapDispatchToProps) as any)
export class Panel extends React.Component<IProps> {
  public render() {
    const { uiState } = this.props;
    return (
      <div className="name-container">
        aa
      </div>
    );
  }
}
