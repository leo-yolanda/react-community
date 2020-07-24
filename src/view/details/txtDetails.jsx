import React, { Component } from 'react'
import { Card, Avatar } from 'antd';
import 'antd/dist/antd.css';
import data from './data.js';
import TxtTag from '../txtTag.jsx';
import { Link } from 'react-router-dom';

export default class TxtDetails extends Component {
  render() {
    return (
      <div>
        {/* 详细文章内容组件 */}
        <Card>
          <Card.Meta title={
            <>
              <h2>{data.data.title}</h2>
              {/* 自定义属性 */}
              <TxtTag data={data.data}/>
              <Avatar src={data.data.author_url} className={'userPic'}/>
              <Link to={'/user/' + data.data.author.loginname}>{data.data.author.loginname}</Link>
              发表于:{data.data.create_at.split('T')[0]}
            </>
          }>
          </Card.Meta>
          <div dangerouslySetInnerHTML={{ __html: data.data.content }}/>
        </Card>
      </div>
    )
  }
}
