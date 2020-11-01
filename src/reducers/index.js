const initialState = {
    books: [
        { id: 1, title: 'Как быть стоиком. Античная философия и современная жизнь ', author: 'Массимо Пильюччи' },
        { id: 2, title: 'Нравственные письма к Луцилию', author: 'Луций Анней Сенека' },
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                ...state,
                books: action.payload,
            }
        default:
            return state
    }
}


export default reducer
