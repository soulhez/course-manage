module.exports = ((state={judge:"",loginUser:""},action)=>{
    console.log(action.judge);
    switch(action.type){
        case 'LOGIN_CHECK':{
            return({judge:action.judge.isTrue,loginUser:action.judge.user});
        }
        default:
            return state;
    }
});