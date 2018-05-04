import React, {Component} from "react";
import {Link, browserHistory} from 'react-router';
import request from 'superagent';

class AddCourse extends Component{
    goHome(){
        browserHistory.push("/");
    }

    /*

     publishCourse() {
     let course_title = $("#course_title").val();
     let description = $("#course_description").val();
     let teacher = $("#teacher").val();
     let course_duration = $("#course_duration").val();
     let publish_date = $("#publish_date").val();
     let audio_name = $("#upload_course").val();
     if (audio_name.length != 0) {
     var reg = ".*\\.(pdf)";
     // var reg = ".*\\.(MP3|WMA|WAV|APE|OGG|AAC)";
     var r = audio_name.match(reg);
     console.log(r);
     /!* if (r == null) {
     alert("对不起，您的图片格式不正确，请重新上传");
     }*!/
     }
     }
     */

    isChange(id){
        let dom=$("#"+id);
        if (dom[0].files && dom[0].files[0]) {
            console.log("lalal");
            let fileObj = new FileReader();
            fileObj.readAsDataURL(dom[0].files[0]);
        }

        let formData = new FormData();
        formData.append('avatar',dom[0].files[0]);
        request
            .post('/profile')
            .send(formData)
            .end((err,res)=>{
               this.props.fileUpload(res.body.filePath);
            })
    }

    goBack(){
        browserHistory.push("/courseManage");
    }

    publishCourse(){
        let course_title = $("#course_title").val();
        let course_description = $("#course_description").val();
        let course_teacher = $("#course_teacher").val();
        let course_duration = $("#course_duration").val();
        let publish_date = $("#publish_date").val();
        let course_image = $("#course_image").val();
        let course_audio = $("#course_audio").val();
        var image_reg = ".*\\.(jpg|png|gif|JPG|PNG|GIF)";
        var audio_reg = ".*\\.(MP3|WMA|WAV|APE|OGG|AAC)";
        if(course_title === ""){
            $("#warning").html("课程标题不能为空");
        }else if(course_description === ""){
            $("#warning").html("课程描述不能为空");
        }else if( course_teacher === ""){
            $("#warning").html("主讲教师不能为空");
        }else if(course_duration === ""){
            $("#warning").html("课程时长不能为空");
        }else if(course_image.match(image_reg) == null){
            $("#warning").html("请上传正确格式文件");
        }else if(course_audio.match(audio_reg) == null){
            $("#warning").html("请上传正确格式文件");
        }else{

        }
    }

    render(){
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
                        <input type="text" className="form-control input_size" placeholder="以‘分钟’计算" id="course_duration"/>
                    </div>
                    <div className="course_input">
                        <label className="label_position">发布日期：</label>
                        <input type="date" className="form-control input_size" id="publish_date"/>
                    </div>
                    <form className="course_input">
                        <label className="label_position">上传图片：</label>
                        <input type="file" className="form-control input_size"
                               id="course_image"  ref="resume"
                               onChange={this.isChange.bind(this,"course_image")}/>
                    </form>
                    <form className="course_input">
                        <label className="label_position">上传视频：</label>
                        <input type="file" className="form-control input_size"
                               id="course_audio"   ref="course_audio"
                               onChange={this.isChange.bind(this,"course_audio")}/>
                    </form>
                    <div className="form-inline button_group">
                        <button className="btn btn-default" style={{"margin-right":"70px"}} onClick={this.goBack.bind(this)}>返回</button>
                        <button className="btn btn-info" onClick={this.publishCourse.bind(this)}>发布</button>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default AddCourse;