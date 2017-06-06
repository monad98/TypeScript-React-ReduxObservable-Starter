/**
 * Created by monad on 6/5/17.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';
import rootEpic from './epics';
import createHistory from 'history/createBrowserHistory';

const epicMiddleware = createEpicMiddleware(rootEpic);
declare const window: any;

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory() as any;

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    {},
    composeEnhancers(
      applyMiddleware(
        epicMiddleware,
        routerMiddleware(history)
      )
    )
  );
}
