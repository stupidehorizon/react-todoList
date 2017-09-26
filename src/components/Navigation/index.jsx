import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Link, IndexLink  } from 'react-router';
import './index.less';

class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <Row type="flex" justify="space-between">
                    <Col span={6}><IndexLink to="/" activeClassName="active" onlyActiveOnIndex={true}>全部事项 {this.props.allNum}</IndexLink></Col>
                    <Col span={6}><Link to="/todo" activeClassName="active" onlyActiveOnIndex={true}>待办事项 {this.props.todoNum}</Link></Col>
                    <Col span={6}><Link to="/doing" activeClassName="active" onlyActiveOnIndex={true}>正在进行 {this.props.doingNum}</Link></Col>
                    <Col span={6}><Link to="/done" activeClassName="active" onlyActiveOnIndex={true}>已经完成 {this.props.doneNum}</Link></Col>
                </Row>
            </div>
        );
    }
}

export default Navigation;
