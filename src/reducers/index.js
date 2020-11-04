
const initialState = {
  books: [],
  loading: true,
  cartItems: [
    {
      id: 1,
      name: 'Release It!',
      count: 3,
      total: 130
    },
    {
      id: 2,
      name: 'Production-Ready Microservices\n',
      count: 3,
      total: 130
    }
  ],
  orderTotal: 600
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      }
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      }
    case 'BOOK_ADDED_TO_CART':
      const bookId = action.payload
      const book = state.cartItems.find((book) => book.id === bookId)
      const newItem = {
        id: book.id,
        name: book.name,
        count: 1,
        total: book.price
      }
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
            newItem
        ]
      }

    default:
      return state;
  }
};

export default reducer;
