import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import './index.less';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
         value: 0,
    };
  }
  render() {
    const { todoList, addTodos } = this.props;
    let [allNum, todoNum, doingNum, doneNum] = [0, 0, 0, 0];
    allNum = todoList.length;
    todoList.forEach((item) => {
      if (item.istodo) {
          todoNum += 1;
      } else if (item.isdoing) {
        doingNum += 1;
      } else {
        doneNum += 1;
      }
    });
    return (
      <div>
        <Header addTodo={addTodos} />
        <Navigation
          allNum={allNum}
          todoNum={todoNum}
          doingNum={doingNum}
          doneNum={doneNum}
        />
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { todoList: state.todoList };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodos: (name) => {
      dispatch(addTodo(name));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
