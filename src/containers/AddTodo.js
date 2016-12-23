import React from 'react';
import {addTodo} from '../actions';
import {connect} from 'react-redux';

let AddTodo = ( {dispatch}) => {
  let input;
  return (
    <div>
      <input ref={node => {
          input = node;
        }} />
        <button onClick={ () => {
          dispatch(addTodo(input.value));
          input.value = '';
        }}>add todo</button>
    </div>
  );
};

// AddTodo.contextTypes = {
//   store: React.PropTypes.object
// }

AddTodo = connect()(AddTodo);
export default AddTodo;