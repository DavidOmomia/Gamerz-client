import React from 'react'
import { withFormik, Form, Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'

import './form.scss'
const SignUp = ({ values,isSubmitting }) => {

    return (
        <Form className='form'>
            <h2>Sign Up</h2>
              <div className='input-container name'>
               <div>
               <Field type='text' name='firstname' placeholder='First Name' value={values.firstname} />
                <ErrorMessage name='firstname' render={msg => <div className='error'>{msg}</div>}/>
               </div>
              <div>
              <Field type='text' name='lastname' placeholder='Last Name' value={values.lastname} />
                <ErrorMessage name='lastname' render={msg => <div className='error'>{msg}</div>}/>
              </div>
            </div>
            <div className='input-container'>
                <Field type='email' name='email' placeholder='Email' value={values.email} />
                <ErrorMessage name='email' render={msg => <div className='error'>{msg}</div>}/>
            </div>
            <div className='input-container'>
            <Field type='password' name='password' placeholder='Password' value={values.password} />
            <ErrorMessage name='password' render={msg => <div className='error'>{msg}</div>}/>
            </div>
            {/* <div className='input-container'>
            <Field component='select' name='gender'>
                <option value='male'>MALE</option>
                <option value='female'>FEMALE</option>
            </Field>
            </div> */}
            <label className='input-container'>
            
               <p> <Field type='checkbox' name='agree' checked={values.agree} className='check'/> I agree to the Terms and Conditions</p>
            </label>
            <ErrorMessage name='agree' render={msg => <div className='error'>{msg}</div>}/>            
            <div className='input-container'>
            <button disabled={isSubmitting}>SUBMIT</button>
            </div>
        </Form>
    )
}




export default withFormik({
    mapPropsToValues(props) {
        return {
            email: '',
            password: '',
            agree: '',
            gender: 'male',
            firstname:'',
            lastname:''
        }
    },
    validationSchema: Yup.object().shape({
        firstname:Yup.string().min(6,'Your name must be at least 6 characters').required('This cannot be empty'),
        lastname:Yup.string().min(6,'Your name must be at least 6 characters').required('This cannot be empty'),
        email: Yup.string().email('Hey,just letting you know that yor email is quite unusual or weird...').required('This cannot be empty'),
        password: Yup.string().min(9,'Password must be 9 characters or longer').required('This cannot be empty'),
        agree:Yup.string().required('You must accept our Terms and Conditions')
    }),
    handleSubmit(values,{ resetForm , setErrors, setSubmitting}) {
        setTimeout(()=>{
            if(values.email === 'divee789@gmail.com'){
                setErrors({ email:'That email is already taken' })
            }else{
                console.log(values)
                resetForm()
            }
            setSubmitting(false)
        },2000)
    }

})(SignUp)