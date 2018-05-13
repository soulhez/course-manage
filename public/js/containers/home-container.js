import {connect} from "react-redux";
import Home from "../components/home-component";

const mapStateToProps = (state)=> {
    return {
        loginUser: state.login.loginUser,
        allCourses: state.courseManage.allCourses,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getAllCourse: () => {
            dispatch({type: "COURSE_QUERY"});
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

