import {connect} from "react-redux";
import Home from "../components/home-component";

const mapStateToProps = (state)=> {
    return {
        loginUser: state.login.loginUser,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {}
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

