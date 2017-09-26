import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from '../../components/Todo';
import { todoToDoing, doingToDone, deleteTodo, doneToTodo } from '../../actions';

class AllList extends Component {
    render() {
        const { todoList, dispatch} = this.props;
        return (
            <div>
                <Todo title="待办事项" todoList={todoList} condition="istodo" delete={index => dispatch(deleteTodo(index))} changeClick={index => dispatch(todoToDoing(index))} />
                <Todo title="正在进行" todoList={todoList} condition="isdoing" delete={index => dispatch(deleteTodo(index))} changeClick={index => dispatch(doingToDone(index))} />
                <Todo title="已经完成" todoList={todoList} condition="isdone" delete={index => dispatch(deleteTodo(index))} changeClick={index => dispatch(doneToTodo(index))} />
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        todoList: state.todoList,
    };
}

export default connect(mapStateToProps)(AllList);
