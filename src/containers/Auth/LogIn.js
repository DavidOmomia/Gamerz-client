import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import * as Yup from 'yup';
import { auth } from '../../store/actions/index';
import './form.scss';

const LogIn = props => {

    const { isAuth, loading, error,user } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    let User = `${user.first_name} ${user.last_name}`;

    const logvalidationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Hey,just letting you know that yor email is quite unusual or weird...')
            .required('This cannot be empty'),
        password: Yup.string()
            .min(9, 'Password must be 9 characters or longer')
            .required('This cannot be empty')
    });

    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        await dispatch(auth('', values.email, values.password, 'login'));
        if (error) {
            console.log(error);
            console.log(error.data.message);
            store.addNotification({
                title: 'AUTHENTICATION',
                message: error.data.message,
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
        } else {
            console.log('hi world');
            alert(JSON.stringify(values, null, 2))
        }

        if(isAuth){
            console.log(`/${User}/dashboard/home`)
            props.history.push(`/${User}/dashboard/home`);
        }

        setSubmitting(false);
    };

    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={logvalidationSchema}
            onSubmit={handleSubmit}
            render={formProps => {
                return (
                    <Form className="form">
                        <h2>Log In</h2>
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
                        <div className="input-container">
                            <button disabled={formProps.isSubmitting}>SUBMIT</button>
                        </div>
                    </Form>
                );
            }}
        />
    );
};

export default withRouter(LogIn);
