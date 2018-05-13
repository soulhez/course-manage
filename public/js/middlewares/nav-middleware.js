import request from "superagent";

export default store => next => action => {
    if (action.type === "LOGOUT") {
        request.post("/logout")
            .send()
            .end((err, res)=> {
                next({type: "LOGOUT_CHECK", user: res.body.user});
            })
    } else {
        next(action);
    }
}