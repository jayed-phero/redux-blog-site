import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore } from 'redux';
import blogsReducer from './reducer/blogsReducer';

const store = createStore(blogsReducer, composeWithDevTools())

export default store;