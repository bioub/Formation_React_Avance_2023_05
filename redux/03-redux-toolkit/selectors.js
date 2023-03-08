const { createSelector } = require('@reduxjs/toolkit');

// createSelector === memo
exports.todosCountSelector = createSelector(
  (state) => state.todos.items,
  function todosCountSelector(items) {
    return items.filter((item) => !item.done).length;
  },
);
