import React, { Component } from 'react';
import { Input, Button, Row, Col } from 'antd';
import { findDOMNode } from 'react-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.addClick = this.addClick.bind(this);
    }
    addClick(e) {
        e.preventDefault();
        const inputNode = findDOMNode(this.refs.inputnew);
        const text = inputNode.value.trim();
        if (text.length > 20) {
            this.setState({ hidden: false });
            this.setState({ hint: '请输入20字以内' });
        } else if (text !== '') {
            this.props.addTodo(text);
            this.setState({ hidden: true });
        } else {
            this.setState({ hint: '请输入内容' });
            this.setState({ hidden: false });
        }
        inputNode.value = '';
    }
    render() {
        return (
            <div className="header">
                <Row type="flex" align="middle" justify="flex-start" gutter={0}>
                    <Col span="10" offset="0"><label htmlFor="new-todo">TODOLIST</label></Col>
                    <Col span="10">
                        <Input
                            placeholder="添加一个事件" 
                            id="new-todo"
                            onKeyUp={this.handleKeyUp}
                            ref="inputnew"
                            type="text"
                        />
                    </Col>
                    <Col span="4">
                        <Button type="default" onClick={e => this.addClick(e)}>添加</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;
