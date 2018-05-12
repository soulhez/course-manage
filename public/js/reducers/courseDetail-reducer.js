module.exports=((state={isInsertCommit:"",commits:[],courseIsModify:"",course_by_id:{}},action) =>{
    switch (action.type) {
        case "ADD_COMMIT_CHECK": {
            state.isInsertCommit = action.isInsertCommit;
            return Object.assign({}, state);
        }
        case "QUERY_COMMIT_CHECK":{
            state.commits=action.commits;
            return Object.assign({}, state);
        }
        case "MODIFY_COURSE_CHECK":{
            state.courseIsModify=action.isModify;
            return Object.assign({}, state);
        }
        case "QUERY_COURSE_ByID_CHECK":{
            state.course_by_id=action.course_by_id;
            return Object.assign({}, state);
        }
        default:
            return state;
    }
});