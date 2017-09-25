import {
    ADD_TODO,
    DELETE_TODO,
    CHANGE_TODO_TO_DOING,
    CHANGE_DOING_TO_DONE,
    CHANGE_DOING_TO_TODO,
    CAHNGE_DONE_TO_DOING,
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

const todoList = (state = todos,action) => {
    switch(action.type){
        case ADD_TODO:
        return [
            ...state,{
                name:action.name,
                istodo:true,
                isdoing:false,
                isdone:false
            }
        ];

        default: return state;
    }
}

export default todoList;