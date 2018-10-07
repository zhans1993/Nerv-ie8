import Nerv from 'nervjs';
import './index.less';

// import P from "prop-types";
// import { observer, inject } from "mobx-react";
// import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// ==================
// 组件
// ==================
// @inject(stores => ({
//   // loginData: stores.login.loginData.slice(0, 2),
//   // Number: stores.login.Number
// }))
// @observer
export default class Login extends Nerv.Component {
  // static propTypes = {
  //   location: P.any,
  //   history: P.any
  // };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loginStatus: false
    };
  }
  componentDidMount() {}

  render() {
    return (
      <div className="page">
        <div className="main">
          <label>用户名:</label>
          <input type="text" name="username" required="required" />
          <label>密码:</label>
          <input type="password" name="password" />
          <button>登陆</button>
        </div>
      </div>
    );
  }
}
