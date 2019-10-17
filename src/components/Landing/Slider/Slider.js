import React from 'react'
import './Slider.scss'
import Korapay from '../../../assets/images/korapay.svg'
import Quidax from '../../../assets/images/quidax.svg'
import Wallets from '../../../assets/images/wallets.ng.svg'
import Flutterwave from '../../../assets/images/flutterwave.svg'
import Smallchops from '../../../assets/images/smallchops.svg'


const Slider = props => {

    return(
        <>
         <h3 style={{paddingLeft:'8%',fontSize:'2rem'}}>Backed By</h3>
<div className="slider">
      <div className="slide-track">
        <div className="slide">
          <img src={Korapay} alt="logo" />
        </div>
        <div className="slide">
          <img src={Quidax} alt="logo" />
        </div>
        <div className="slide">
          <img src={Wallets} alt="logo" />
        </div>
        <div className="slide">
          <img src={Flutterwave} alt="logo" />
        </div>
        <div className="slide">
          <img src={Smallchops} alt="logo" />
        </div>

        <div className="slide">
          <img src={Korapay} alt="logo" />
        </div>
        <div className="slide">
          <img src={Quidax} alt="logo" />
        </div>
        <div className="slide">
          <img src={Wallets} alt="logo" />
        </div>
        <div className="slide">
          <img src={Flutterwave} alt="logo" />
        </div>
        <div className="slide">
          <img src={Smallchops} alt="logo" />
        </div>
         <div className="slide">
          <img src={Korapay} alt="logo" />
        </div>
        <div className="slide">
          <img src={Quidax} alt="logo" />
        </div>
        <div className="slide">
          <img src={Wallets} alt="logo" />
        </div>
        <div className="slide">
          <img src={Flutterwave} alt="logo" />
        </div>
        <div className="slide">
          <img src={Smallchops} alt="logo" />
        </div>
      </div>
    </div>

        </>
    )
}


export default Slider