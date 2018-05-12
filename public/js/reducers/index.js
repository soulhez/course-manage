import {combineReducers} from 'redux';

import login from "./login-reducer";
import register from "./register-reducer"
import userManage from "./userManage-reducer";
import fileUpload from "./addCourse-reducer";
import courseManage from "./courseManage-reducer";
import courseDetail from "./courseDetail-reducer";

export default combineReducers({
    login,
    register,
    userManage,
    fileUpload,
    courseManage,
    courseDetail
});