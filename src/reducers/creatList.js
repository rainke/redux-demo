import {combineReducers} from 'redux';
const creatList = filter => {
  let ids = (state = [], action) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case `RECEIVE_TODOS`:
        return action.response.map(todo => todo.id);
      default:
        return state;
    }
  }
  let isFetching = (state = false, action) =>{
    switch(action.type) {
      case 'REQUEST_TODOS':
        return true;
      case 'RECEIVE_TODOS':
        return false;
      default: return state;
    }
  }
  return combineReducers({ids, isFetching});
}
export default creatList;