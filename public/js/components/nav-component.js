import React, {Component} from "react";
import {Link, browserHistory} from 'react-router';

class Nav extends Component {

    goHome(){
        browserHistory.push('/');
    }

    render() {
        return <div>
            <div className="tip">
                <span className="topic">西安邮电大学</span>
                <div id="userInformation">
                    <span onClick={this.goHome.bind(this)} className="link">首页</span>
                </div>
               {/* <div id="userInformation" className = {this.props.loginUser ?'':'hidden'}>
                    <span className="login">{this.props.loginUser+', 你好！'}</span>
                   <span onClick={this.logout.bind(this)}>登出</span>
                </div>*/}
            </div>
            <div className="theme">
               欢迎访问 <br/>
                网络教学系统
            </div>
        </div>
    }
}

export default Nav;