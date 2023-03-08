exports.todosCountSelector = function todosCountSelector(state) {
  return state.todos.items.filter((item => !item.done)).length;
}