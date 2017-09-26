import React, { Component } from 'react';
import { Collapse, Row, Col, Button, Icon } from 'antd';
import './index.less';

const Panel = Collapse.Panel;

class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleDel = this.handleDel.bind(this);
    }

    handleClick(e) {
        const changeIndex = e.target.getAttribute('data-key');
        this.props.changeClick(changeIndex);
    }
    handleDel(e) {
        const changeIndex = e.target.getAttribute('data-key');
        this.props.delete(changeIndex);
    }
    render() {
        let { condition, todoList } = this.props;
        todoList = todoList.filter((item) => {
           return item[condition];
        });
        const number = todoList.length;
        return (
            <Collapse defaultActiveKey={['1']} className="content-wrap">
                <Panel
                    header={
                        <Row>
                            <Col span={22}>
                                <h3>{this.props.title}</h3>
                            </Col>
                            <Col span={2}>
                                <Button
                                    size="small"
                                    shape="circle"
                                >{number}</Button>
                            </Col>
                        </Row>
                    }
                    key="1"
                >
                    {this.props.todoList.map((item, i) => {
                        if (item[condition]) {
                            return (
                                <li key={i}>
                                    <Row type="flex" align="center">
                                        <Col span={3}>
                                            <input
                                                type="checkbox"
                                                checked={item.isdone}
                                                onChange={this.handleClick}
                                                data-key={i}
                                            />
                                        </Col>
                                        <Col span={20}>
                                            <p>{item.name}</p>
                                        </Col>
                                        <Col span={1}>
                                            <Icon
                                                type="close-circle-o"
                                                data-key={i}
                                                style={{
                                                    fontSize: '20px',
                                                }}
                                                onClick={this.handleDel}
                                            />
                                        </Col>
                                    </Row>
                                </li>
                            );
                        }
                    })}
                </Panel>
            </Collapse>
        );
    }
}

export default Todo;
