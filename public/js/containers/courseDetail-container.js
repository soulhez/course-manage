import {connect} from "react-redux";
import Detail from "../components/courseDetail-component";

const mapStateToProps = (state) =>{
    return {
        loginUser:state.login.loginUser,
        isInsertCommit:state.courseDetail.isInsertCommit,
        commits:state.courseDetail.commits
    }
};

const mapDispatch = (dispatch) =>{
  return {
      addCommit: (data)=>{
          dispatch({type:"ADD_COMMIT",data});
      },
      allCommits:(data) =>{
          dispatch({type:"QUERY_COMMIT",data});
      }
  }
};

export default connect(mapStateToProps,mapDispatch)(Detail);