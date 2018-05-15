import React, {Component} from "react";
import {Link, browserHistory} from "react-router";

class Nav extends Component {

    constructor(props){
        super(props);
        this.state={
            user_name:""
        }
    }

    toLogin() {
        browserHistory.push("/login");
    }

    toRegister() {
        browserHistory.push("/register");
    }

    logout() {
        this.props.logout();
        browserHistory.push("/login");
    }

    componentWillMount(){
        this.props.onCourseType("all");
        $("#home").addClass("focus_color");
      $(function () {
            $('.nav_group').on('click','.nav_item',function(){
                $(this).addClass("focus_color").siblings().removeClass("focus_color");
            });
        });
    }


    userManage() {
        browserHistory.push("/userManage");
        $("#user_manage").addClass("focus_color");
    }

    courseManage(type) {
        this.props.onCourseType(type);
        browserHistory.push("/");
        $("#course_manage").addClass("focus_color");
    }

    switchCourse(type){
        this.props.onCourseType(type);
        browserHistory.push("/");
    }


    componentDidUpdate(){
        let cookies={};
        document.cookie.split(";").forEach((cookie)=>{
            let parts=cookie.split("=");
            cookies[parts[0].trim()] = parts[1].trim();
        });
        this.state.user_name=cookies.user;
    }

    render() {
        return <div>
            <div className="tip">
                <span className="topic">西安邮电大学</span>
                <div id="userInformation" className={this.props.loginUser ? 'hidden' : ''}>
                    <span className="login link" onClick={this.toLogin.bind(this)}>登录</span>
                    <span className="link" onClick={this.toRegister.bind(this)}>注册</span>
                </div>
                <div id="userInformation" className={this.props.loginUser ? '' : 'hidden'}>
                    <span className="login">{this.props.loginUser + ', 你好！'}</span>
                    <span className="link" onClick={this.logout.bind(this)}>登出</span>
                </div>
            </div>
            <div className="nav_position">
                <ul className="nav_group">
                    <li className="nav_item">
                        <div className="nav_group_item"  id="home" onClick={this.switchCourse.bind(this,"all")}>
                            <span>系统首页</span>
                            <span className="glyphicon glyphicon-chevron-right"></span>
                        </div>
                    </li>
                    <li className="nav_item">
                        <div  className="nav_group_item" id="quality"   onClick={this.switchCourse.bind(this,"quality")}>
                            <span>精品课程</span>
                            <span className="glyphicon glyphicon-chevron-right"></span>
                        </div>
                    </li>
                    <li className="nav_item">
                        <div className="nav_group_item"  id="chaoxing" onClick={this.switchCourse.bind(this,"chaoxing")}>
                            <span>尔雅通识</span>
                            <span className="glyphicon glyphicon-chevron-right"></span>
                        </div>
                    </li>
                    <li className={(this.props.identity === "M" && !this.state.user_name)? '' : 'hidden'}>
                        <div className="nav_group_item" id="user_manage" onClick={this.userManage.bind(this)}>
                            <span>用户管理</span>
                            <span className="glyphicon glyphicon-chevron-right"></span>
                        </div>
                    </li>
                    <li className={(this.props.identity === "M" && !this.state.user_name)? '' : 'hidden'}>
                        <div className="nav_group_item" id="course_manage" onClick={this.courseManage.bind(this,"all")}>
                            <span>课程管理</span>
                            <span className="glyphicon glyphicon-chevron-right"></span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="table_position">
            </div>
            {/*为了消除左侧导航栏对右侧内容的影响*/}
        </div>
    }
}

export default Nav;