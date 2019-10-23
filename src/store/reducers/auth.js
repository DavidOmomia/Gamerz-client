import * as actionTypes from '../actions/actionTypes'
import {Storage} from '../../services/storage-services'
import { updatedObject } from "../Utility"

const initialState = {
    token: Storage.checkAuthentication(),
    user: null,
    loading: false,
    isAuth:!!Storage.checkAuthentication(),
    error:null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return updatedObject(state, {
                error: null,
                loading: true
            })
        case actionTypes.AUTH_SUCCESS:
            return updatedObject(state, {
                token: action.token,
                user: action.user,
                error: null,
                loading: false,
                isAuth:action.auth
            })
        case actionTypes.AUTH_FAIL:
            return updatedObject(state, {
                error: action.error,
                loading: false
            })
        case actionTypes.AUTH_LOGOUT:
            return updatedObject(state,{
                token:null,
                user:null,
                isAuth:null
            })    
            case actionTypes.authConstants.LOGIN_REQUEST:
                console.log('login request')
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
                  console.log('reducer',action.user)
                return {
                  ...state,
                  token: action.user.token,
                  userTokenExpiration: action.user.expiresIn,
                  isAuth: true,
                  isLoading: false,
                  user:action.user.user,
                  errors: {}
                };
        default:
            return state
    }
}

export default authReducer