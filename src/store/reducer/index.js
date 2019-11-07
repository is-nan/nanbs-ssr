import home from './home';
import list from './list';
import { combineReducers  } from 'redux';

// 其实就是把分散的reducers给合并了
export default combineReducers({
    home,
    list,
})
