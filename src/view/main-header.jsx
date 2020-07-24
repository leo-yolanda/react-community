import React, { Component } from 'react';
import { Layout, Row, Col, Divider, Menu } from 'antd';
import {HomeOutlined,ReadOutlined,PartitionOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';

export default class MainHeader extends Component {
  render() {
    return (
      <div>
        {/* layout布局 */}
        <Layout.Header>
          {/* 栅格布局 */}
          <Row className={"wrap"}>
            <Col md={6}><h1 id="logo">社区</h1></Col>
            <Col md={18}>
              {/* Divider分割线 */}
              <Divider type="vertical" className={'wrapDivider'}/>
              {/* 导航菜单 */}
              <Menu mode="horizontal" theme="light" className={"T_Nemu"}>
                <Menu.Item><Link to="/index/all"><HomeOutlined />首页</Link></Menu.Item>
                <Menu.Item><Link to="/book"><ReadOutlined />教程</Link></Menu.Item>
                <Menu.Item><Link to="/about"><PartitionOutlined />关于</Link></Menu.Item>
              </Menu>
              </Col>
          </Row>
        </Layout.Header>
      </div>
    )
  }
}
