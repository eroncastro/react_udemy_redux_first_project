/*
  A Reducer is a function that returns a piece of the application state.

  Creating a Reducer is a two step process:
  1) Create the reducer;
  2) Wire it into the application.
*/

export default function() {
  return [
    { title: 'JavaScript: The Good Parts' },
    { title: 'Harry Potter' },
    { title: 'The Dark Tower' },
    { title: 'Eloquent Ruby' },
  ];
}
