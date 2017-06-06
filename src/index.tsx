import './index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';

import { ConnectedRouter } from 'react-router-redux';
import configureStore, {history} from './configureStore';
import UserSearch from './containers/UserSearch';
import ReposByUser from './containers/ReposByUser';
import Admin from './containers/Admin';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <div>
            <Route exact={true} path="/" component={UserSearch} />
            <Route path="/repos/:user" component={ReposByUser} />
            <Route path="/admin" component={Admin} />user
        </div>
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#app')
);
