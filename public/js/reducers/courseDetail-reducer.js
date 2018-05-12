module.exports=((state={isInsertCommit:""},action) =>{
    switch (action.type) {
        case "ADD_COMMIT_CHECK": {
            state.isInsertCommit = action.isInsertCommit;
            return Object.assign({}, state);
        }
        default:
            return state;
    }
});