import React, {Component} from "react";
import Nav from "../containers/nav-container";
import {Link, browserHistory} from 'react-router';

class Register extends Component {

    register() {
        let username = $("#username").val();
        let password = $("#password").val();
        let re_password = $("#re_password").val();
        let identity=$("input[type='radio']:checked").val();

        if(username === ""){
            $("#warning").html("请输入用户名！");
        }else if(password === ""){
            $("#warning").html("请输入密码！");
        }else if(re_password === ""){
            $("#warning").html("请输入确认密码！");
        }else if(password !== re_password){
            $("#warning").html("密码不一致，请重新输入！");
        }else if(identity === ""){
            $("#warning").html("请选择注册身份");
        }else{
            this.props.onRegister({username,password,identity});
        }

    }

    componentDidUpdate(){
        let isInsert=this.props.isInsert;
        if(isInsert){
            browserHistory.push('/');
        }else{
            $("#warning").html("注册失败");
        }
    }


    render() {
        return <div>
            <Nav/>
            <div className="login-container">

                <div className="login-putin" classID="isLogin">
                    <div className="tab-body">
                        <div className="login-tip">
                            用户注册
                        </div>
                        <div>
                            <span className="warning-tip" id="warning"></span>
                        </div>
                        <div className="input-container">
                            <input type="text" id="username" className="input-style " placeholder="用户名"/>
                        </div>
                        <div className="input-container">
                            <input type="password" id="password" placeholder="密码" className="input-style"/>
                        </div>
                        <div className="input-container">
                            <input type="password" id="re_password" placeholder="确认密码" className="input-style"/>
                        </div>
                        <form className="identity-style">
                            <input type="radio" value="S" name="identity"/><span className="radio-position">学生</span>
                            <input type="radio" value="T" name="identity"/><span className="radio-position">教师</span>
                        </form>
                        <input type="submit" value="注册" className="submit-button" onClick={this.register.bind(this)}/>
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