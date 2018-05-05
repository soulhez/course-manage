module.exports = ((state = {imagePath:"",audioPath:"",isAdd:""}, action)=> {
    switch (action.type) {
        case "IMAGE_UPLOAD": {
            state.imagePath = action.imagePath;
            return Object.assign({}, state);
        }
        case "AUDIO_UPLOAD":{
            state.audioPath = action.audioPath;
            return Object.assign({}, state);
        }
        case "ADD_COURSE_CHECK":{
            state.isAdd =action.addCourse;
            return Object.assign({}, state);
        }
        default:
            return state;
    }
});