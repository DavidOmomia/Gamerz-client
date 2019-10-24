import * as actionTypes from '../actions/actionTypes'


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
                return {
                  ...state,
                  token: action.user.token,
                  isAuth: true,
                  loading: false,
                  user:action.user.user,
                };
                case actionTypes.authConstants.LOGOUT:
                  return {
                    ...state,
                    token: null,
                    isAuth: false,
                    loading: false,
                    user:null,
                  };

                case actionTypes.authConstants.SIGNUP_REQUEST:
                  return {
                    ...state,
                    loading: true,
                    error: {}
                  };
                case actionTypes.authConstants.SIGNUP_FAILURE:
                  return {
                    ...state,
                    loading: false,
                    token: null,
                    isAuth: false,
                    error: action.errors.response.data
                  };
                case actionTypes.authConstants.SIGNUP_SUCCESS:
                  return {
                    ...state,
                    token: action.user.token,
                    isAuth: true,
                    loading: false,
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