
import * as React from 'react';
import * as ReactDOM from 'react-dom';

/* Make the store available to all container 
components in the application without passing it explicitly */
import { Provider } from 'react-redux';

// Store type from Redux
import { Store } from 'redux';

// Import the store function and state
import configureStore, { IAppState } from './store/Store';
import { setUIState } from '@actions/UIActions';

import { Test } from '@components/Test';



interface IProps {
  store: Store<IAppState>;
}

const Root: React.SFC<IProps> = props => {
    return (
      <Provider store={props.store}>
        <Test />
      </Provider>
    );
  };


const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById(
'root'
) as HTMLElement);