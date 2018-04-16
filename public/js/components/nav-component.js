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

    userManage(){
        document.getElementById("user_manage").style.color = "#b4a078";
        browserHistory.push("/userManage");
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
            <div className="nav_position">
                <ul className="nav_group">
                    <li><div className="nav_group_item">
                        <span >系统首页</span>
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    </div>
                    </li>
                    <li><div className="nav_group_item">
                        <span>发布信息</span>
                        <span className="glyphicon glyphicon-chevron-right"></span>
                    </div>
                    </li>
                    <li className={this.props.identity === "S" ? 'hidden' : ''}>
                        <div className="nav_group_item" id="user_manage">
                        <span onClick={this.userManage.bind(this)}>用户管理</span>
                        <span className="glyphicon glyphicon-chevron-right"></span>
                            </div>
                    </li>
                    <li className={this.props.identity === "S" ? 'hidden' : ''}>
                        <div className="nav_group_item">
                            <span>课程管理</span>
                            <span className="glyphicon glyphicon-chevron-right"></span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="table_position"></div>  {/*为了消除左侧导航栏对右侧内容的影响*/}
        </div>
    }
}

export default Nav;