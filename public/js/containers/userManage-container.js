import UserManage from "../components/userManage-component";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        allUsers:state.userManage.allUsers
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllUsers: () => {
            dispatch({type:"USERS_QUERY"});
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(UserManage);