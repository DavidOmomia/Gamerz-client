import React, { useEffect, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import APIrequest from './services/api-services';
import { authConstants } from './store/actions/actionTypes';
import { Storage } from './services/storage-services';
import { logout } from './store/actions/auth';
import decode from 'jwt-decode';

import ReactNotification from 'react-notifications-component';
import Landing from './containers/Landing/Landing';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
library.add(faBars, faTimes);

const authBaseURL = process.env.BASE_URL || 'http://localhost:7000';
const authAPiRequest = new APIrequest(authBaseURL);

const Auth = React.lazy(() => {
    return import('./containers/Auth/Auth');
});
const Dashboard = React.lazy(() => {
    return import('./containers/Dashboard/index');
});

const App = props => {
    const dispatch = useDispatch();
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    useEffect(() => {
        const token = Storage.checkAuthentication();
        if (token) {
            const decoded = decode(token);
            console.log(decoded.exp);
            console.log(Date.now() / 1000);
            const refreshToken = Storage.getItem('refreshToken');
            const refreshThreshold = Math.floor((Date.now() + 120000) / 1000);
            console.log(refreshThreshold);
            if (refreshToken && decoded.exp < refreshThreshold) {
                // Checking if token is expired.
                console.log('token expired,getting new one');
                try {
                    const refreshResponse = authAPiRequest.refresh(refreshToken);
                    console.log('refresh response', refreshResponse);
                } catch (error) {
                    if (error.response && error.response.status === 401) {
                        // if refresh token has expired, dispatch LOGOUT THINGS
                        dispatch(logout());
                        throw error;
                    }
                }
            } else {
                console.log('token not expired');
            }
        }

        // const exp = Storage.checkExpiration();
        // console.log(exp);
        // const refreshToken = Storage.getItem('refreshToken');
        // const refreshThreshold = Math.floor((new Date().getTime() + 120000) / 1000);
        // console.log(refreshThreshold);
        // if (refreshToken && exp < refreshThreshold) {
        //     try {
        //         const refreshResponse = authAPiRequest.refresh(refreshToken);
        //     } catch (error) {
        //         if (error.response && error.response.status === 401) {
        //             // if refresh token has expired, dispatch LOGOUT THINGS
        //             Storage.clearItems();
        //             throw error;
        //             // return next(error);
        //         }
        //     }
        // }
    }, []);

    const { isAuth } = useSelector(state => state.auth);
    let routes = (
        <Switch>
            <Route path={`/dashboard`} render={props => (isAuth ? <Dashboard /> : <Redirect to="/auth" />)} />
            <Route path="/auth" render={props => (isAuth ? <Redirect to="/dashboard/home" /> : <Auth />)} />
            <Route path="/" exact component={Landing} />
            <Redirect to="/" />
        </Switch>
    );

    return (
        <div>
            <ReactNotification />
            <Suspense fallback={<p>Loading....</p>}>{routes}</Suspense>
        </div>
    );
};

export default App;
