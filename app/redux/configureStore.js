import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import RootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({ collapsed: true });

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        sagaMiddleware,
        logger,
        // ... other middlewares ...
      ),
    ),
  );
  sagaMiddleware.run(RootSaga)

  return store;
}