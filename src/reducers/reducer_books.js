/*
  A Reducer is a function that returns a piece of the application state.

  Creating a Reducer is a two step process:
  1) Create the reducer;
  2) Wire it into the application.
*/

/*
  To change the state, we use actions and actions creators.

  An action creator is a function that returns an action, which is an object.
  That object is then automatically sent to all reducers inside the application.
  The action has a type and some data.
  Reducers, depending on what the action is, can choose to return a different piece of state.
  That new piece of state gets piped into the application state, which gets pumped back
  to our React app, causing all components to re-render.
*/

export default function() {
  return [
    { title: 'JavaScript: The Good Parts' },
    { title: 'Harry Potter' },
    { title: 'The Dark Tower' },
    { title: 'Eloquent Ruby' },
  ];
}
