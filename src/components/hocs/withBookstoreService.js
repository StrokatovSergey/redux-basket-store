import React from 'react';
import {BookstoreServiceConsumer} from '../bookstore-service-context';
import BookstoreService from '../../services/bookstore-service';

const withBookstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BookstoreServiceConsumer>
                {
                    (BookstoreService) => {
                        return (
                            <Wrapped {...props} BookstoreService={BookstoreService}/>
                        )
                    }
                }
            </BookstoreServiceConsumer>
        )
    }
}


export default withBookstoreService
