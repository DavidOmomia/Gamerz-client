import React from 'react';

import logo from '../../../assets/images/white-logo.png';
import playStore from '../../../assets/images/whiteplay.svg'
import appStore from '../../../assets/images/whiteapp.svg'

import './Footer.scss';

const Footer = props => {
    return (
        <section className='bground'>
        <footer>
            <div className='logo container '>
                <div className='logo'>
                    <img src={logo} alt="Logo" />
                </div>
                <div className='company-address'>
                  <p>13,Crescent Avenue,Off The Kings way</p>
                  <p></p>
                  <p>Pretoria,South Africa</p>
                </div>
                <div className='store-btn'>
                    <img src={appStore} alt='play'/>
                    <img src={playStore} alt='play'/>
                </div>

            </div>
            <div className="footer-container">
                <div>
                    <h3>LEGAL</h3>
                    <ul>
                        <li>
                            <a href="/">Terms And Conditions</a>
                        </li>
                        <li>
                            <a href="/">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>COMPANY</h3>
                    <ul>
                        <li>
                            <a href="/">About Us</a>
                        </li>
                        <li>
                            <a href="/">Careers</a>
                        </li>
                        <li>
                            <a href="/">Contact</a>
                        </li>
                        <li>
                            <a href="/">Support</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>SOCIAL</h3>
                    <ul>
                        <li>
                            <a href="/">Instagram</a>
                        </li>
                        <li>
                            <a href="/">Twitter</a>
                        </li>
                        <li>
                            <a href="/"> Facebook</a>
                        </li>
                        <li>
                            <a href="/">Support</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        </section>
    );
};

export default Footer;
