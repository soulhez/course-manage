import Nav from "../components/nav-component";
import {connect} from "react-redux";

const mapStateToProps = (state)=> {
    return {
        loginUser: state.login.loginUser,
        identity:state.login.identity
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
       logout:()=>{
          dispatch({type:"LOGOUT"});
       },
        onCourseType:(course_type)=>{
            dispatch({type:"COURSE_TYPE",course_type});
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Nav);
