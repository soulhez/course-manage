import UserManage from "../components/userManage-component";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        allUsers: state.userManage.allUsers,
        userIsRemove:state.userManage.userIsRemove,
        userIsModify:state.userManage.userIsModify
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllUsers: () => {
            dispatch({type: "USERS_QUERY"});
        },
        onRemove: (data)=> {
            dispatch({type:"USER_REMOVE",data});
        },
        onModifyUser:(data) =>{
            console.log(data);
            dispatch({type:"USER_MODIFY",data});
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(UserManage);