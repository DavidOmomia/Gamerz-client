import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { withRouter } from 'react-router-dom';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import * as Yup from 'yup';

import './Deposit.scss'
const Deposit = props => {
   
    let text = 'SUBMIT';
    const depositvalidationSchema = Yup.object().shape({
        amount: Yup.string()
            .min(3, 'The Minimum is NGN 100')
            .required('This cannot be empty'),
        card_number: Yup.string()
            .min(12, 'Invalid card number')
            .required('This cannot be empty'),
        expiry: Yup.string()
            .required('This cannot be empty'),
        ccv: Yup.string()
            .min(3, 'Invalid CCV number')
            .required('This cannot be empty')
    });
    const handleSubmit = async (values, { setErrors, setSubmitting }) => {
        try{
           alert('You want to deposit ' + values.amount)
            store.addNotification({
                title: 'UNAVAILABLE',
                message:'This feature hasnt been enabled yet',
                type: 'info', // 'default', 'success', 'info', 'warning'
                container: 'top-right', // where to position the notifications
                animationIn: ['animated', 'fadeIn'],
                animationOut: ['animated', 'fadeOut'], // animate.css classes that's applied
                dismiss: {
                    duration: 4000,
                    onScreen: true,
                    pauseOnHover: true
                }
            });
           
            setSubmitting(false)
        }catch(err){
            store.addNotification({
                title: 'AUTHENTICATION',
                message: JSON.stringify(err.message),
                type: 'danger', // 'default', 'success', 'info', 'warning'
                container: 'bottom-right', // where to position the notifications
                animationIn: ['animated', 'fadeIn'],
                animationOut: ['animated', 'fadeOut'], // animate.css classes that's applied
                dismiss: {
                    duration: 4000,
                    onScreen: true,
                    pauseOnHover: true
                }
            });
            setSubmitting(false);
        }
      ;
    };
    return (
        <Formik
            initialValues={{
                amount: '',
                card_number: '',
                expiry: '',
                ccv: ''
            }}
            validationSchema={depositvalidationSchema}
            onSubmit={handleSubmit}
            render={formProps => {
                return (
                    <Form className="form">
                       
                        <div className="input-container">
                            <h3>Amount</h3>
                            <div className="animate">
                                <Field type="text" name="amount" placeholder="Enter The Amount" />
                                <span className="bottom"></span>
                                <span className="right"></span>
                                <span className="top"></span>
                                <span className="left"></span>
                            </div>
                            <ErrorMessage name="amount" render={msg => <div className="error">{msg}</div>} />
                        </div>
                        <div className="input-container">
                            <h3>Card Number</h3>
                            <div className="animate">
                                <Field type="number" name="card_number" placeholder="Card Number" />
                                <span className="bottom"></span>
                                <span className="right"></span>
                                <span className="top"></span>
                                <span className="left"></span>
                            </div>
                            <ErrorMessage name="card_number" render={msg => <div className="error">{msg}</div>} />
                        </div>
                        {/* <label className="input-container">
                            <p>
                                <Field type="checkbox" name="agree" className="check" /> I agree to the Terms and Conditions
                            </p>
                        </label>
                        <ErrorMessage name="agree" render={msg => <div className="error">{msg}</div>} /> */}
                         <div className="input-container name">
                            
                            <div>
                            <h3>Expiry</h3>
                                <div className="animate">
                                    <Field type="number" name="expiry" />
                                    <span className="bottom"></span>
                                    <span className="right"></span>
                                    <span className="top"></span>
                                    <span className="left"></span>
                                </div>
                                <ErrorMessage name="expiry" render={msg => <div className="error">{msg}</div>} />
                            </div>
                            <div>
                            <h3>CCV</h3>
                                <div className="animate">
                                    <Field type="number" name="ccv" placeholder="e.g 430" />
                                    <span className="bottom"></span>
                                    <span className="right"></span>
                                    <span className="top"></span>
                                    <span className="left"></span>
                                </div>
                                <ErrorMessage name="ccv" render={msg => <div className="error">{msg}</div>} />
                            </div>
                        </div>
                        <div className="input-container name submit">
                            <div className='terms'>Terms and Conditions apply</div>
                            <div><button disabled={formProps.isSubmitting} type='submit'>{text}</button></div>
                        </div>
                    </Form>
                );
            }}
        />
    );
};

export default Deposit;
