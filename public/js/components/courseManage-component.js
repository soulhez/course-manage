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

    removeCourse(course_id){
        this.props.removeCourse(course_id);
    }

    componentDidUpdate(){
        this.props.getAllCourse();
    }

    render() {
        return <div >
            <Nav/>
            <div className="col-md-9 col-md-offset-2 container_position" style={{"background":"#F5F5F5"}}>
                <button className="btn btn-default" onClick={this.addCourse.bind(this)}>添加课程资源</button>
                <div>
                    {this.props.allCourses.map((element,index)=>{
                        let location=`../${element.image_path}`;
                        return  <li key={index} className="image_box">
                            <a href="http://www.jikexueyuan.com/course/web/" target="_blank">
                            <img src={location} title={element.title}
                                 alt={element.title} className="img_size"/>
                            </a>
                            <div className="course_title">
                                <div>这是教学视频 </div>
                                <span className="glyphicon glyphicon-trash"  onClick={this.removeCourse.bind(this,element.id)}
                                      style={{"margin-right":"30px","margin-top":"10px"}}>
                                </span>
                                <span className="glyphicon glyphicon-pencil"></span>
                            </div>
                        </li>


                    })}
                </div>
            </div>
        </div>
    }
}

export default CourseManage;