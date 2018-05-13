import React, {Component} from "react";
import {Link, browserHistory} from 'react-router';
import CourseManage from "../containers/courseManage-container"

class Home extends Component {

    componentWillMount() {
        this.props.getAllCourse("all");
    }


    render() {
        return <div>
          <CourseManage/>
        </div>
    }
}

export default Home;