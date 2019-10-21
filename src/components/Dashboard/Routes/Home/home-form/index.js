import React from 'react';

import './index.scss';
const Form = props => {
    return (
        <section className="home-form">
            <div className="form-content">
                <div>
                    <h3>Transfer Coin to Friends</h3>
                    <div>
                        <input placeholder="Recipient Email" type="email" />
                    </div>
                    <div>
                        <input placeholder="Amount" type="number" />
                    </div>
                    <div>
                        <button>Transfer</button>
                    </div>
                </div>
            </div>
            <div className="form-content">
                <div>
                    <h3>Load Voucher</h3>
                    <div>
                        <input placeholder="Voucher Code" type="number" />
                    </div>
                    <div>
                        <button>Load</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Form;
