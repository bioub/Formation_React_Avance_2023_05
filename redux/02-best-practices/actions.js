const { NAME_UPDATE, TODOS_ADD } = require("./constants")

// Action avec type + payload
// Flux Standard Action (Action FSA)
// https://github.com/redux-utilities/flux-standard-action

exports.nameUpdate = function (value) {
  return {
    type: NAME_UPDATE,
    payload: value,
  }
}

exports.todosAdd = function (value) {
  return {
    type: TODOS_ADD,
    payload: {
      id: Math.random(),
      text: value,
    },
  }
}