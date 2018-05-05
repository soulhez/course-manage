module.exports = ((state = {allCourses: []}, action)=> {
    switch (action.type) {
        case "COURSE_QUERY_CHECK": {
            state.allCourses = action.allCourses.courses;
            return Object.assign({}, state);
        }
        default:
            return state;
    }
});