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
                next({type: "QUERY_COMMIT_CHECK", commits: res.body.commits});
            })
    } else if (action.type === "MODIFY_COURSE") {
       request.post("/modifyCourse")
            .send({
                id: action.data.id,
                title: action.data.title,
                description: action.data.description,
                teacher: action.data.teacher
            })
            .end((req, res)=> {
                next({type:"MODIFY_COURSE_CHECK",isModify:res.body});
            })
    }else if(action.type === "QUERY_COURSE_ByID"){
        request.post("/courseById")
            .send({course_id:action.course_id})
            .end((req,res)=>{
               next({type:"QUERY_COURSE_ByID_CHECK",course_by_id:res.body.info});
            })
    }
    else {
        next(action);
    }
}