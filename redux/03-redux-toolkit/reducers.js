const { createReducer } = require('@reduxjs/toolkit');
const { nameUpdate, todosAdd } = require('./actions');

const initialState = {
  name: 'Romain',
  todos: {
    value: 'XYZ',
    items: [
      {
        id: 1,
        text: 'ABC',
      },
      {
        id: 2,
        text: 'DEF',
      },
    ],
  },
};

// exports.reducer =  function reducer(state = initialState, action) {
//   if (action.type === nameUpdate.type) {
//     return {
//       ...state,
//       name: action.payload,
//     };
//   }
//   if (action.type === todosAdd.type) {
//     return {
//       ...state,
//       todos: {
//         ...state.todos,
//         items: [
//           ...state.todos.items,
//           action.payload,
//         ]
//       }
//     };
//   }

//   return state;
// }

exports.reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(nameUpdate, (state, action) => {
      state.name = action.payload;
      // en interne immer transforme en
      // return {
      //   ...state,
      //   name: action.payload,
      // };
    })
    .addCase(todosAdd, (state, action) => {
      state.todos.items.push(action.payload);
      // en interne immer transforme en
      // return {
      //   ...state,
      //   todos: {
      //     ...state.todos,
      //     items: [...state.todos.items, action.payload],
      //   },
      // };
    });
});
