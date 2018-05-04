module.exports = ((state = {filePath:""}, action)=> {
    console.log(action);
    switch (action.type) {
        case "fileUpload": {
            state.filePath = action.filePath;
            return Object.assign({}, state);
        }
        default:
            return state;
    }
});