import * as schema from 'normalizr';
export const todo = new schema.schema.Entity('todos');
export const arrayOfTods = new schema.schema.Array(todo);

const myTodo = {
  a:'a',
  id:'1'
};
const myTodos=[myTodo];

console.log(schema.normalize(myTodo, todo));
console.log(schema.normalize(myTodos, arrayOfTods));