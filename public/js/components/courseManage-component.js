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
        if(this.props.courseIsModify){
            alert("修改成功！");
        }
    }

    fillData(data){
        $("#course_id").val(data.id);
        $("#course_id").attr("disabled","disabled");
        $("#course_title").val(data.title);
        $("#course_description").val(data.description);
        $("#course_teacher").val(data.teacher);
        $("#course_duration").val(data.duration);
        $("#course_duration").attr("disabled","disabled");
        $("#publish_date").val(data.publish_date);
        $("#publish_date").attr("disabled","disabled");
        $("#image_path").val(data.image_path);
        $("#image_path").attr("disabled","disabled");
        $("#audio_path").val(data.audio_path);
        $("#audio_path").attr("disabled","disabled");
    }

    modifyCourse(){
        let id= $("#course_id").val();
        let title=$("#course_title").val();
        let description=$("#course_description").val();
        let teacher=$("#course_teacher").val();
        let duration=$("#course_duration").val();
        let publish_date=$("#publish_date").val();
        let image_path=$("#image_path").val();
        let audio_path=$("#audio_path").val();
        if(title != "" && description != "" && teacher !=""){
            this.props.editCourse({id,title,description,teacher,duration,publish_date,image_path,audio_path});
        }
    }

    scanDetail(information){
        let path = {
            pathname:'/detail',
            state:information,
        };
            browserHistory.push(path);
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
                                <div onClick={this.scanDetail.bind(this,element)}>{element.title}</div>
                                <span className="glyphicon glyphicon-trash"  onClick={this.removeCourse.bind(this,element.id)}
                                      style={{"margin-right":"30px","margin-top":"10px"}}>
                                </span>
                                <span className="glyphicon glyphicon-pencil" data-toggle="modal" data-target="#modifyCourse"
                                onClick={this.fillData.bind(this,element)}></span>
                            </div>
                        </li>
                    })}
                </div>
            </div>
            <div className="modal fade" tabindex="-1" id="modifyCourse" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
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
                            onClick={this.modifyCourse.bind(this)}>修改</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default CourseManage;