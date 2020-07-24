import React, { Component } from 'react'
import data from './data';
import { Card } from 'antd';
import 'antd/dist/antd.css';

export default class Book extends Component {
  render() {
    // console.log(data)
    // 这是教程组件
    return (
      <div className={'wrap'}>
        {data.map((item, index) => {
          return (
            <Card key={index} title={item.title} type='inner'>
              {/* dangerouslySetInnerHTML显示文本的标签样式 */}
              <div dangerouslySetInnerHTML={{__html: item.content}}/>
            </Card>
          )
        })}
      </div>
    )
  }
}
