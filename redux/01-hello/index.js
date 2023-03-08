const { legacy_createStore } = require('redux');

const initialState = {
  name: 'Romain',
  todos: {
    value: 'XYZ',
    items: [{
      id: 1,
      text: 'ABC'
    }, {
      id: 2,
      text: 'DEF'
    }],
  }
}

function reducer(state, action) {
  console.log('reducer called');
  if (action.type === '@name/update') {
    return {
      ...state,
      name: action.value,
    };
  }
  if (action.type === '@todos/add') {
    return {
      ...state,
      todos: {
        ...state.todos,
        items: [
          ...state.todos.items,
          action.todo,
        ]
      }
    };
  }
  
  return state;
}

/** @type {import('redux').Store} */
const store = legacy_createStore(reducer, initialState);

console.log(store.getState());

// équivalent de .addEventListener (sauf qu'il est global)
store.subscribe(() => {
  console.log('callback de subscribe appelé');
  console.log(store.getState());
});

// équivalent de .dispatchEvent(new MouseEvent('click'))
store.dispatch({ type: '@todos/add', todo: {id: Math.random(), text: 'HIJ'} });
store.dispatch({ type: '@name/update', value: 'Toto' });
