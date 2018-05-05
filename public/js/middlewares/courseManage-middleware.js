import request from "superagent";

export default store => next => action =>{
    if(action.type === "COURSE_QUERY"){
        request.post("/allCourses")
            .send()
            .end((err,res) =>{
             next({type:"COURSE_QUERY_CHECK",allCourses:res.body});
            })
    }else{
        next(action);
    }
}