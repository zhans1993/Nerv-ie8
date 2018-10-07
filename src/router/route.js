/**
 *
 * title: route.js
 *
 * description: react-router的控制路由功能组件；负责所有的页面跳转
 *
 * author: zhans1993
 *
 * date: 2018/10/07
 */

import Nerv from 'nervjs';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import NotFoundPage from '../containers/404/index';
import Root from '../containers/root/index';
import HomePage from '../containers/homePage/homePage';
import Login from '../containers/login/index';
import TodoBox from '../component/todoBox/todoBox';

export default class AppRoute extends Nerv.Component {
  // constructor() {
  //     // super(...arguments);
  //     this.state = {
  //         data: [{ id: 1, task: 'new todo', complete: false }]
  //     };
  // }

  // requireAuth (nextState, replace) {
  //     // todo 书写组件进入前的逻辑处理
  //     // let loginStatus = Cookie.get("loginStatus");
  //     // if (loginStatus == null) {
  //     //     replace({ pathname: '/login' })
  //     // }else if (loginStatus.userId=='yufabu1'){
  //     //     replace({ pathname: '/dayDateChange' })
  //     // }
  // }

  render() {
    return <TodoBox />;
  }
}
