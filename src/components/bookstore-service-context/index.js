import React from 'react'
import BookstoreService from '../../services/bookstore-service';

const {
          Provider: BookstoreServiceProvider,
          Consumer: BookstoreServiceConsumer
      } = React.createContext()

export {
    BookstoreServiceConsumer,
    BookstoreServiceProvider
}
