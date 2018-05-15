import {connect} from "react-redux";
import CourseManage from "../components/courseManage-component";

const mapStateToProps = (state) => {
    return {
        allCourses: state.courseManage.allCourses,
        courseIsRemove: state.courseManage.courseIsRemove,
        courseIsModify: state.courseManage.courseIsModify,
        courseType:state.courseManage.courseType,
        identity:state.login.identity,
        loginUser: state.login.loginUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllCourse: (course_type) => {
            dispatch({type: "COURSE_QUERY",course_type});
        },
        removeCourse: (course_id) => {
            dispatch({type: "COURSE_REMOVE", course_id});
        },
        editCourse: (data) => {
            dispatch({type: "COURSE_EDIT", data});
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(CourseManage)