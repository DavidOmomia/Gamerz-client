import React from 'react'
import {withRouter} from 'react-router-dom'
import { withFormik, Form, Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'

import './form.scss'
const SignUp = ({ values,isSubmitting }) => {

    return (
        <Form className='form'>
            <h2>Log In</h2>
            <div className='input-container'>
                <Field type='email' name='email' placeholder='Email' value={values.email} />
                <ErrorMessage name='email' render={msg => <div className='error'>{msg}</div>}/>
            </div>
            <div className='input-container'>
            <Field type='password' name='password' placeholder='Password' value={values.password} />
            <ErrorMessage name='password' render={msg => <div className='error'>{msg}</div>}/>
            </div>
            <div className='input-container'>
            <button disabled={isSubmitting}>SUBMIT</button>
            </div>
        </Form>
    )
}




export default withRouter(withFormik({
    mapPropsToValues(props) {
        return {
            email: '',
            password: ''
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Hey,just letting you know that yor email is quite unusual or weird...').required('This cannot be empty'),
        password: Yup.string().min(9,'Password must be 9 characters or longer').required('This cannot be empty')
    }),
    handleSubmit(values,{ resetForm , setErrors, setSubmitting,props}) {
        setTimeout(()=>{
            if(values.email === 'divee789@gmail.com'){
                setErrors({ email:'That email is already taken' })
            }else{
                alert({'values':JSON.stringify(values)})
                resetForm()
                props.history.push('/damilola/dashboard/home')
            }
            setSubmitting(false)
            
        },2000)
    }

})(SignUp))