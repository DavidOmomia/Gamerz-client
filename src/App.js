import React, { useEffect,Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'

import ReactNotification from 'react-notifications-component';
import Landing from './containers/Landing/Landing';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
library.add(faBars, faTimes);

const Auth = React.lazy(() => {
    return import('./containers/Auth/Auth')
  })
  const Dashboard = React.lazy(() => {
    return import('./containers/Dashboard/index')
  })


const App = props => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
   
    const auth = localStorage.getItem('userToken')
    let routes = (
        <Switch>
            <Route path={`/dashboard`} render={(props)=> auth?<Dashboard/>:<Redirect to='/auth'/>} />
            <Route path="/auth" component={Auth} />
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
