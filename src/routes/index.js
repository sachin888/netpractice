import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const DashboardScreen = Loadable({
    loader: () => import(/* webpackChunkName: "dashboard" */ '../containers/dashboard'),
    loading: () => null,
    modules: ['dashboard']
});

const LoginScreen = Loadable({
    loader: () => import(/* webpackChunkName: "login" */ '../containers/login'),
    loading: () => null,
    modules: ['login']
});

const ForgotPasswordScreen = Loadable({
    loader: () => import(/* webpackChunkName: "forgotPassword" */ '../containers/forgotPassword'),
    loading: () => null,
    modules: ['forgotPassword']
});

export default () => (
    <BrowserRouter  onUpdate={() => window.scrollTo(0, 0)} >
        <Switch>
            <Route path="/login" exact component={LoginScreen} />
            <Route path="/forgot" exact component={ForgotPasswordScreen} />
            <Route path="/" component={DashboardScreen} />
        </Switch>
    </BrowserRouter>
);