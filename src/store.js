import {createStore, applyMiddleware} from 'redux';

import reducer from './reducers';

const logMiddleware = ({getState, dispatch}) => (nextMiddleware) => (action) => {
    console.log('action.type', action.type);
    console.log('store', store);
    return nextMiddleware(action)
}

const stringMiddleware =  ({getState, dispatch}) => (nextMiddleware) => (action) => {
    if (typeof action === 'string') {
        return nextMiddleware({
            type: action
        })
    }
    return nextMiddleware(action)
}

const stringEnhancer = (createStore) => (...args) => {
    const store = createStore(...args)
    const originalDispatch = store.dispatch
    store.dispatch = (action) => {
        if (typeof action === 'string') {
            return originalDispatch({
                type: action
            })
        }
        return originalDispatch(action)
    }
    return store
}

const logEnhancer = (createStore) => (...args) => {
    const store = createStore(...args)
    const originalDispatch = store.dispatch
    store.dispatch = (action) => {
        console.log(action.type);
        return originalDispatch(action)
    }
    return store
}

const store = createStore(
    reducer, /* preloadedState, */
    applyMiddleware(logMiddleware, stringMiddleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch('hello world')

export default store
