import React, {Component} from 'react';
import TodoList from '../components//TodoList';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
// import {toggleTodo, receiveTodos} from '../actions';
import * as actions from '../actions';
import {getVisibleTodos, getIsFetching, getErrorMessage} from '../reducers';
import FetchError from '../components/FetchError';


class VisibleTodoList extends Component{

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if(this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  //触发dispatch
  fetchData() {
    const {filter, fetchTodos} = this.props;
    // requestTodos(filter);
    fetchTodos(filter);
  }

  render() {
    const {toggleTodo, todos, errorMessage, isFetching} = this.props;

    if (isFetching && !todos.length) {
      return <p>Loading...</p>;
    }

    if(errorMessage && !todos.length) {
      return (
         <FetchError message={errorMessage} onRetry={()=>this.fetchData()} />
      );
    }

    return (
      <TodoList todos={todos} onTodoClick={toggleTodo}/>
    );
  }
}

// state为context中store的数据， props为props的数据
const mapStateToProps = (state, {params}) => {
  const filter = params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    errorMessage:getErrorMessage(state, filter),
    isFetching: getIsFetching(state, filter),
    filter
  }
}
/*actions 相当于 (dispatch) => ({
  toggleTodo: id => dispatch(actions.toggleTodo(id)),
  requestTodos: filter => dispatch(actions.requestTodos(filter)),
  fetchTodos: filter => dispatch(actions.fetchTodos(filter))
})*/
export default withRouter(connect(mapStateToProps, actions )(VisibleTodoList));