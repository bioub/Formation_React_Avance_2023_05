import { todoChange } from "./actions"

test('action creator todoChange', () => {
  // toBe ===
  // toEqual (2 objets identique)
  expect(todoChange('ABC')).toEqual({
    type: 'TODO_CHANGE',
    payload: 'ABC',
  });
})
