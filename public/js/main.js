import React from 'react';
import {render} from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, browserHistory} from 'react-router';

import Home from "./containers/home-container"
import Register from "./containers/register-contaienr";
import Login from "./containers/login-container";
import UserManage from "./containers/userManage-container";
import CourseManage from "./containers/courseManage-container";
import AddCourse from "./containers/addCourse-container";

import LoginMiddleware from "./middlewares/login-middleware";
import RegisterMiddleware from "./middlewares/register-middleware";
import NavMiddleware from "./middlewares/nav-middleware";
import UserManageMiddleware from "./middlewares/userManage-middleware";
import AddCourseMiddleware from "./middlewares/addCourse-middleware";
import CourseManageMiddleware from "./middlewares/courseManage-middleware";

import {createStore, applyMiddleware} from 'redux';
import reducer from "./reducers/index"


const createStoreWithMiddleware = applyMiddleware(LoginMiddleware, RegisterMiddleware,
    NavMiddleware, UserManageMiddleware, AddCourseMiddleware,CourseManageMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Home}/>
            <Route path="/addCourse" component={AddCourse}/>
            <Route path="/courseManage" component={CourseManage}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/userManage" component={UserManage}/>
        </Router>
    </Provider>, document.getElementById('app'));


