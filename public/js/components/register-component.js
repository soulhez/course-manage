import React, {Component} from "react";
import Nav from "../containers/nav-container";

class Register extends Component {
    render() {
        return <div>
            <Nav/>
            <div className="login-container">

                <div className="login-putin" classID="isLogin">
                    <div className="tab-body">
                        <div className="login-tip">
                            用户注册
                        </div>
                        <div className="input-container">
                            <input type="text" id="username" className="input-style " placeholder="用户名"/>
                        </div>
                        <div className="input-container">
                            <input type="password" id="password" placeholder="密码" className="input-style"/>
                        </div>
                        <div className="input-container">
                            <input type="password" id="password" placeholder="确认密码" className="input-style"/>
                        </div>
                        <form className="identity-style">
                            <input type="radio" value="学生" name="identity"/><span className="radio-position">学生</span>
                            <input type="radio" value="教师" name="identity"/><span className="radio-position">教师</span>
                        </form>
                        <input type="submit" value="登录" className="submit-button"/>
                        <div className="jump-tip">
                            已有帐号，去<a href="/login">登录</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Register;