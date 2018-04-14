import Nav from "../components/nav-component";
import {connect} from "react-redux";

const mapStateToProps = (state)=> {
    return {
        loginUser:state.login.loginUser
    }
};
const mapDispatchToProps = (dispatch) => {
    return {

    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Nav);
