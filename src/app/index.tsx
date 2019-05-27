
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { stores } from '@store/index';
import { Dashboard } from '@containers/Dashboard';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';

const Root: React.SFC = props => {
  return (
    <Provider {...stores}>
      <Router basename={'/'}>
        <div>
            <Route exact path="/dashboard/:account" component={(props :any) => (
              <Dashboard  account={props.match.params.account}  />
            )} />
            <Route exact path="/dashboard" component={(props :any) => <Dashboard /> } />
        </div>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById(
'root'
) as HTMLElement);