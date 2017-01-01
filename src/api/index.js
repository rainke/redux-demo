import { v4 } from 'node-uuid';
const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

const fakeDatabase = {
  todos:[
    {
      id:v4(),
      text:'learn redux',
      completed:false
    },
    {
      id:v4(),
      text:'sleeping',
      completed:true
    }
  ]
}

export const fetchTodos = (filter) =>
  delay(5000).then(() => {

    // throw new Error('Boom!');

    switch (filter) {
      case 'all':
        return fakeDatabase.todos;
      case 'active':
        return fakeDatabase.todos.filter(t => !t.completed);
      case 'completed':
        return fakeDatabase.todos.filter(t => t.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });