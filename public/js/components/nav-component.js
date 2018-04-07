import React, {Component} from "react";

class Nav extends Component {
    render() {
        return <div>
            <div className="tip">
                <span className="topic">西安邮电大学</span>
                <div id="userInformation">
                    <span className="login">登录</span>
                    <span>注册</span>
                </div>
            </div>
            <div className="theme">
                网络教学平台
            </div>
        </div>
    }
}

export default Nav;