import React, { Component } from 'react';
import { Row, Col } from 'antd';
import IndexList from './indexlist';
import IndexMenu from './indexmenu';

export default class Index extends Component {
  render() {
    //首页
    //this.props 接收父组件route->index.js传过来的id
    // console.log(this.props)
    //获取this.props中的match里面的动态路由url中的标签id值
    // console.log(this.props.match.params.id)
    let tab = this.props.match.params.id;
    return (
      <div>
        <Row className={"wrap"}>
          {/* 这是左边菜单栏的内容 */}
          <Col md={6} id='MenuIndex'>
            <IndexMenu />
          </Col>
          {/* 这是右边列表的内容 */}
          <Col md={18} id='IndexList'>
            {/*向子组件传值*/}
            <IndexList tab={tab}/>
          </Col>
        </Row>
      </div>
    )
  }
}
