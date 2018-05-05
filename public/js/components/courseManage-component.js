import React, {Component} from "react";
import Nav from "../containers/nav-container";
import {Link, browserHistory} from 'react-router';

class CourseManage extends Component {

    addCourse(){
        browserHistory.push("/addCourse");
    }

    componentWillMount() {
        this.props.getAllCourse();
    }

    render() {
        return <div>
            <Nav/>
            <div className="col-md-8 col-md-offset-2 container_position">
                <button className="btn btn-default" onClick={this.addCourse.bind(this)}>添加课程资源</button>
                <div>

                </div>
            </div>
        </div>
    }
}

export default CourseManage;