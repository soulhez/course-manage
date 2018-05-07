import React,{Component} from "react";
import {Link, browserHistory} from 'react-router';

class Detail extends Component{

    constructor(props) {
        super(props);
        this.state = {
            info:{}
        };
    }

    toLogin(){
        browserHistory.push("/login");
    }

    toRegister(){
        browserHistory.push("/register");
    }

    logout(){
        this.props.logout();
        browserHistory.push("/");
    }

    componentWillMount() {
       this.state.info=this.props.location.state;
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
            <div>
                <video width="320" height="240" controls="controls">
                    <source src={this.state.info.audio_path} type="video/mp4"/>
                </video>
            </div>
        </div>
    }
}

export default Detail;