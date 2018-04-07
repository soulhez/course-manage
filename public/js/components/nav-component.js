import React, {Component} from "react";
import {Link, browserHistory} from 'react-router';

class Nav extends Component {
    login(){
        browserHistory.push("/login");
    }

    register(){
        console.log("register");
        browserHistory.push("/register");
    }

    render() {
        return <div>
            <div className="tip">
                <span className="topic">西安邮电大学</span>
                <div id="userInformation">
                    <span className="login" onClick={this.login.bind(this)}>登录</span>
                    <span onClick={this.register.bind(this)}>注册</span>
                </div>
                <div id="userInformation">
                    <span className="login">登录</span>
                    <span>登出</span>
                </div>
            </div>
            <div className="theme">
                网络教学平台
            </div>
        </div>
    }
}

export default Nav;