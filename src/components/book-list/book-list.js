import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect, dispatch } from 'react-redux';
import { withBookstoreService } from '../hoc';
import {booksLoaded, booksRequested, booksError, fetchBooks} from '../../actions';
import { compose } from '../../utils';
import './book-list.css';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

class BookListContaner extends Component {

  componentDidMount() {
    // 1. receive data
    const { bookstoreService, booksLoaded, booksRequested, booksError } = this.props;
   this.props.fetchBooks()
  }

  render() {
    const { books, loading, error } = this.props;

    if (loading) {
        return <Spinner/>
    }
    if (error) {
        return <ErrorIndicator errMessage={error}/>
    }

    return <BookList {...this.props} />


  }
}


const BookList = ({books}) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}><BookListItem  /></li>
                    )
                })
            }
        </ul>
    );
};



const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps
  return {
      fetchBooks : fetchBooks(bookstoreService, dispatch)
  }
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContaner);
