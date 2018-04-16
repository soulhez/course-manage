import request from "superagent";

export default store => next => action =>{
    console.log(action);
    if(action.type === "USERS_QUERY"){
        request.post("/allUsers")
            .send()
            .end((err,res) =>{
               next({type:"USERS_QUERY_CHECK",allUsers:res.body});
            })
    }else{
        next(action);
    }
}
