import React from "react";

import "./Why.scss";
import play from "../../../assets/images/Play.png";
import bet from "../../../assets/images/bet.png";
import winning from "../../../assets/images/win.png";
const Why = props => {
  return (
    <section className='Why'>
        <span className='sparkle a'></span>
        <span className='sparkle b'></span>
        <span className='sparkle c'></span>
        <span className='sparkle d'></span>
        <span className='sparkle e'></span>
        <span className='sparkle f'></span>
        <span className='sparkle g'></span>
        <span className='sparkle h'></span>
        <span className='sparkle i'></span>
        <span className='sparkle j'></span>
        <span className='sparkle k'></span>
        <span className='sparkle l'></span>

      <h2>How it Works</h2>
      <div className='container'>
        <div>
          <img src={play} alt='play'/>
          <h3>Pick a game</h3>
          <p>
            Lorem ipsum Dolo id dfhv evkbe uve kve vhvbve igev vgev igev jkev
            ibev iev iuevv vetgevkgevt kevbtketv kbdv uree jbdv jevt
          </p>
        </div>
        <div>
          <img src={bet} alt='play'/>
          <h3>Place a bet</h3>
          <p>
            Lorem ipsum Dolo id dfhv evkbe uve kve vhvbve igev vgev igev jkev
            ibev iev iuevv vetgevkgevt kevbtketv kbdv uree jbdv jevt
          </p>
        </div>
        <div>
          <img src={winning} alt='play'/>
          <h3>Collect your winnings</h3>
          <p>
            Lorem ipsum Dolo id dfhv evkbe uve kve vhvbve igev vgev igev jkev
            ibev iev iuevv vetgevkgevt kevbtketv kbdv uree jbdv jevt
          </p>
        </div>
      </div>
    </section>
  );
};

export default Why;
