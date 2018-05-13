module.exports = ((state = {allUsers: [], userIsRemove: "", userIsModify: ""}, action)=> {
    switch (action.type) {
        case "USERS_QUERY_CHECK": {
            state.allUsers = action.allUsers.users;
            return Object.assign({}, state);
        }
        case "USER_REMOVE_CHECK": {
            state.userIsRemove = action.userIsRemove;
            return Object.assign({}, state);
        }
        case "USER_MODIFY_CHECK": {
            state.userIsModify = action.userIsModify;
            return Object.assign({}, state);
        }
        default:
            return state;
    }
});