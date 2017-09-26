import {
    ADD_TODO,
    DELETE_TODO,
    CHANGE_TODO_TO_DOING,
    CHANGE_DOING_TO_DONE,
    CHANGE_DONE_TO_TODO,
    SEARCH,
} from '../actions';

let todos;
(() => {
    if (localStorage.todos) {
        todos = JSON.parse(localStorage.todos);
    } else {
        todos = [];
    }
})();

//除了第一次state是从默认值todos取到，其他时候都是state的前一个状态。
const todoList = (state = todos, action) => {
    switch (action.type) {
        case ADD_TODO:
        const arr = [
            ...state,
            {
                name: action.name,
                istodo: true,
                isdoing: false,
                isdone: false,
            },
        ];
        localStorage.setItem('todos',JSON.stringify(arr));
        return arr;

        case CHANGE_TODO_TO_DOING:
        const arr1 = [
            ...state.slice(0, action.index),
            {
                name: state[action.index].name,
                istodo: false,
                isdoing: true,
                isdone: false,
            },
            ...state.slice(parseInt(action.index, 10) + 1),
        ];
        localStorage.setItem('todos',JSON.stringify(arr1));
        return arr1;

        case CHANGE_DOING_TO_DONE:
        const arr2 = [
            ...state.slice(0, action.index),
            {
                name: state[action.index].name,
                istodo: false,
                isdoing: false,
                isdone: true,
            },
            ...state.slice(parseInt(action.index, 10) + 1),
        ];
        localStorage.setItem('todos',JSON.stringify(arr2));
        return arr2;

        case CHANGE_DONE_TO_TODO:
        const arr3 = [
            ...state.slice(0, action.index),
            {
                name: state[action.index].name,
                istodo: true,
                isdoing: false,
                isdone: false,
            },
            ...state.slice(parseInt(action.index, 10) + 1),
        ];
        localStorage.setItem('todos',JSON.stringify(arr3));
        return arr3;

        case DELETE_TODO:
        const arr4 = [
            ...state.slice(0, action.index),
            ...state.slice(parseInt(action.index, 10) + 1),
        ];
        localStorage.setItem('todos',JSON.stringify(arr4));
        return arr4;

        default: return state;
    }
};

export default todoList;
