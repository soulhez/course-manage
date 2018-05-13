import {connect} from "react-redux";
import Detail from "../components/courseDetail-component";

const mapStateToProps = (state) => {
    return {
        loginUser: state.login.loginUser,
        isInsertCommit: state.courseDetail.isInsertCommit,
        commits: state.courseDetail.commits,
        courseIsModify: state.courseDetail.courseIsModify,
        course_by_id: state.courseDetail.course_by_id
    }
};

const mapDispatch = (dispatch) => {
    return {
        addCommit: (data)=> {
            dispatch({type: "ADD_COMMIT", data});
        },
        allCommits: (data) => {
            dispatch({type: "QUERY_COMMIT", data});
        },
        modifyCourse: (data) => {
            dispatch({type: "MODIFY_COURSE", data});
        },
        queryCourseById: (course_id)=> {
            dispatch({type: "QUERY_COURSE_ByID", course_id});
        }
    }
};

export default connect(mapStateToProps, mapDispatch)(Detail);