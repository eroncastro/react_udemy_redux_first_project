/*
  Reducers receive two arguments: state and action.
  The state argument is not the application state, but the
  state the reducer is responsible for.

  A reducer is going to be called whenever an action is
  dispatched by our app. When the action is not concerned
  to a particular reducer, we need a base case to handle it
  and just return the current state.

  Redux reducers are set up with JavaScript switch statements.

  It is important that we never mutate our current state
  to produce a new state. The object returned from our
  reducer must always be a new object.
*/

export default function(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }

  return state;
}