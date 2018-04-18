import request from "superagent";

export default store => next => action =>{
    if(action.type === "USERS_QUERY"){
        request.post("/allUsers")
            .send()
            .end((err,res) =>{
               next({type:"USERS_QUERY_CHECK",allUsers:res.body});
            })
    }else if(action.type === "USER_REMOVE"){
        request.post("/removeUser")
            .send({user_id:action.data.id})
            .end((err,res) =>{
               next({type:"USER_REMOVE_CHECK",userIsRemove:res.body});
            })
    } else if(action.type === "USER_MODIFY"){
        request.post("/modifyUser")
        .send({user_id:action.data.user_id,
          password:action.data.password})
            .end((err,res) =>{
               next({type:"USER_MODIFY_CHECK",userIsModify:res.body});
            })
    }else{
        next(action);
    }
}