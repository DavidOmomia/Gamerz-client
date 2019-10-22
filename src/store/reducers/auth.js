import * as actionTypes from '../actions/actionTypes'
import { updatedObject } from "../Utility"

const initialState = {
    token: null,
    user: null,
    loading: false,
    isAuth:null,
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
        default:
            return state
    }
}

export default authReducer