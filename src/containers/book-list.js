/*
  The connection between React and Redux is done by a library called react-redux.
  To use it, we are going to define a container instead of a component.
  A container is a React component that has direct connection to the state
  produced/managed by Redux.

  In general, we want the most parent components that carries a piece of
  particular state to be a container.

  Action creator - function that returns an action.
  Action - object that flows through all different reducers.
  Reducers can then use that particular action to produce a new piece of state.
*/

import React from 'react';
import { connect } from 'react-redux';

class BookList extends React.Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

/*
  This function will make the piece of state that is related to BookList
  available as this.props
  Whenever our application state change, this container will re-render
  with the new list of books.
*/
function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books
  };
}
/*
  Whenever the application changes, the object books will be assigned
  as props to the component.
*/
export default connect(mapStateToProps)(BookList);
