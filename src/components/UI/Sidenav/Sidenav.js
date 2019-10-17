import React from 'react'
import { Link} from 'react-router-dom';

 
import logo from '../../../assets/images/Group.png'
import Backdrop from '../Backdrop/Backdrop'
import Hammer from 'react-hammerjs'
import "./Sidenav.scss"


const Sidenav = (props) => {
   let attachedClasses = ['sidenav','Close'];
   if(props.open){
     attachedClasses = ['sidenav','Open']
   }


    return (
        <Hammer onSwipe={props.closed}>
        <div className='media'>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
            <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul>
                    <li><Link to='/damilola/dashboard/home'>About</Link></li>
                    <li><Link to='/'>Careers</Link></li>
                    <li><Link to='/'>Developers</Link></li>
                    <li><Link to='/auth'>Sign In</Link></li>
                </ul>
            </div>
        </div>
        </Hammer>
    )
}

export default Sidenav