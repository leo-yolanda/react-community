// 用于处理[全部 精华 问答 分享 招聘 测试]的组件

import React, { Component } from 'react';
import { Tag } from 'antd';

import 'antd/dist/antd.css';

const tab = {
  top: {
    color: 'red',
    txt: '置顶'
  },
  good: {
    color: 'lime',
    txt: '精华'
  },
  ask: {
    color: 'green',
    txt: '问答'
  },
  job: {
    color: 'purple',
    txt: '招聘'
  },
  dev: {
    color: 'orange',
    txt: '测试'
  },
  share: {
    color: 'magenta',
    txt: '分享'
  },
};


//过滤数据 只需要tab标签的数据
function getTab(data){
  // console.log(data.top) 
  return(
    data.top ? "top" : 
      data.good ? "good" : 
        data.tab
  )
}
//相当于
// if(){

// }else{
//   if(){

//   }else{
//     if(){

//     }else{

//     }
//   }
// }

//tag标签组件
export default class TxtTag extends Component {
  render() {
    //data 是接收从父组件indexlist传过来的值 
    // console.log(this.props.data);
    //数据传送过来之后触发getTab函数 getTab函数对top good进行判断 
    //如果都为加则为tab的值 tab的值又会根据tab对象返回对应的样式
    let newTab = tab[getTab(this.props.data)];
    // console.log(newTab.color)
    // let {color,txt} = newTab;
    
    return (
      <div>
        <Tag color={newTab.color}>{newTab.txt}</Tag>
      </div>
    );
  }
}

