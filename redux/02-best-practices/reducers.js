const { NAME_UPDATE, TODOS_ADD } = require('./constants');

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


exports.reducer =  function reducer(state = initialState, action) {
  if (action.type === NAME_UPDATE) {
    return {
      ...state,
      name: action.payload,
    };
  }
  if (action.type === TODOS_ADD) {
    return {
      ...state,
      todos: {
        ...state.todos,
        items: [
          ...state.todos.items,
          action.payload,
        ]
      }
    };
  }
  
  return state;
}