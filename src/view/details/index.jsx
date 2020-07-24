import React, { Component } from 'react'
import data from './data.js';
import TxtDetails from './txtDetails.jsx';
import ReplyList from './replyList.jsx';

export default class Details extends Component {
  render() {
    // console.log(data)
    // console.log(data.data)
    return (
      <div className={'wrap'}>
        {/* 详细文章内容组件和评论组件*/}
        <TxtDetails />
        <ReplyList 
          //自定义属性的值 从后台数据返回的值
          replies={data.data.replies}//回复的内容
          replyCount={data.data.reply_count}//回复的人数
          //从父组件拿到值之后渲染给replylist.jsx组件

        />
      </div>
    )
  }
}
