import {combineReducers} from 'redux';
import todoList from './todoList';

// combineReducers中的参数都将作为state对象的一个属性
const reducer = combineReducers({
    todoList
});

export default reducer;