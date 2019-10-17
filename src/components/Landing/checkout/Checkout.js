import React from "react";


import checkout_image from "../../../assets/images/checkout.svg";
import './Checkout.scss'

const Checkout = props => {
  return (
    <section className='Checkout'>
      <div className='img-container'>
        <img src={checkout_image} alt="Checkout" />
      </div>
      <div>
        <h3>Fast and Efficient<br/> Checkout Options</h3>
        <p>
          lorem ipsum dolor cb gjk obov nevie i fid cif iiii,v kev kev kbve kb
          Lorem ipsum Dolo id dfhv evkbe uve kve vhvbve igev vgev i jkev ibev
          iev iuevv vetgevkgevt kevbtketv kbdv uree jbdv jevt lorem ipsum dolor
          cb gjk obov nevie i fid cif iiii,v kev kev kbve kb Lorem ipsum Dolo id
          dfhv evkbe uve kve vhvbve igev vgev i jkev ibev iev iuevv vetgevkgevt
          kevbtketv kbdv uree jbdv jevt
        </p>
        <div className='button btn'>
          <a href='/'>LEARN MORE</a>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
