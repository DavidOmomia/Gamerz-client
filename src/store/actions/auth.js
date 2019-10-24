import axios from 'axios';
import * as actionTypes from './actionTypes';
import {Logger,history} from '../../utils/index'
import APIRequest from '../../services/api-services'
import APIServiceError from '../../services/error-services'

const authBaseURL = process.env.BASE_URL || 'http://localhost:7000';
const authAPIRequest = new APIRequest(authBaseURL);


// export const authCheckState = () => {
//     return dispatch => {
//         const token = localStorage.getItem('token');
//         if (!token) {
//             dispatch(logout());
//         } else {
//             const expirationDate = new Date(localStorage.getItem('expirationDate'));
//             if (expirationDate > new Date()) {
//                 const user = localStorage.getItem('user');
//                 dispatch(authSuccess(token, user, auth));
//                 dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
//             } else {
//                 dispatch(logout());
//             }
//         }
//     };
// };
export function logout(){
  function request() {
      return { type: actionTypes.authConstants.LOGOUT };
    }
    return async dispatch => {
      try {
        const userDetails = await authAPIRequest.logout();
        const x = await dispatch(request());       
      } catch (error) {
        if (error instanceof APIServiceError) {
          throw error.response.data;
        }
      }
    };
}
export function login(data){
    console.log('data',data)
    function request() {
        return { type: actionTypes.authConstants.LOGIN_REQUEST };
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
        } catch (error) {
          if (error instanceof APIServiceError) {
            dispatch(failure(error));
            throw error.response.data;
          }
        }
      };
}
export function signup(data){
  console.log('data',data)
  function request() {
      return { type: actionTypes.authConstants.SIGNUP_REQUEST };
    }
    function success(user) {
      return { type: actionTypes.authConstants.SIGNUP_SUCCESS, user };
    }
    function failure(errors) {
      return { type: actionTypes.authConstants.SIGNUP_FAILURE, errors };
    }
    return async dispatch => {
      try {
        const x = await dispatch(request());
        console.log('passed x')
        const userDetails = await authAPIRequest.signUp(data);
        console.log('UserDetails',userDetails)
        dispatch(success(userDetails));
      } catch (error) {
        if (error instanceof APIServiceError) {
          dispatch(failure(error));
          throw error.response.data;
        }
      }
    };
}
