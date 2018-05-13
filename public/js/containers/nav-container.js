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
       }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Nav);
