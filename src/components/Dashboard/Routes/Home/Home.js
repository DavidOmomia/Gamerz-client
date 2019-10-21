import React from 'react';

import Form from './home-form'
import Ethics from './Game-ethics'
import './Home.scss'
const Home = props => {

    return(
        <>
        <section className='account-statement-container'>
          <div className='account-statement'>
              <div className='info'>
                <p>Balance: NGN <span>10,000</span></p>
              </div>
              <div className='info'>
                 <p>Winnings: NGN <span>1,000</span></p>
              </div>
              <div className='info'>
                 <p>Coin: <span>0</span></p>
              </div>
          </div>
        </section>
        <Form/>
        <Ethics/>
 </>
    )
}
export default Home