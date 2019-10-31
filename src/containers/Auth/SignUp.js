import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { withRouter } from 'react-router-dom';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import * as Yup from 'yup';

import './form.scss';
import { signup } from '../../store/actions';
const SignUp = props => {
    const { processing,user } = useSelector(state => state.auth);

    const dispatch = useDispatch();
    let text = 'SUBMIT';
    if (processing) {
        text = 'Please wait...';
    }
    const signUpvalidationSchema = Yup.object().shape({
        firstname: Yup.string()
            .min(6, 'Your name must be at least 6 characters')
            .required('This cannot be empty'),
        lastname: Yup.string()
            .min(6, 'Your name must be at least 6 characters')
            .required('This cannot be empty'),
        email: Yup.string()
            .email('Hey,just letting you know that yor email is quite unusual or weird...')
            .required('This cannot be empty'),
        password: Yup.string()
            .min(9, 'Password must be 9 characters or longer')
            .required('This cannot be empty'),
        agree: Yup.string().required('You must accept our Terms and Conditions')
    });
    const handleSubmit = async (values, { setErrors, setSubmitting }) => {
        try{
            await dispatch(signup(values))
            props.history.push('/dashboard/home')
            store.addNotification({
                title: 'WELCOME',
                message: 'We are so happy to have you' + user.firstname,
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
           
            setSubmitting(false)
        }catch(err){
            console.log('signuperr', err);
            console.log(err.message);
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
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                agree: ''
            }}
            validationSchema={signUpvalidationSchema}
            onSubmit={handleSubmit}
            render={formProps => {
                return (
                    <Form className="form">
                        <h2>Sign Up</h2>
                        <div className="input-container name">
                            <div>
                                <div className="animate">
                                    <Field type="text" name="firstname" placeholder="First Name" />
                                    <span className="bottom"></span>
                                    <span className="right"></span>
                                    <span className="top"></span>
                                    <span className="left"></span>
                                </div>
                                <ErrorMessage name="firstname" render={msg => <div className="error">{msg}</div>} />
                            </div>
                            <div>
                                <div className="animate">
                                    <Field type="text" name="lastname" placeholder="Last Name" />
                                    <span className="bottom"></span>
                                    <span className="right"></span>
                                    <span className="top"></span>
                                    <span className="left"></span>
                                </div>
                                <ErrorMessage name="lastname" render={msg => <div className="error">{msg}</div>} />
                            </div>
                        </div>
                        <div className="input-container">
                            <div className="animate">
                                <Field type="email" name="email" placeholder="Email" />
                                <span className="bottom"></span>
                                <span className="right"></span>
                                <span className="top"></span>
                                <span className="left"></span>
                            </div>
                            <ErrorMessage name="email" render={msg => <div className="error">{msg}</div>} />
                        </div>
                        <div className="input-container">
                            <div className="animate">
                                <Field type="password" name="password" placeholder="Password" />
                                <span className="bottom"></span>
                                <span className="right"></span>
                                <span className="top"></span>
                                <span className="left"></span>
                            </div>
                            <ErrorMessage name="password" render={msg => <div className="error">{msg}</div>} />
                        </div>
                        <label className="input-container">
                            <p>
                                <Field type="checkbox" name="agree" className="check" /> I agree to the Terms and Conditions
                            </p>
                        </label>
                        <ErrorMessage name="agree" render={msg => <div className="error">{msg}</div>} />
                        <div className="input-container">
                            <button disabled={formProps.isSubmitting}>{text}</button>
                        </div>
                    </Form>
                );
            }}
        />
    );
};

export default withRouter(SignUp);
