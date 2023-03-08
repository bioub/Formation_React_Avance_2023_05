const { configureStore } = require('@reduxjs/toolkit');
const { nameUpdate, todosAdd } = require('./actions');
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
store.dispatch(nameUpdate('Toto'));
store.dispatch(nameUpdate('Titi'));
store.dispatch(todosAdd('HIJ'));
