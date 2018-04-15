import React, {Component} from "react";
import {Link,browserHistory} from "react-router";

class Nav extends Component{
    toLogin(){
        browserHistory.push("/login");
    }

    toRegister(){
        browserHistory.push("/register");
    }

    logout(){
        this.props.logout();
       // browserHistory.push("/");
    }
    render(){
        return <div>
            <div className="tip">
                <span className="topic">西安邮电大学</span>
                <div id="userInformation" className={this.props.loginUser ?'hidden':''}>
                    <span className="login link" onClick={this.toLogin.bind(this)}>登录</span>
                    <span className="link" onClick={this.toRegister.bind(this)}>注册</span>
                </div>
                <div id="userInformation" className = {this.props.loginUser ?'':'hidden'}>
                    <span className="login">{this.props.loginUser+', 你好！'}</span>
                    <span className="link" onClick={this.logout.bind(this)}>登出</span>
                </div>
            </div>
        </div>
    }
}

export default Nav;