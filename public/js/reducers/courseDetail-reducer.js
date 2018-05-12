module.exports=((state={isInsertCommit:"",commits:[]},action) =>{
    switch (action.type) {
        case "ADD_COMMIT_CHECK": {
            state.isInsertCommit = action.isInsertCommit;
            return Object.assign({}, state);
        }
        case "QUERY_COMMIT_CHECK":{
            state.commits=action.commits;
            return Object.assign({}, state);
        }
        default:
            return state;
    }
});