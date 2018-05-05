import {connect} from "react-redux";
import CourseManage from "../components/courseManage-component";

const mapStateToProps = (state) => {
    console.log(state);
    return {
        allCourses: state.courseManage.allCourses,
        courseIsRemove:state.courseManage.courseIsRemove
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllCourse: () => {
            dispatch({type: "COURSE_QUERY"});
        },
        removeCourse: (course_id) => {
            dispatch({type:"COURSE_REMOVE",course_id});
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(CourseManage)