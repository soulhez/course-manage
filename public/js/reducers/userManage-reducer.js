module.exports = ((state = {allUsers: []}, action)=> {
    switch (action.type) {
        case "USERS_QUERY_CHECK": {
            state.allUsers = action.allUsers.users;
            return Object.assign({}, state);
        }
        default:
            return state;
    }
});