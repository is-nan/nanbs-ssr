import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer/index'
export default data => createStore(reducer, data,applyMiddleware(thunk))
