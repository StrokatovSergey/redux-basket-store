import React from 'react';

import './style.sass';

const BookListItem = ({book}) => {
    const {title, author} = book;
    return (
        <React.Fragment>
            <span>{title}</span>
            <span>{author}</span>
        </React.Fragment>
    );
};

export default BookListItem;
