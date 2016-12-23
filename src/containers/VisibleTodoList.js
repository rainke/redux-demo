// import React, {Component} from 'react';
import TodoList from '../components//TodoList';
import {connect} from 'react-redux';
import {toggleTodo} from '../actions';
const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    default:
      return todos;
  }
}

const mapStateToProps = state => {
  return {
    todos:getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => dispatch(toggleTodo(id))
  };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
/*class VisibleTodoList extends Component {

  componentDidMount() {
    const {store} = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
  this.unsubscribe();
  }

  render() {
    const {store} = this.context;
    const state = store.getState();

    return (
      <TodoList
        todos={
          getVisibleTodos(
            state.todos,
            state.visibilityFilter
          )
        }
        onTodoClick={id =>
          store.dispatch({
            type: 'TOGGLE_TODO',
            id
          })
        }
      />
    );
  }
}

VisibleTodoList.contextTypes = {
  store: React.PropTypes.object
};*/
export default VisibleTodoList;