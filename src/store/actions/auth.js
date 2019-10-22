import axios from 'axios'
import * as actionTypes from './actionTypes'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token,user,auth) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token:token,
        user:user,
        auth:auth
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () =>{
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('user')
    return{
        type:actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expirationTime)=>{
    return dispatch => {
        //logging out the user after token expiration date
        setTimeout(()=>{
           dispatch(logout())
        },expirationTime * 1000)
    }
}

export const auth = (fullname, email, password, method) => {
    console.log('hello')
    return dispatch => {
        dispatch(authStart())
        const authData = {
            fullname: fullname,
            email: email,
            password: password
        }
        console.log("Auth", authData)
        let end
        if (method === "signup") {
            end = 'register'
        } else {
            end = "login"
            delete authData.fullname
        console.log('Login',authData)
        }
       
        axios.post("/" + end, authData)
            .then((response) => {
                console.log(response)
                const expirationDate=new Date(new Date().getTime() + response.data.expiresIn*1000)
                localStorage.setItem("token",response.data.token)
                localStorage.setItem("expirationDate",expirationDate)
                localStorage.setItem("user",response.data.user)
                dispatch(authSuccess(response.data.token,response.data.user,response.data.auth))
                dispatch(checkAuthTimeout(response.data.expiresIn))
            })
            .catch((err) => {
                console.log(err)
                dispatch(authFail(err.response))
            })
    }
}


export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        if(!token){
            dispatch(logout())
        }else{
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if(expirationDate>new Date()){
                const user=localStorage.getItem('user')
                dispatch(authSuccess(token, user, auth))
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ))
            }else{
                dispatch(logout())
            }
        }
    }
}