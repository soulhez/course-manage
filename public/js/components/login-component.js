import React, {Component} from "react";
import Nav from "../containers/nav-container";
import {Link, browserHistory} from 'react-router';

class Login extends Component {
    submitLogin(){
        let userName=$("#username").val();
        let passWord=$("#password").val();
        let identity=$("input[type=radio]:checked").val();

        if(userName === ""){
           alert("用户名不能为空");
        }else if(passWord === ""){
           alert("密码不能为空");
        }else if(identity === ""){
            alert("请选择登录身份");
        }else{
            this.props.onJudge({userName,passWord,identity});
        }
    }

    componentDidUpdate(){
        var isRight=this.props.isRight;
        if(isRight === "0"){
            $('input[id=username]').val("");
            $('input[id=username]').focus();
           alert( "用户不存在");
        }else if(isRight === "-1"){
            $('input[id=password]').val("");
            $('input[id=password]').focus();
            alert("密码错误");
        }else if(isRight === "-2"){
            $('input[name=identity]').attr("checked",false);
            alert("身份验证失败");
        }else{
            browserHistory.push('/home');
        }
    }


    render() {
        return <div>
             <Nav/>
            <div className="login-container">
                <div className="login-putin" classID="isLogin">
                    <div className="tab-body">
                        <div className="input-container">
                            <input type="text" id="username" className="input-style " placeholder="用户名"/>
                        </div>
                        <div className="input-container">
                            <input type="password" id="password" placeholder="密码" className="input-style"/>
                        </div>
                        <form className="identity-style">
                            <input type="radio" value="S" name="identity"/><span className="radio-position">学生</span>
                            <input type="radio" value="T" name="identity"/><span className="radio-position">教师</span>
                        </form>
                        <input type="submit" value="登录" className="submit-button" onClick={this.submitLogin.bind(this)}/>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Login;