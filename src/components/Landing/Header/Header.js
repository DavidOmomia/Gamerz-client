import React, { useState, useEffect } from 'react';
import { NavLink ,Link} from 'react-router-dom';

import logo from '../../../assets/images/Group.png';
import playStore from '../../../assets/images/PlayStore.svg';
import appStore from '../../../assets/images/AppStore.svg';
import chess from '../../../assets/images/chess.png';
import './Header.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = props => {
    const [top, setTop] = useState(true);
    useEffect(() => {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 450;
            if (isTop !== top) {
                setTop(isTop);
            }
        });
    });
    const style = {
      backgroundColor: top ? 'transparent':'white' ,
      paddingTop:top?'':'0.5rem',
      paddingBottom:top?'':'0.5rem',
      opacity:0.9, 
      width:'100%',
      position: top ? '':'fixed',
      transition:'1s ease',
      top:0,
      left:0,
      right:0,
      display:'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxSizing:'border-box',
      zIndex:90
    }
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
                    <div className="nav-item auth btn">
                        <NavLink to="/auth">Sign In</NavLink>
                    </div>
                <div className='hamburger'onClick={props.toggleClick}><FontAwesomeIcon icon='bars' size="2x" style={{ color: '#2f80ed' }} /></div>
                </div>
            </nav>
            <div className="header-info">
                <div className="info-container">
                    <h1>Make money with just a click or several clicks</h1>
                    <p>
                        With impressive interest rates, an app, tools & guides, this institution is the smartest way to bet your cash and
                        still have fun with the game.
                    </p>
                    <div className="btn">
                        <Link to="/auth">GET STARTED</Link>
                    </div>
                    <div className="store-btn">
                        <div><img src={playStore} alt="playstore" /></div>
                        <div><img src={appStore} alt="appstore" /></div>
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
