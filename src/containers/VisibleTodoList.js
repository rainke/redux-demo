// import React, {Component} from 'react';
import TodoList from '../components//TodoList';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import {toggleTodo} from '../actions';
import {getVisibleTodos} from '../reducers';

// state为context中store的数据， props为props的数据
const mapStateToProps = (state, props) => ({
  todos: getVisibleTodos(
    state,
    props.params.filter || 'all'
  )
})

// const mapDispatchToProps = dispatch => ({
//   onTodoClick: id => dispatch(toggleTodo(id))
// })

// const VisibleTodoList = withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList));
const VisibleTodoList = withRouter(connect(mapStateToProps, {onTodoClick:toggleTodo})(TodoList));
export default VisibleTodoList;