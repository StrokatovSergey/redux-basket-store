
const initialState = {
  books: [],
  loading: true,
  cartItems: [

  ],
  orderTotal: 600
};

const updateCarItems = (cartItems, item, index) => {
  if (index === -1) {
    return  [ ...cartItems, item ]
  } else {
    return [ ...cartItems.slice(0, index), item, ...cartItems.slice(index + 1)  ]
  }
}

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
      const book = state.books.find((book) => book.id === bookId)
      const itemIndex = state.cartItems.findIndex(book => book.id === bookId)
      const item = state.cartItems[itemIndex]
      let newItem;
      if (item) {
          newItem = {
            ...item,
            count: ++item.count
          }
      } else {
        newItem = {
          id: book.id,
          title: book.title,
          count: 1,
          total: book.price
        }
      }
      if (itemIndex < 0) {
          return {
            ...state,
            cartItems: [
              ...state.cartItems,
              newItem
            ]
          }
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.slice(0, itemIndex),
            newItem,
            ...state.cartItems.slice(itemIndex + 1)
          ]
        }
      }

    default:
      return state;
  }
};

export default reducer;
