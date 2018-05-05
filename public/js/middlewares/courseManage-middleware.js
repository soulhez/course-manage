import request from "superagent";

export default store => next => action =>{
    if(action.type === "COURSE_QUERY"){
        request.post("/allCourses")
            .send()
            .end((err,res) =>{
             next({type:"COURSE_QUERY_CHECK",allCourses:res.body});
            })
    }else if(action.type === "COURSE_REMOVE"){
        request.post("/removeCourse")
            .send({course_id:action.course_id})
            .end((err,res) =>{
                next({type:"COURSE_REMOVE_CHECK",isRemove:res.body});
            })
    }else if(action.type === "COURSE_EDIT"){
        request.post("/editCourse")
            .send({data:action.data})
            .end((err,res) =>{
                next({type:"COURSE_EDIT_CHECK",isModify:res.body});
            })
    }
    else{
        next(action);
    }
}