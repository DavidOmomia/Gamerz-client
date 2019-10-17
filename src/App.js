import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Landing from './containers/Landing/Landing';
import Auth from './containers/Auth/Auth';
import Dashboard from './containers/Dashboard/index'

import AOS from 'aos';
import 'aos/dist/aos.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faTimes);
const App = props => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    let User = 'damilola'
    let routes = (
        <Switch>
          <Route path={`/${User}/dashboard`} component={Dashboard}/>
            <Route path="/auth" component={Auth} />
            <Route path="/" exact component={Landing} />
            <Redirect to='/'/>
        </Switch>
    );

    return (
        <div>
            {routes}
        </div>
    );
};

export default App;
