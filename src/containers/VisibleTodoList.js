import React, {Component} from 'react';
import TodoList from '../components//TodoList';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
// import {toggleTodo, receiveTodos} from '../actions';
import * as actions from '../actions';
import {getVisibleTodos} from '../reducers';


class VisibleTodoList extends Component{

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if(this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const {filter, fetchTodos} = this.props;
    fetchTodos(filter)
  }

  render() {
    const {toggleTodo, ...rest} = this.props;
    return (
      <TodoList {...rest} onTodoClick={toggleTodo}/>
    );
  }
}

// state为context中store的数据， props为props的数据
const mapStateToProps = (state, {params}) => {
  const filter = params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    filter
  }
}

// const mapDispatchToProps = dispatch => ({
//   onTodoClick: id => dispatch(toggleTodo(id))
// })

// const VisibleTodoList = withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList));
// VisibleTodoList = withRouter(connect(mapStateToProps, {onTodoClick:toggleTodo, receiveTodos})(VisibleTodoList));
export default withRouter(connect(mapStateToProps, actions )(VisibleTodoList));