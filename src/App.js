import React from 'react';
import RouterIndex from './route/index';
import MainHeader from './view/main-header';
import MainFooter from './view/main-footer';


export default class App extends React.Component {
  render() {
    return (
      <div className={'pageWrap'}>
        <MainHeader />
        <main className={'main'}>
          <RouterIndex />
        </main>
        <MainFooter />
      </div>
    )
  }
}

/*
  需要用到的模块
    1.react-router-dom 路由操作
    2.antd ui组件库
    3.redux 状态管理器
    4.react-redux 结合react的状态管理器
    5.react-thunk  用于数据处理的中间件
    6.axios  HTTP 库 用于处理数据的请求

  划分模块
    头部
    内容
    底部

  路由模块
    主路由
      首页  home
      教程  book
      关于  about
    二级路由
      全部  all
      精华  good
      问答
      分享  shar
      招聘
      测试  test
    子路由
      文章列表  details

      嵌套路由
        文章
        用户
*/