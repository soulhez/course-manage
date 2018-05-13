import React, {Component} from "react";
import {Link, browserHistory} from 'react-router';
import Nav from "../containers/nav-container"

class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            info: {},
            tag: 1
        };
    }

    componentWillMount() {
        this.state.info = this.props.location.state;
        this.props.allCommits(this.state.info.id);
        this.props.queryCourseById(this.state.info.id);
    }

    courseDetail() {
        $("#detail").show();
        $("#commit").hide();
        $(`li[id=commit_tab]`).attr("class", "tab_style");
        $(`li[id=detail_tab]`).attr("class", "border_style");
    }

    courseCommit() {
        $(`li[id=commit_tab]`).removeAttr("hidden");
        $(`li[id=detail_tab]`).attr("class", "tab_style");
        $(`li[id=commit_tab]`).attr("class", "border_style");
        $("#detail").hide();
        $("#commit").show();
    }

    publishCommit(){
        let user_name=this.props.loginUser;
        let course_id=this.state.info.id;
        let content=$("#course_commit").val();
        this.props.addCommit({user_name,course_id,content});
    }

    componentDidUpdate(){
        if(this.props.isInsertCommit === true){
            alert("添加评论成功");
        }
        this.props.queryCourseById(this.state.info.id);
    }


    fillData(){
        let data=this.state.info;
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
        if(title != "" && description != "" && teacher !=""){
            this.props.modifyCourse({id,title,description,teacher});
        }
    }

    render() {
        return <div>
            <Nav/>
            <div className="col-md-7 col-md-offset-3 container_position">
                <div className="course_detail_title">{this.props.course_by_id.title}</div>
                <video width="100%" height="100%" controls="controls">
                    <source src={this.props.course_by_id.audio_path} type="video/mp4"/>
                </video>
                <div>
                    <ul className="tabs">
                        <li className="tab_style border_style" onClick={this.courseDetail.bind(this)} id="detail_tab">
                            <strong>课程信息</strong></li>
                        <li className="tab_style" onClick={this.courseCommit.bind(this)} id="commit_tab">
                            <strong>我要评论</strong></li>
                    </ul>
                    <div id="detail" className="content_container">
                        <div style={{"font-size": "25px", "margin": "20px 0"}}>{this.props.course_by_id.title}
                        <span className="glyphicon glyphicon-pencil modify_color column_left"
                              onClick={this.fillData.bind(this)}
                              data-toggle="modal" data-target="#modifyCourse"></span>
                        </div>
                        <div>
                            <span className="column_space">{this.props.course_by_id.duration}分钟</span>
                            <span>{this.props.course_by_id.publish_date}</span>
                        </div>
                        <div className="row_space"><strong>课程简介：
                        </strong>{this.props.course_by_id.description}
                        </div>
                        <div className="row_space"><strong>教师团队：</strong>
                            {this.props.course_by_id.teacher}
                        </div>
                    </div>
                    <div id="commit" hidden="hidden" className="content_container">
                       <button className="commit_button" data-toggle="modal" data-target="#publishCommit">发布评论</button>
                        {this.props.commits.map((element,index)=>{
                             return <div key={index} className="commit_container">
                                  <div className="row_space">
                                      <span className="column_space">{element.user_name}</span>
                                  <span>{element.commit_date}</span>
                                  </div>
                                 <div className="row_space">
                                     {element.content}
                                 </div>
                              </div>
                        })}
                    </div>
                </div>
            </div>
            <div className="modal fade" id="publishCommit" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">添加新评论</h4>
                        </div>
                        <div className="modal-body">
                            <form className="form-horizontal col-md-offset-1">
                                <div className="form-group">
                                    <label className="col-md-3 control-label">评论详情：</label>
                                    <div className="col-md-7">
                                        <textarea cols="47" rows="10" className="form-control"
                                                  id="course_commit"></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal"
                            onClick={this.publishCommit.bind(this)}>发表</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="modifyCourse" role="dialog">
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
                            <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal"
                                    onClick={this.modifyCourse.bind(this)}>修改</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Detail;