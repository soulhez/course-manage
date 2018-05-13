import React, {Component} from "react";
import {Link, browserHistory} from 'react-router';

class Login extends Component {

    goHome() {
        browserHistory.push("/");
    }

    submitLogin() {
        let userName = $("#login_name").val();
        let passWord = $("#login_password").val();
        let identity = $("input[type=radio]:checked").val();

        if (userName === "") {
            $("#warning").html("用户名不能为空");
        } else if (passWord === "") {
            $("#warning").html("密码不能为空");
        } else if (identity === "") {
            $("#warning").html("请选择登录身份");
        } else {
            this.props.onJudge({userName, passWord, identity});
        }
    }

    componentWillMount() {
        $("#username").attr("value", null);
        $("#password").attr("value", null);
    }

    componentDidUpdate() {
        let isRight = this.props.isRight;
        if (isRight === "0") {
            $('input[id=username]').val("");
            $('input[id=username]').focus();
            $("#warning").html("用户不存在");
        } else if (isRight === "-1") {
            $('input[id=password]').val("");
            $('input[id=password]').focus();
            $("#warning").html("密码错误");
        } else if (isRight === "-2") {
            $('input[name=identity]').attr("checked", false);
            $("#warning").html("身份验证失败");
        } else {
            browserHistory.push('/');
        }
    }


    render() {
        return <div>
            <div className="tip">
                <span className="topic">西安邮电大学</span>
                <div id="userInformation">
                    <span className="login link" onClick={this.goHome.bind(this)}>首页</span>
                </div>
            </div>
            <div className="login-container">
                <div className="login-putin" classID="isLogin">
                    <div className="tab-body">
                        <div className="login-tip">用户登录</div>
                        <div>
                            <span className="warning-tip" id="warning"></span>
                        </div>
                        <div className="form-inline">
                            <div className="input-container">
                                <input type="text" className="form-control login_input_size" id="login_name"
                                       placeholder="用户名"/>
                            </div>
                            <div className="input-container">
                                <input type="text" className="form-control login_input_size" id="login_password"
                                       placeholder="密码"/>
                            </div>
                            <div className="login_identity_style">
                                <input type="radio" value="S" name="identity"/><span
                                className="radio-position">学生</span>
                                <input type="radio" value="T" name="identity"/><span
                                className="radio-position">教师</span>
                            </div>
                            <div className="input-container">
                                <input type="text" className="form-control login_input_size btn btn-info"
                                       id="login_password" value="登录"
                                       onClick={this.submitLogin.bind(this)}/>
                            </div>
                        </div>
                        <div className="login_jump_tip">
                            还没有帐号？去<a href="/register">注册</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="theme">
                欢迎访问 <br/>
                网络教学系统
            </div>
        </div>;
    }
}

export default Login;