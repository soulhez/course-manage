module.exports = ((state = {judge: "", loginUser: "", identity: ""}, action)=> {
    switch (action.type) {
        case "LOGIN_CHECK": {
            return ({
                judge: action.judge.isTrue,
                loginUser: action.judge.user,
                identity: action.judge.identity
            });
        }
        case "LOGOUT_CHECK": {
            return ({loginUser: action.user});
        }
        default:
            return state;
    }
});