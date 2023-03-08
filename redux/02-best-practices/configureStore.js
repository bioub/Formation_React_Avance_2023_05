const { legacy_createStore } = require('redux');

exports.configureStore =  function configureStore({ reducer }) {
  /** @type {import('redux').Store} */
  const store = legacy_createStore(reducer);

  return store;
}