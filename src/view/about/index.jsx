import React, { Component } from 'react'
import data from './data';
import { Card } from 'antd';
import 'antd/dist/antd.css';

export default class About extends Component {
  render() {
    return (
      // 这是关于组件
      <div className={'wrap about'}>
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
