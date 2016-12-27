import {createStore, applyMiddleware, compose} from 'redux';
import todoApp from './reducers';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
// import {loadState, saveState} from './utils/localStorage';
// import throttle from 'lodash/throttle';

/*const logger = store => next => {
  
  if (!console.group) {
    return next;
  }
  return (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action); 
    const returnValue = next(action);
    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return returnValue;

   };
};
*/
/*const promise = () => next => action => {
  if (typeof action.then === 'function') {
    return action.then(next);
  }
  return next(action)
};
*/
/*const warpDispatchWithMiddlewares = (store, middlewares) => {
  middlewares.forEach( middleware => {
     store.dispatch = middleware(store)(store.dispatch);
  })
}
*/
const configureStore = () => {
  const persistState = undefined;//loadState();
  // const store = createStore(todoApp, persistState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middlewares = [promise];

  if(process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());

  }
  // warpDispatchWithMiddlewares(store, middlewares);

  return createStore( todoApp,persistState, composeEnhancers(applyMiddleware(...middlewares)));

};
export default configureStore;
