import React, {Component} from "react";
import {Link, browserHistory} from 'react-router';
import Nav from "../containers/nav-container"

class Home extends Component {

    userManage(){
        browserHistory.push("/userManage");
    }

    render() {
        return <div>
            <Nav/>
            <div>
                <ul className="tabs">
                    <li><span className="tab_style">首页</span></li>
                    <li><span className="tab_style">发布信息</span></li>
                    <li className={this.props.identity === "S" ? 'hidden' : ''}>
                        <span className="tab_style" onClick={this.userManage.bind(this)}>用户管理</span></li>
                    <li className={this.props.identity === "S" ? 'hidden' : ''}>
                        <span className="tab_style">课程管理</span>
                    </li>
                </ul>
            </div>
        </div>
    }
}

export default Home;