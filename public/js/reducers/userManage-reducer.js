module.exports = ((state = {allUsers: []}, action)=> {
    switch (action.type) {
        case "USERS_QUERY_CHECK": {
            return ({allUsers: action.allUsers.users});
        }
        default:
            return state;
    }
});