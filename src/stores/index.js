import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers'

export default function createStoreFunc(initState){
    const store=createStore(reducer,initState,applyMiddleware(thunkMiddleware));
    return store;
}