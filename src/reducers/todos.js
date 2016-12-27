import {combineReducers} from 'redux';
import todo from './todo';

const getAllTodos = (state) =>
  state.allIds.map(id => state.byId[id]);

const byId = (state={}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    case 'TOGGLE_TODO':
      return {
        ...state,
        [action.id]:todo(state[action.id], action)
      };
    case 'RECEIVE_TODOS':
      var nextState = {...state};
      action.response.forEach( item => nextState[item.id] = item);
      return nextState;
    default:
      return state;
  }
};

const allIds =(state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.id];
    case 'RECEIVE_TODOS':
      return [...state, ...action.response.map(item => item.id)];
    default:
      return state;
  }
}

const todos = combineReducers({byId, allIds});

export default todos;

export const getVisibleTodos = (state, filter) => {
  const allTodos = getAllTodos(state);
  switch(filter) {
    case 'all':
      return allTodos;
    case 'active':
      return allTodos.filter(t => !t.completed);
    case 'completed':
      return allTodos.filter(t => t.completed);
    default:
      throw new Error(`unknown filter: ${filter}`);
  }
}