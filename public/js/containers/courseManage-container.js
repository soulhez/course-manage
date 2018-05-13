import {connect} from "react-redux";
import CourseManage from "../components/courseManage-component";

const mapStateToProps = (state) => {
    return {
        allCourses: state.courseManage.allCourses,
        courseIsRemove: state.courseManage.courseIsRemove,
        courseIsModify: state.courseManage.courseIsModify
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllCourse: () => {
            dispatch({type: "COURSE_QUERY"});
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