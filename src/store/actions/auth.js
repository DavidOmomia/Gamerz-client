import axios from 'axios';
import * as actionTypes from './actionTypes';
import {Logger,history} from '../../utils/index'
import APIRequest from '../../services/api-services'
import APIServiceError from '../../services/error-services'

const authBaseURL = process.env.BASE_URL || 'http://localhost:7000';
const authAPIRequest = new APIRequest(authBaseURL);

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, user, auth) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        user: user,
        auth: auth
    };
};

export const authFail = error => {
    console.log('fail', error);
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('user');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        //logging out the user after token expiration date
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

const req = async (dispatch, end, authData) => {
    try {
        const response = await axios.post('/' + end, authData);
        console.log('rres', response);
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('user', response.data.user);
        dispatch(authSuccess(response.data.token, response.data.user, response.data.auth));
        dispatch(checkAuthTimeout(response.data.expiresIn));
        return false;
    } catch (err) {
        console.log('err', err.response);
        const fail =async(err)=>{
          await dispatch(authFail(err.response));
        }
        fail(err)
        return err.response;
    }
};

export const auth = (fullname, email, password, method) => {
    console.log('hello');
    return dispatch => {
        dispatch(authStart());
        const authData = {
            fullname: fullname,
            email: email,
            password: password
        };
        console.log('Auth', authData);
        let end;
        if (method === 'signup') {
            end = 'register';
        } else {
            end = 'login';
            delete authData.fullname;
            console.log('Login', authData);
        }
        console.log('hi');
       return req(dispatch, end, authData);
        console.log('hello');
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate > new Date()) {
                const user = localStorage.getItem('user');
                dispatch(authSuccess(token, user, auth));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            } else {
                dispatch(logout());
            }
        }
    };
};






export function login(data){//what is login expecting
    console.log('data',data)
    function request() {
        return { type: actionTypes.authConstants.LOGIN_REQUEST, noLoader: true };
      }
      function success(user) {
        return { type: actionTypes.authConstants.LOGIN_SUCCESS, user };
      }
      function failure(errors) {
        return { type: actionTypes.authConstants.LOGIN_FAILURE, errors };
      }
      return async dispatch => {
        try {
          const x = await dispatch(request());
          console.log('passed x')
          const userDetails = await authAPIRequest.logIn(data);
          console.log('UserDetails',userDetails)
          dispatch(success(userDetails));
          history.replace('/');
        } catch (error) {
          if (error instanceof APIServiceError) {
            dispatch(failure(error));
            throw error.response.data;
          }
        }
      };
}
