import React, {Component} from "react";
import Nav from "../containers/nav-container";
import {Link, browserHistory} from 'react-router';

class CourseManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user_name: "",
            isHidden: false,
        };
    }


    addCourse() {
        if (this.props.courseType === "chaoxing") {
            browserHistory.push("/insertCourse");
        } else {
            browserHistory.push("/addCourse");
        }

    }

    removeCourse(course_id) {
       /* if (this.props.identity === "S") {
            alert("不可操作");
        } else if (this.state.user_name === "") {
            alert("未登录不可操作");
        } else {

        }*/
        this.props.removeCourse(course_id);
    }

    componentWillMount() {
        this.props.getAllCourse(this.props.courseType);
        let cookies = {};
        document.cookie.split(";").forEach((cookie)=> {
            let parts = cookie.split("=");
            cookies[parts[0].trim()] = parts[1].trim();
        });
        this.state.user_name = cookies.user;
        if(this.props.identity === "S" || this.state.user_name === ""){
            this.state.isHidden=true;
        }


    }


    fillData(data) {
        $("#course_id").val(data.id);
        $("#course_id").attr("disabled", "disabled");
        $("#course_title").val(data.title);
        $("#course_description").val(data.description);
        $("#course_teacher").val(data.teacher);
        $("#course_duration").val(data.duration);
        $("#course_duration").attr("disabled", "disabled");
        $("#publish_date").val(data.publish_date);
        $("#publish_date").attr("disabled", "disabled");
        $("#image_path").val(data.image_path);
        $("#image_path").attr("disabled", "disabled");
        $("#audio_path").val(data.audio_path);
        $("#audio_path").attr("disabled", "disabled");
    }

    modifyCourse() {
        let id = $("#course_id").val();
        let title = $("#course_title").val();
        let description = $("#course_description").val();
        let teacher = $("#course_teacher").val();
        let duration = $("#course_duration").val();
        let publish_date = $("#publish_date").val();
        let image_path = $("#image_path").val();
        let audio_path = $("#audio_path").val();
      /*  if (this.props.identity === "S") {
            alert("不可操作");
        } else if (this.state.user_name === "") {
            alert("未登录不可操作");
        } else*/ if (title != "" && description != "" && teacher != "") {
            this.props.editCourse({id, title, description, teacher, duration, publish_date, image_path, audio_path});
        }
    }

    scanDetail(information) {
        let path = {
            pathname: '/detail',
            state: information,
        };
        browserHistory.push(path);
    }

    componentDidUpdate() {
        this.props.getAllCourse(this.props.courseType);
        if (this.props.courseIsModify) {
            alert("修改成功！");
        }
        if (this.props.identity === "M" && this.state.user_name) {
            $("#list_container").attr("class", "col-md-9 col-md-offset-2 manage_container_position");
        } else {
            $("#list_container").attr("class", "col-md-9 col-md-offset-2 user_container_position");
        }
    }


    render() {
        return <div>
            <Nav/>
            <div style={{"background": "#F5F5F5"}} id="list_container">
                <div className={this.props.courseType==="all"? "hidden" : ""}>
                    <span className="glyphicon glyphicon-plus modify_color" onClick={this.addCourse.bind(this)}
                          style={{"margin-left": "90%", "margin-top": "10px"}}>添加课程</span>
                </div>
                <div>
                    {this.props.allCourses.map((element, index)=> {
                        if (this.props.courseType === "chaoxing") {
                            return <li key={index} className="image_box">
                                <a href={element.audio_path} target="_blank">
                                    <img src={element.image_path} title={element.title}
                                         alt={element.title} className="img_size"/>
                                </a>
                                <div className="course_title">
                                    <a href={element.audio_path}>{element.title}</a>
                                    <div className={this.state.isHidden?"hidden":""}>
                                         <span className="glyphicon glyphicon-trash"
                                               onClick={this.removeCourse.bind(this, element.id)}
                                               style={{"margin-right": "30px", "margin-top": "10px"}}>
                                </span>
                                        <span className="glyphicon glyphicon-pencil modify_color" data-toggle="modal"
                                              data-target="#modifyCourse"
                                              onClick={this.fillData.bind(this, element)}></span>
                                    </div>
                                </div>
                            </li>
                        } else {
                            return <li key={index} className="image_box">
                                <a href="/detail" target="_blank">
                                    <img src={element.image_path} title={element.title}
                                         alt={element.title} className="img_size"/>
                                </a>
                                <div className="course_title">
                                    <div onClick={this.scanDetail.bind(this, element)}>{element.title}</div>
                                    <div  className={this.state.isHidden?"hidden":""}>
                                           <span className="glyphicon glyphicon-trash"
                                                 onClick={this.removeCourse.bind(this, element.id)}
                                                 style={{"margin-right": "30px", "margin-top": "10px"}}>
                                          </span>
                                        <span className="glyphicon glyphicon-pencil modify_color"
                                              data-toggle="modal"
                                              data-target="#modifyCourse"
                                              onClick={this.fillData.bind(this, element)}></span>
                                    </div>

                                </div>
                            </li>
                        }
                    })}
                </div>
            </div>
            <div className="modal fade" id="modifyCourse" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">修改课程信息</h4>
                        </div>
                        <div className="modal-body">
                            <form className="form-horizontal col-md-offset-1">
                                <div className="form-group">
                                    <label className="col-md-3 control-label">课程ID：</label>
                                    <div className="col-md-7">
                                        <input type="text" className="form-control" id="course_id"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 control-label">课程标题：</label>
                                    <div className="col-md-7">
                                        <input type="text" className="form-control" id="course_title"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 control-label">课程描述：</label>
                                    <div className="col-md-7">
                                        <input type="text" className="form-control" id="course_description"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 control-label">教师团队：</label>
                                    <div className="col-md-7">
                                        <input type="text" className="form-control" id="course_teacher"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 control-label">视频时长：</label>
                                    <div className="col-md-7">
                                        <input type="text" className="form-control" id="course_duration"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 control-label">发布日期：</label>
                                    <div className="col-md-7">
                                        <input type="text" className="form-control" id="publish_date"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 control-label">图片地址：</label>
                                    <div className="col-md-7">
                                        <input type="text" className="form-control" id="image_path"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 control-label">视频地址：</label>
                                    <div className="col-md-7">
                                        <input type="text" className="form-control" id="audio_path"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">关闭</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal"
                                    onClick={this.modifyCourse.bind(this)}>修改
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default CourseManage;