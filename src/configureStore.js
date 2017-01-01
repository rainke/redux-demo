import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import todoApp from './reducers';
// import promise from 'redux-promise';
import createLogger from 'redux-logger';

// const thunk = store => next => action => 
//   typeof action === 'function' ?
//     action(store.dispatch, store.getState) :
//       next(action);

const configureStore = () => {
  const persistState = undefined;//loadState();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middlewares = [thunk];

  if(process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }
  return createStore( todoApp,persistState, composeEnhancers(applyMiddleware(...middlewares)));
};

export default configureStore;
