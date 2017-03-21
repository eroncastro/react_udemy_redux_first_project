# Reducers

## Definition

A Reducer is a function that returns a piece of the application state.
Because an application may have differente states, it may have many different reducers.
The application state is just a plain JavaScript object.

## Example

### Application state - Generated by Reducers

```JavaScript
{
  books: [{title: "Harry Potter"}, {title: "JavaScript"}], // Books Reducers
  activeBook: {title: "JavaScript: the Good Parts"} // ActiveBook Reducer
}
```
