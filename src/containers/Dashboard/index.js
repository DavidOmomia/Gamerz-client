import React from 'react';
import { Route, Switch, Redirect,useRouteMatch } from 'react-router-dom';
import Helmet from 'react-helmet';

import Header from '../../components/Dashboard/Header/Header';
import Home from '../../components/Dashboard/Routes/Home/Home';
import Games from '../../components/Dashboard/Routes/Games/Games';
import Transactions from '../../components/Dashboard/Routes/Transactions/Transactions';
import Deposit from '../../components/Dashboard/Routes/Deposit/Deposit';
import Withdraw from '../../components/Dashboard/Routes/Withdraw/Withdraw';
import Footer from '../../components/Landing/Footer/Footer'

const GamerzDashboard = props => {
    let { path, url } = useRouteMatch();
    return (
        <>
            <Helmet>
                <title>Earn money while having fun..</title>
                <meta name="description" content="Earn cash while playing Gamerzs" />
                <meta name="theme-color" content="#008f68" />
            </Helmet>
            <Header url={url}/>
            <Switch>
                <Route exact path={`${path}/home`} component={Home}/>
                <Route path={`${path}/deposit`} component={Deposit} />
                <Route path={`${path}/withdraw`} component={Withdraw} />
                <Route path={`${path}/game`} component={Games} />
                <Route path={`${path}/transaction`} component={Transactions} />
                <Redirect to='/'/>
            </Switch>
            <Footer/>
        </>
    );
};

export default GamerzDashboard;
