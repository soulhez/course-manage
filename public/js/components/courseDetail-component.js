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

    render() {
        return <div>
            <Nav/>
            <div className="col-md-7 col-md-offset-3 container_position">
                <div className="course_detail_title">{this.state.info.title}</div>
                <video width="100%" height="100%" controls="controls">
                    <source src={this.state.info.audio_path} type="video/mp4"/>
                </video>
                <div>
                    <ul className="tabs">
                        <li className="tab_style border_style" onClick={this.courseDetail.bind(this)} id="detail_tab">
                            <strong>课程信息</strong></li>
                        <li className="tab_style" onClick={this.courseCommit.bind(this)} id="commit_tab">
                            <strong>我要评论</strong></li>
                    </ul>
                    <div id="detail" style={{"padding-top": "30px"}}>
                        <div style={{"font-size": "25px", "margin-top": "20px"}}>{this.state.info.title}</div>
                        <div>
                            <span style={{"display": "inline_block", "margin-right": "50px"}}>{this.state.info.duration}分钟</span>
                            <span>{this.state.info.publish_date}</span>
                        </div>
                        <div style={{ "margin": "10px 0"}}><strong>课程简介：</strong>{this.state.info.description}</div>
                        <div style={{ "margin": "10px 0"}}><strong>教师团队：</strong>{this.state.info.teacher}</div>
                    </div>
                    <div id="commit" hidden="hidden" style={{"padding-top": "30px"}}>
                       <button className="commit_button">发布评论</button>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Detail;