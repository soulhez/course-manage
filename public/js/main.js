import React from 'react';
import {render} from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, browserHistory} from 'react-router';
import LoginRegister from "./containers/login"
import {createStore, applyMiddleware} from 'redux';
import reducer from "./reducers/index"


const createStoreWithMiddleware = applyMiddleware()(createStore);

const store = createStoreWithMiddleware(reducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={LoginRegister}/>
        </Router>
    </Provider>, document.getElementById('app'));


