import React, {Component} from "react";
import {Link, browserHistory} from 'react-router';
import Nav from "../containers/nav-container"

class Home extends Component {

    render() {
        return <div>
            <Nav/>
            <div>
                <ul className="tabs">
                    <li><span className="tab_style">首页</span></li>
                    <li><span className="tab_style">发布信息</span></li>
                    <li><span className="tab_style">用户管理</span></li>
                </ul>
            </div>
        </div>
    }
}

export default Home;