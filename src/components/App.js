import React from 'react';
import {VisibleTodoList, AddTodo, Footer} from '../containers';

const  App = () => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
};

export default App;
