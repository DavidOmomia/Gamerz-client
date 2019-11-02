import React from 'react';
import { NavLink,withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import logo from '../../../assets/images/dashboard/gamerzLogo.svg';
import card from '../../../assets/images/dashboard/check.jpg';
import coinIcon from '../../../assets/images/dashboard/coin.svg';
import cashIcon from '../../../assets/images/dashboard/cash.svg';
import homeIcon from '../../../assets/images/dashboard/homeIcon.svg';
import depositIcon from '../../../assets/images/dashboard/depositIcon.svg';
import withdraw from '../../../assets/images/dashboard/withdrawIcon.svg';
import game from '../../../assets/images/dashboard/gameIcon.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Header.scss';
import { logout } from '../../../store/actions/auth';

const Header = props => {
    let { user } = useSelector(state => state.auth);
    let dispatch = useDispatch();
    const logOutHandler = async e => {
        console.log('log out')
        e.preventDefault();
       await dispatch(logout());
        props.history.push('/')
    };
    let Background = card;
    let User
    if(user){
        User = `${user.first_name} ${user.last_name}`;
    }
    const style = {
        backgroundImage: `url(${Background})`
    };
    return (
        <>
            <header className="dashboard-header" style={style}>
                <div className="background">
                    <nav>
                        <div className="logo">
                            <NavLink to='/'>
                            <img src={logo} alt="logo" />
                            </NavLink>
                        </div>
                        <div className="item">
                            <div className="nav-item">
                                <a href="/" className="nav-content">
                                    <div>
                                        <img src={coinIcon} alt="coin" />
                                    </div>
                                    <div>
                                        Coin <span>500</span>
                                    </div>
                                </a>
                            </div>
                            <div className="nav-item">
                                <a href="/" className="nav-content">
                                    <div>
                                        <img src={cashIcon} alt="cash" />
                                    </div>
                                    <div>
                                        NGN <span>500,000</span>
                                    </div>
                                </a>
                            </div>
                            <div className="dropdown">
                                <div className="auth btn">
                                    <a href="#" className="nav-content">
                                        {User}
                                    </a>
                                </div>
                                <div className="dropdown-content">
                                    <ul>
                                        <li>
                                            <a href="/">Buy Coin</a>
                                        </li>
                                        <li>
                                            <a href="/">My Profile</a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={logOutHandler}>
                                                Log Out
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className='hamburger'onClick={props.toggleClick}><FontAwesomeIcon icon='bars' size="2x" style={{ color: '#2f80ed' }} /></div> */}
                        </div>
                    </nav>
                    <div className="headerInfo">
                        <h1>
                            Connecting You To Gamers Across <br /> International Borders
                        </h1>
                    </div>
                </div>
            </header>
            <div className="navigation-container">
                <NavLink to={`${props.url}/home`}>
                    <div>
                        <img src={homeIcon} />
                    </div>
                    <div>Home</div>
                </NavLink>

                <NavLink to={`${props.url}/deposit`}>
                    <div>
                        <img src={depositIcon} />
                    </div>
                    <div>Deposit</div>
                </NavLink>

                <NavLink to={`${props.url}/withdraw`}>
                    <div>
                        <img src={withdraw} />
                    </div>
                    <div>Withdraw</div>
                </NavLink>

                <NavLink to={`${props.url}/game`}>
                    <div>
                        <img src={game} />
                    </div>
                    <div>Play Games</div>
                </NavLink>

                <NavLink to={`${props.url}/transaction`}>
                <div>
                        <img src={withdraw} />
                    </div><div>Transactions</div></NavLink>
            </div>
        </>
    );
};

export default withRouter(Header);
