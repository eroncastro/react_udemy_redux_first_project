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
import { selectBook } from '../actions/index'; // imports action creator
/*
  The bindActionCreators function is used to ensure that the action
  generated by the action creator ends up flowing through all of
  the different reducers.
*/
import { bindActionCreators } from 'redux';

class BookList extends React.Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
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
  Whenever our application state changes, this container will re-render
  with the new list of books.
*/
function mapStateToProps(state) {
  /*
    Whatever is returned will show up as props inside of BookList
    This function is the connection between our component and Redux.
  */

  return {
    books: state.books
  };
}
/*
  Whenever the application changes, the object books will be assigned
  as props to the component.
*/

/*
  Anything returned from this function will end up as props
  on the BookList container.
*/
function mapDispatchToProps(dispatch) {
  /*
    Whenever selectBook is called, the result should be passed
    to all of our reducers. That's what bindActionCreators is
    doing with dispatch.
  */
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

/*
  Promote BookList from a component to a container - it needs to know
  about this new dispatch method, selectBook. Make it available as
  a prop.
*/
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
