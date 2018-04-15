import Login from "../components/login-component";
import {connect} from "react-redux";
const mapStateToProps = (state)=> {
    console.log(state);
    return {
        isRight:state.login.judge,
        loginUser:state.login.loginUser
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onJudge:(data)=>{
            dispatch({type:"LOGIN",data});
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Login);