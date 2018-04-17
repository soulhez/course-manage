import UserManage from "../components/userManage-component";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        allUsers: state.userManage.allUsers,
        userIsRemove:state.userManage.userIsRemove
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllUsers: () => {
            dispatch({type: "USERS_QUERY"});
        },
        onRemove: (data)=> {
            dispatch({type:"USER_REMOVE",data});
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(UserManage);