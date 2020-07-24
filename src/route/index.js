import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import About from '../view/about';
import Book from '../view/book';
import Index from '../view/index';
import User from '../view/user';
import Details from '../view/details';

export default class RouterIndex extends Component {
  render() {
    return (
      <div>
        <Switch>
          {/* 
            path url路径 
            component 跳转到对应的组件
            exact 精准匹配
            <Route exact path="/" render={() => (
            <Redirect to="index" />
          )}></Route> 重定向到首页 子组件里嵌套孙子组件
          */}
          <Route exact path="/" render={() => (<Redirect to="/index/all" />)} />
          {/* 二级路由-动态路由 id 向父组件传值*/}
          <Route path="/index/:id" component={Index} />
          <Route path="/book" component={Book} />
          <Route path="/about" component={About} />
          <Route path="/user" component={User} />
          <Route path="/details" component={Details} />
        </Switch>
      </div>
    )
  }
}
