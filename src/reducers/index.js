import {combineReducers} from 'redux';
import byId from './byId';
import creatList from './creatList';

const idsByFilter = combineReducers({
  all: creatList('all'),
  active: creatList('active'),
  completed: creatList('completed'),
});

const todos = combineReducers({byId, idsByFilter});

export default todos;

export const getVisibleTodos = (state, filter) => {
  const ids = state.idsByFilter[filter].ids;
  return ids.map(id => state.byId[id]);
}

export const getIsFetching = (state, filter) =>
  state.idsByFilter[filter].isFetching;

export const getErrorMessage = (state, filter) =>
  state.idsByFilter[filter].errorMessage;