
import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux'
import thunk, {ThunkDispatch} from 'redux-thunk';
import { IAppState } from '@store/Store';

import { IUIState } from '@reducers/UIReducer';
import { setUIState,ISetUIAction, UIActionTypes } from '@actions/UIActions';

interface IProps {
  uiState?: IUIState;
  setDarkMode?: () => Promise<ISetUIAction>;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return { setDarkMode: () => dispatch(setUIState()) } 
};

const mapStateToProps = (store: IAppState) => { 
  return { uiState: store.uiState }; 
};

@(connect( mapStateToProps, mapDispatchToProps ) as any)
export class Test extends React.Component<IProps> {
  public render() {
    const { uiState, setDarkMode } = this.props;
    return (
      <div className="name-container">
        { uiState.scheme }

          <button onClick={() => 
            {
              setDarkMode()
            }
          }>click</button>
      </div>
    );
  }
}
