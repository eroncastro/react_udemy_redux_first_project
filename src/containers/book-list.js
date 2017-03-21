/*
  The connection between React and Redux is done by a library called react-redux.
  To use it, we are going to define a container instead of a component.
  A container is a React component that has direct access to the state
  produced/managed by Redux.

  In general, we want the most parent components that carries a piece of
  particular state to be a container.
*/

import React from 'react';

export default class BookList extends React.Component {
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
