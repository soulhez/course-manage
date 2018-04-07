module.exports = ((state={judge:""},action)=>{
    console.log(action);
    switch(action.type){
        case 'LOGIN_CHECK':{
            return({judge:action.judge.isTrue});
        }
        default:
            return state;
    }
});