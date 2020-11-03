
const initialState = {
  books: [],
  loading: true,
  cartItems: [
    {
      id: 1,
      name: 'dsfdsf',
      count: 3,
      total: 130
    },
    {
      id: 2,
      name: 'dsfdsf',
      count: 3,
      total: 130
    },
    {
      id: 3,
      name: 'dsfdsf',
      count: 3,
      total: 130
    },
    {
      id: 4,
      name: 'dsfdsf',
      count: 3,
      total: 130
    },
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

    default:
      return state;
  }
};

export default reducer;
