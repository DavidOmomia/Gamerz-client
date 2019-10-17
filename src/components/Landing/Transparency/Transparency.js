import React from "react";

import './Transparency.scss'
import trans from '../../../assets/images/trans.png'
const Transparency = props => {
  return (
    <section className='Transparency'>
      <div>
        <h3>Gamerz promotes transparency on all transactions on bets</h3>
        <p>
          lorem ipsum dolor cb gjk obov nevie i fid cif iiii,v kev kev kbve kb
          Lorem ipsum Dolo id dfhv evkbe uve kve vhvbve igev vgev i jkev ibev
          iev iuevv vetgevkgevt kevbtketv kbdv uree jbdv jevt
        </p>
        <div className='button btn'>
            <a href='/'>POLICIES</a>
       </div>
      </div>
      <div>
          <img src={trans} alt='transparency'/>
      </div>
    </section>
  );
};

export default Transparency;
