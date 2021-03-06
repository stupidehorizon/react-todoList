export const ADD_TODO = 'Add_Todo';
export const CHANGE_TODO_TO_DOING = 'Change_Todo_To_Doing';
export const CHANGE_DOING_TO_DONE = 'Change_Doing_To_Done';
export const CHANGE_DONE_TO_TODO = 'Change_Done_To_Todo';
export const SEARCH = 'Search';
export const DELETE_TODO = 'Delete_Todo';

/* 一般dispatch只能接受对象作为参数
* 使用redux-thunk中间件后，store.dispatch可以接受函数作为参数。
* 这个函数的参数是 dispatch和getState
*/
export const addTodo = (name) => {
    return (dispatch, getState) => {
        // 测试异步流
        const state = getState();
        localStorage.setItem('todos',
            JSON.stringify([
                ...state.todoList, {
                    name,
                    istodo: true,
                    doing: false,
                    done: false,
                },
            ])
        );
        setTimeout(() => {
            dispatch({
                type: ADD_TODO,
                name,
            });
        }, 0);
    };
};

export const todoToDoing = (index) => {
    return {
        type: CHANGE_TODO_TO_DOING,
        index,
    };
};

export const doingToDone = (index) => {
    return {
        type: CHANGE_DOING_TO_DONE,
        index,
    };
};

export const deleteTodo = (index) => {
    return {
        type: DELETE_TODO,
        index,
    };
};

export const doneToTodo = (index) => {
    return {
        type: CHANGE_DONE_TO_TODO,
        index,
    };
};
