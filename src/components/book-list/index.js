import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import {connect} from 'react-redux';
import './style.sass';
import withBookstoreService from '../hocs/withBookstoreService';
import {booksLoaded} from '../../actions';
import {bindActionCreators} from 'redux';
import {compose} from '../../utils';

class BookList extends Component {

    componentDidMount() {
        const {bookstoreService} = this.props;
        const data               = bookstoreService.getBooks()
        this.props.booksLoaded(data)
    }

    render() {
        const {books} = this.props
        return (
            <ul>
                {
                    books.map((book, index) => (
                        <li key={index}><BookListItem book={book}/></li>
                    ))
                }
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}

const mapDispatchToProps = {
    booksLoaded
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList)

// export default withBookstoreService()(
//     connect(mapStateToProps, mapDispatchToProps)(BookList)
// )
