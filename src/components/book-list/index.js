import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import './style.sass';

class BookList extends Component {
    render() {
        const { books} = this.props
        return (
            <ul>
                {
                    books.map((book, index) => (
                       <li key={index}> <BookListItem book={book}/> </li>
                    ))
                }
            </ul>
        );
    }
}

export default BookList;
