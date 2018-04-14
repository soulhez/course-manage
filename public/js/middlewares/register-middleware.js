import request from "superagent";

export default store => next => action =>{
    if(action.type === "REGISTER"){
        request.post("/register")
            .send({username:action.data.username,
              password:action.data.password,
              identity:action.data.identity})
            .end((err,res)=>{
               next({type:"REGISTER_CHECK",isInsert:res.body});
            });
    }else{
        next(action);
    }
}