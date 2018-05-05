module.exports = ((state = {allCourses: [],courseIsRemove:""}, action)=> {
    switch (action.type) {
        case "COURSE_QUERY_CHECK": {
            state.allCourses = action.allCourses.courses;
            return Object.assign({}, state);
        }
        case "COURSE_REMOVE_CHECK":{
            state.courseIsRemove=action.isRemove;
            return Object.assign({}, state);
        }
        default:
            return state;
    }
});