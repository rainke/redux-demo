import {createStore} from 'redux';
import todoApp from './reducers';
import {loadState, saveState} from './utils/localStorage';
import throttle from 'lodash/throttle';

const configureStore = () => {
  const persistState = loadState();
  const store = createStore(todoApp, persistState);
  store.subscribe( throttle(() => {
    saveState(store.getState());
  }, 10000));
  return store;
};
export default configureStore;
