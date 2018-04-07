import request from "superagent";

export default store => next => action =>{
    if(action.type === "LOGIN"){
        request.post("/login")
            .send({userName:action.data.userName,
                passWord:action.data.passWord,
            identity:action.data.identity})
            .end((err,res)=>{
                next({type:"LOGIN_CHECK",judge:res.body});
            })
    }else{
        next(action);
    }
}