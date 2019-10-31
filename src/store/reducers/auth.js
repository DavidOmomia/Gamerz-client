import * as actionTypes from '../actions/actionTypes'
import {Storage} from '../../services/storage-services'

const initialState = {
    token:null,
    user: null,
    processing: false,
    isAuth:Storage.checkAuthentication(),
    error:null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
            case actionTypes.authConstants.LOGIN_REQUEST:
                return {
                  ...state,
                  processing: true,
                  error: {}
                };
              case actionTypes.authConstants.LOGIN_FAILURE:
                return {
                  ...state,
                  processing: false,
                  token: null,
                  isAuth: false,
                  error: action.errors.response.data
                };
              case actionTypes.authConstants.LOGIN_SUCCESS:
                return {
                  ...state,
                  token: action.user.token,
                  isAuth: true,
                  processing: false,
                  user:action.user.user,
                };
                case actionTypes.authConstants.LOGOUT:
                  return {
                    ...state,
                    token: null,
                    isAuth: false,
                    processing: false,
                    user:null,
                  };

                case actionTypes.authConstants.SIGNUP_REQUEST:
                  return {
                    ...state,
                    processing: true,
                    error: {}
                  };
                case actionTypes.authConstants.SIGNUP_FAILURE:
                  return {
                    ...state,
                    processing: false,
                    token: null,
                    isAuth: false,
                    error: action.errors.response.data
                  };
                case actionTypes.authConstants.SIGNUP_SUCCESS:
                  return {
                    ...state,
                    token: action.user.token,
                    isAuth: true,
                    processing: false,
                    user:action.user.user,
                  };
        default:
            return state
    }
}

export default authReducer









// case actionTypes.AUTH_START:
//         return updatedObject(state, {
//             error: null,
//             processing: true
//         })
//     case actionTypes.AUTH_SUCCESS:
//         return updatedObject(state, {
//             token: action.token,
//             user: action.user,
//             error: null,
//             processing: false,
//             isAuth:action.auth
//         })
//     case actionTypes.AUTH_FAIL:
//         return updatedObject(state, {
//             error: action.error,
//             processing: false
//         })
//     case actionTypes.AUTH_LOGOUT:
//         return updatedObject(state,{
//             token:null,
//             user:null,
//             isAuth:null
//         })    