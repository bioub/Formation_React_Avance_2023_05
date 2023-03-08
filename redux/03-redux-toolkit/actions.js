const { createAction, nanoid } = require('@reduxjs/toolkit');

exports.nameUpdate = createAction('@name/update');
exports.todosAdd = createAction('@todos/add', (value) => ({
  payload: {
    id: nanoid(),
    text: value,
  },
}));
