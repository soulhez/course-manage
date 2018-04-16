import React, {Component} from "react";
import Nav from "../containers/nav-container";
import {Link, browserHistory} from 'react-router';

class Register extends Component {

    goHome(){
        browserHistory.push("/");
    }

    register() {
        let username = $("#register_name").val();
        let password = $("#register_password").val();
        let re_password = $("#register_re_password").val();
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
        return <div className="back">
            <div className="tip">
                <span className="topic">西安邮电大学</span>
                <div id="userInformation">
                    <span className="login link" onClick={this.goHome.bind(this)}>首页</span>
                </div>
            </div>
            <div className="register_body">
                <div className="form-inline">
                    <div className="title_style">
                        用户注册
                    </div>
                    <div>
                        <span className="warning-tip" id="warning"></span>
                    </div>
                    <div className="register_input">
                        <input type="text" className="form-control input_size" id="register_name" placeholder="用户名"/>
                    </div>
                    <div className="register_input">
                        <input type="text" className="form-control input_size" id="register_password" placeholder="密码"/>
                    </div>
                    <div className="register_input">
                        <input type="text" className="form-control input_size" id="register_re_password" placeholder="确认密码"/>
                    </div>
                    <div className="identity-style">
                        <input type="radio" value="S" name="login_identity"/><span className="radio-position">学生</span>
                        <input type="radio" value="T" name="login_identity"/><span className="radio-position">教师</span>
                    </div>
                    <div className="register_input">
                        <input type="text" className="form-control input_size btn btn-info" id="login_password" value="注册" onClick={this.register.bind(this)}/>
                    </div>
                    <div className="jump_tip">
                        已有帐号，去<a href="/login">登录</a>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Register;