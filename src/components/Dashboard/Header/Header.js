import React from 'react';
import {NavLink} from 'react-router-dom'

import logo from '../../../assets/images/Group.png';
import card from '../../../assets/images/dashboard/check.jpg';
import coinIcon from '../../../assets/images/dashboard/coin.svg';
import cashIcon from '../../../assets/images/dashboard/cash.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import './Header.scss';

const Header = props => {
    let Background = card;
    const style = {
        backgroundImage: `url(${Background})`
    };
    return (
        <>
            <header className="dashboard-header" style={style}>
                <div className="background">
                    <nav>
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="item">
                            <div className="nav-item">
                                <a href="/" className="nav-content">
                                    <div>
                                       
                                        <img src={coinIcon} alt='coin'/>
                                    </div>
                                    <div>
                                       
                                        Coin <span>500</span>
                                    </div>
                                </a>
                            </div>
                            <div className="nav-item">
                                <a href="/" className="nav-content">
                                    <div>
                                       
                                        <img src={cashIcon} alt='cash'/>
                                    </div>
                                    <div>
                                       
                                        NGN <span>500,000</span>
                                    </div>
                                </a>
                            </div>
                            <div className="dropdown">
                                <div className="auth btn">
                                    <a href="#" className="nav-content">
                                        Divine Olokor
                                    </a>
                                </div>
                                <div className="dropdown-content">
                                    <ul>
                                        <li>
                                            <a href='/'>Buy Coin</a>
                                        </li>
                                        <li>
                                            <a href='/'>My Profile</a>
                                        </li>
                                        <li>
                                            <a href='/'>Log Out</a>
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
               <NavLink to={`${props.match.url}/home`}>Home</NavLink>                

               <NavLink to={`${props.match.url}/deposit`}>Deposit</NavLink>                

               <NavLink to={`${props.match.url}/withdraw`}>Withdraw</NavLink>                

               <NavLink to={`${props.match.url}/game`}>Play Games</NavLink>

               <NavLink to={`${props.match.url}/transaction`}>Transactions</NavLink>
                
            </div>
        </>
    );
};

export default Header;
