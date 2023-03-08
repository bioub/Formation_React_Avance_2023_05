const { legacy_createStore } = require('redux');
const { configureStore } = require('./configureStore');
const { NAME_UPDATE, TODOS_ADD } = require('./constants');
const { reducer } = require('./reducers');
const { todosCountSelector } = require('./selectors');


const store = configureStore({
  reducer
});


console.log('Todos Count', todosCountSelector(store.getState()));

// équivalent de .addEventListener (sauf qu'il est global)
store.subscribe(() => {
  console.log('Todos Count', todosCountSelector(store.getState()));
});

// équivalent de .dispatchEvent(new MouseEvent('click'))
store.dispatch({ type: NAME_UPDATE, value: 'Toto' });
store.dispatch({ type: TODOS_ADD, todo: {id: Math.random(), text: 'HIJ'} });
