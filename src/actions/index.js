import * as api from '../api';
import {getIsFetching} from '../reducers';
import {normalize} from 'normalizr';
import * as schema from './schema';

export const fetchTodos = filter => (dispatch, getState) => {
  if(getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }
  dispatch({
    type: 'FETCH_TODOS_REQUEST',
    filter
  });
  return api.fetchTodos(filter).then(
    response => {
      dispatch({
        type:'FETCH_TODOS_SUCCESS',
        filter,
        response:normalize(response, schema.arrayOfTods)
      });
    }, error => dispatch({
      type:'FETCH_TODOS_FAILURE',
      filter,
      message: error.message || 'something went wrong!'
    })
  );
}

export const addTodo = text => dispatch => {
  return api.addTodo(text).then(response => dispatch({
    type:'ADD_TODO_SUCCESS',
    text,
    response:normalize(response, schema.todo)
  }));
};

export const toggleTodo = id => dispatch => {
  return api.toggleTodo(id).then(response => dispatch({
    type:'TOGGLE_TODO_SUCCESS',
    response:normalize(response, schema.todo)
  }))
}
