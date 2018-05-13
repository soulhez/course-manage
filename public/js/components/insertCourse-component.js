import React, {Component} from "react";
import {Link, browserHistory} from 'react-router';
import request from 'superagent';

class InsertCourse extends Component {
    goHome() {
        browserHistory.push("/");
    }

    isChange(id) {
        let dom = $("#" + id);
        if (dom[0].files && dom[0].files[0]) {
            let fileObj = new FileReader();
            fileObj.readAsDataURL(dom[0].files[0]);
        }

        let formData = new FormData();
        formData.append('avatar', dom[0].files[0]);
        if (id === "course_image") {
            request
                .post('/image')
                .send(formData)
                .end((err, res)=> {
                    this.props.imageUpload(res.body.filePath);
                })
        }
    }

    goBack() {
        browserHistory.push("/courseManage");
    }

    componentDidUpdate() {
        let isAdd = this.props.isAdd;
        if (isAdd) {
            alert("添加成功");
            browserHistory.push("/courseManage");
        } else if (isAdd === false) {
            alert("添加失败");
        }
    }

    publishCourse() {
        let course_title = $("#course_title").val();
        let course_description = $("#course_description").val();
        let course_teacher = $("#course_teacher").val();
        let course_duration = $("#course_duration").val();
        let publish_date = $("#publish_date").val();
        let course_image = $("#course_image").val();
        let course_audio = $("#course_detail").val();
        let course_type=$("#course_type").val();
        let image_path = this.props.imagePath;
        var image_reg = ".*\\.(jpg|png|gif|JPG|PNG|GIF)";
        if (course_title === "") {
            $("#warning").html("课程标题不能为空");
        } else if (course_description === "") {
            $("#warning").html("课程描述不能为空");
        } else if (course_teacher === "") {
            $("#warning").html("主讲教师不能为空");
        } else if (course_duration === "") {
            $("#warning").html("课程时长不能为空");
        } else if (course_image.match(image_reg) == null) {
            $("#warning").html("请上传正确格式文件");
        } else if (course_detail === "") {
            $("#warning").html("详情地址不能为空");
        } else if(course_type === ""){
            $("#warning").html("课程类别不能为空");
        } else{
            this.props.addCourse({
                course_title, course_description, course_teacher,
                course_duration, publish_date, image_path, course_audio,course_type
            });
        }
    }

    render() {
        return <div>
            <div className="tip">
                <span className="topic">西安邮电大学</span>
                <div id="userInformation">
                    <span className="login link" onClick={this.goHome.bind(this)}>首页</span>
                </div>
            </div>
            <div className="course_body">
                <div className="form-inline">
                    <div className="title_style">
                        添加课程
                    </div>
                    <div>
                        <span className="warning-tip" id="warning"></span>
                    </div>
                    <div className="course_input">
                        <label className="label_position">课程标题：</label>
                        <input type="text" className="form-control input_size" id="course_title"/>
                    </div>
                    <div className="course_input">
                        <label className="label_position">课程简介：</label>
                        <textarea cols="47" rows="10" className="form-control" id="course_description"></textarea>
                    </div>
                    <div className="course_input">
                        <label className="label_position">主讲教师：</label>
                        <input type="text" className="form-control input_size" id="course_teacher"/>
                    </div>
                    <div className="course_input">
                        <label className="label_position">课程时长：</label>
                        <input type="text" className="form-control input_size" placeholder="以‘分钟’计算"
                               id="course_duration"/>
                    </div>
                    <div className="course_input">
                        <label className="label_position">课程类别：</label>
                        <input type="text" className="form-control input_size" placeholder="“精品课程”或“尔雅课程”"
                               id="course_type"/>
                    </div>
                    <div className="course_input">
                        <label className="label_position">课程详情：</label>
                        <input type="text" className="form-control input_size" placeholder="课程详情地址"
                               id="course_detail"/>
                    </div>
                    <div className="course_input">
                        <label className="label_position">发布日期：</label>
                        <input type="date" className="form-control input_size" id="publish_date"/>
                    </div>
                    <form className="course_input">
                        <label className="label_position">上传图片：</label>
                        <input type="file" className="form-control input_size"
                               id="course_image" ref="resume"
                               onChange={this.isChange.bind(this, "course_image")}/>
                    </form>
                    <div className="form-inline button_group">
                        <button className="btn btn-default" style={{"margin-right": "70px"}}
                                onClick={this.goBack.bind(this)}>返回
                        </button>
                        <button className="btn btn-info" onClick={this.publishCourse.bind(this)}>发布</button>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default InsertCourse;