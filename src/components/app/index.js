import React from 'react';
import ErrorIndicator from '../error-indicator';
import withBookstoreService from '../hocs/withBookstoreService';
import BookstoreService from '../../services/bookstore-service';

const App = ({BookstoreService}) => {

    console.log(BookstoreService.getBooks());
    return (
        <div>
            <ErrorIndicator/>
        </div>
    );
};

export default withBookstoreService()(App) ;
