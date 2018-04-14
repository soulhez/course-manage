module.exports = ((state={isInsert:""},action)=>{
    switch(action.type){
        case 'REGISTER_CHECK':{
            return({isInsert:action.isInsert});
        }
        default:
            return state;
    }
});