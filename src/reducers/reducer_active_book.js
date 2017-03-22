/*
  Reducers receive two arguments: state and action.
  The state argument is not the application state, but the
  state the reducer is responsible for.

  It is important that we never mutate our current state
  to produce a new state. The object returned from our
  reducer must be a new object.
*/

export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}