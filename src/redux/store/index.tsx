import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../others/mainreducers';

const middleware = applyMiddleware(thunk);
export const store = createStore(rootReducer, middleware)