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
