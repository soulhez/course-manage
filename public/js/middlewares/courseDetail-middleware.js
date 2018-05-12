import request from "superagent";

export default store => next => action => {
    if (action.type === "ADD_COMMIT") {
        request.post("/insertCommit")
            .send({
                user_name: action.data.user_name,
                course_id: action.data.course_id,
                commit_content: action.data.content
            })
            .end((req, res)=> {
                next({type: "ADD_COMMIT_CHECK", isInsertCommit: res.body});
            })
    } else if (action.type === "QUERY_COMMIT") {
        request.post("/allCommits")
            .send({course_id: action.data})
            .end((req, res)=> {
                console.log(res.body);
                next({type:"QUERY_COMMIT_CHECK",commits:res.body.commits});
            })
    }
    else {
        next(action);
    }
}