import {connect} from "react-redux";
import CourseManage from "../components/courseManage-component";

const mapStateToProps = (state) => {
    console.log(state);
     return {
       allCourses:state.courseManage.allCourses
     };
};

const mapDispatchToProps = (dispatch) =>{
    return {
        getAllCourse:()=>{
            dispatch({type:"COURSE_QUERY"});
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(CourseManage)