import * as actionTypes from '../actions/actionTypes'
import {Storage} from '../../services/storage-services'
import { updatedObject } from "../Utility"

const initialState = {
    token:null,
    user: null,
    loading: false,
    isAuth:null,
    error:null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
            case actionTypes.authConstants.LOGIN_REQUEST:

                return {
                  ...state,
                  loading: true,
                  error: {}
                };
              case actionTypes.authConstants.LOGIN_FAILURE:
                return {
                  ...state,
                  loading: false,
                  token: null,
                  isAuth: false,
                  error: action.errors.response.data
                };
              case actionTypes.authConstants.LOGIN_SUCCESS:
                  return Object.assign({}, state, {
                    token: action.user.token,
                    isAuth: true,
                    loading: false,
                    user:JSON.parse(JSON.stringify(action.user.user)),
                  })
                return {
                  ...state,
                };
        default:
            return state
    }
}

export default authReducer









// case actionTypes.AUTH_START:
//         return updatedObject(state, {
//             error: null,
//             loading: true
//         })
//     case actionTypes.AUTH_SUCCESS:
//         return updatedObject(state, {
//             token: action.token,
//             user: action.user,
//             error: null,
//             loading: false,
//             isAuth:action.auth
//         })
//     case actionTypes.AUTH_FAIL:
//         return updatedObject(state, {
//             error: action.error,
//             loading: false
//         })
//     case actionTypes.AUTH_LOGOUT:
//         return updatedObject(state,{
//             token:null,
//             user:null,
//             isAuth:null
//         })    