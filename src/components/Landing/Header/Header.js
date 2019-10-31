import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import logo from '../../../assets/images/Group.png';
import playStore from '../../../assets/images/PlayStore.svg';
import appStore from '../../../assets/images/AppStore.svg';
import chess from '../../../assets/images/chess.png';
import './Header.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { logout } from '../../../store/actions/auth';

const Header = props => {
    const [top, setTop] = useState(true);
    const {isAuth} = useSelector(state=>state.auth)

    const dispatch = useDispatch()
    useEffect(() => {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 450;
            if (isTop !== top) {
                setTop(isTop);
            }
        });
    });
    const logOutHandler=(e)=>{
        e.preventDefault()
        dispatch(logout())
        store.addNotification({
            title: 'Authenticatio',
            message: 'You logged Out',
            type: 'success', // 'default', 'success', 'info', 'warning'
            container: 'top-right', // where to position the notifications
            animationIn: ['animated', 'fadeIn'],
            animationOut: ['animated', 'fadeOut'], // animate.css classes that's applied
            dismiss: {
                duration: 4000,
                onScreen: true,
                pauseOnHover: true
            }
        });
       
    }
    const style = {
        backgroundColor: top ? 'transparent' : 'white',
        paddingTop: top ? '' : '0.5rem',
        paddingBottom: top ? '' : '0.5rem',
        opacity: 0.9,
        width: '100%',
        position: top ? '' : 'fixed',
        transition: '1s ease',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxSizing: 'border-box',
        zIndex: 90
    };
    return (
        <section>
            <div className="bg-image"></div>
            <nav style={style}>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="item">
                    <div className="nav-item">
                        <a href="/" className="nav-content">
                            About Us
                        </a>
                    </div>
                    <div className="nav-item">
                        <a href="/" className="nav-content">
                            Careers
                        </a>
                    </div>
                    <div className="nav-item">
                        <a href="/" className="nav-content">
                            Developers
                        </a>
                    </div>
                    {isAuth?<div className="nav-item dash">
                       <Link to='/dashboard/home'>Dashboard</Link>
                    </div>:''}
                    <div className="nav-item auth btn">
                        {!isAuth?<NavLink to="/auth">Sign In</NavLink>:<NavLink to="#" onClick={logOutHandler}>Log Out</NavLink>}
                    </div>
                    <div className="hamburger" onClick={props.toggleClick}>
                        <FontAwesomeIcon icon="bars" size="2x" style={{ color: '#2f80ed' }} />
                    </div>
                </div>
            </nav>
            <div className="header-info">
                <div className="info-container">
                    <h1>Make money with just a click or several clicks</h1>
                    <p>
                        With impressive interest rates, an app, tools & guides, this institution is the smartest way to bet your cash and
                        still have fun with the game.!!!
                    </p>
                    <div className="btn">
                        <Link to="/auth">GET STARTED NOW</Link>
                    </div>
                    <div className="store-btn">
                        <div>
                            <img src={playStore} alt="playstore" />
                        </div>
                        <div>
                            <img src={appStore} alt="appstore" />
                        </div>
                    </div>
                </div>
                <div className="image-container">
                    <img src={chess} alt="chess" />
                </div>
            </div>
        </section>
    );
};

export default Header;
