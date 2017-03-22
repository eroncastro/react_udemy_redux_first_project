/*
  An action creator is just a function that returns an action.
  An action is just an object that flows through all the reducers.
  The reducers can then use actions to produce a new particular piece of state.

  It is not enough to just write a function and export it, though. We need
  to ensure that the action that gets returned from it ends up running through
  all of the reducers. In other words, we must wire up the action creator with redux.
*/

export function selectBook(book) {
  /*
    selectBook is an ActionCreator. It needs to return an action,
    an object with a type property.

    Actions usually have two values: a type and a payload.
    The payload further describes the condition of the action
    that is been triggered.
  */
  return {
    'type': 'BOOK_SELECTED',
    'payload': book
  };
}
