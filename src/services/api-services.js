import axios from 'axios';
import { history, Logger } from '../utils/index';
import { Storage } from '../services/storage-services';
import APIServiceError from './error-services';
import decode from "jwt-decode";

const APIBaseURL = process.env.URL || 'http://localhost:7000';
export const clientId = process.env.ID || 1;
export const clientSecret = process.env.SECRET || '';

export default class APIRequest {
    constructor(baseURL) {
        this.instance = axios.create({
            baseURL: baseURL || APIBaseURL,
            timeout: 10000,
            headers: {
                Accept: 'application/json'
            }
        });

        this.instance.interceptors.request.use(
            config => {
                Logger.info('Request: ', config.url);
                return config;
            },
            error => {
                Logger.error('Request Error: ', error);
                return Promise.reject(error);
            }
        );

        this.instance.interceptors.response.use(
            response => {
                Logger.info('Response: ', response.config.method, response.config.url, response.status);
                return response;
            },
            error => {
                if(error.response.status==401){
                    this.logout()
                }
                if (!error.response) {
                    Logger.error('Response: ', 'Network Error');
                    return Promise.reject(
                        new APIServiceError({
                            status: 500,
                            data: {
                                message: 'Network Error, try again',
                                error: 'server_error',
                                data: null
                            }
                        })
                    );
                }
                Logger.warn('Response: ', error.response);
                return Promise.reject(new APIServiceError(error.response));
            }
        );
        this.checkAuthToken();
    }

    checkAuthToken = () => {
        const token = Storage.checkAuthentication();
        this.setHeader(token);
    };

    setHeader = token => {
        this.instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    };

    clearHeader() {
        delete this.instance.defaults.headers.common.Authorization;
    }
    isloggedIn = () => {
        // Checks if there is a saved token and it's still valid
        const token = Storage.checkAuthentication();
         // Getting token from localstorage
        return !!token && !this.isTokenExpired(token); // handwaiving here
      };
    
      isTokenExpired = token => {
        try {
          const decoded = decode(token);
          if (decoded.exp < Date.now() / 1000) {
            // Checking if token is expired.
            return true;
          } else return false;
        } catch (err) {
          console.log("expired check failed");
          return false;
        }
      };

    logout = () => {
        Storage.removeItem('userToken');
        Storage.removeItem('refreshToken');
        Storage.removeItem('userTokenExpiration');
    };

    setToken = token => {
        this.setHeader(token);
    };

    storeUserToken = (token, refreshToken, userTokenExpiration) => {
        const expirationDate = new Date(new Date().getTime() + parseInt(userTokenExpiration) * 1000);
        // alert(expirationDate,new Date(),new Date() > expirationDate)
        Storage.setItem('userToken', token);
        Storage.setItem('refreshToken', refreshToken);
        // expirationDate.toISOString()
        Storage.setItem('userTokenExpiration',userTokenExpiration);
    };

    //   storeClientToken = token => {
    //     Storage.setItem('clientToken', token);
    //   };

    logIn = async data => {
        const body = {
            ...data
        };

        const response = await this.instance.post('/login', body);
        const authResponse = response.data;
        console.log('authresponse', authResponse);

        this.storeUserToken(authResponse.access_token, authResponse.refresh_token, authResponse.expires_in);
        this.setToken(authResponse.access_token);
        const user = await this.instance.get('/user')
        console.log(user)
        const profileResponse = user.data.profile
        this.User = profileResponse;
        return {...authResponse,user:profileResponse};
    };

    signUp = async data => {
        const body = {
            ...data
        };

        const response = await this.instance.post('/register', body);
        const authResponse = response.data;
        console.log('authsignup',authResponse)
        this.storeUserToken(authResponse.access_token, authResponse.refresh_token, authResponse.expires_in);
        this.setToken(authResponse.access_token);
        const user = await this.instance.get('/user')
        console.log(user)
        const profileResponse = user.data.profile
        this.User = profileResponse;
        return {...authResponse,user:profileResponse};
    };

      refresh = async (refresh_token) => {
        const body = {
          refresh_token: refresh_token
        };

        const response = await this.instance.post('/user/token', body);
        const authResponse = response.data;
        console.log('refresh',authResponse)
        
        this.storeUserToken(authResponse.access_token, authResponse.refresh_token, authResponse.expires_in);

        this.setToken(authResponse.access_token);
        // client.setToken(authResponse.access_token);
        // invoiceClient.setToken(authResponse.access_token);

        return authResponse;
      };

    // bootstrap = async () => {
    //   const profileResponse = this.User
    //   return profileResponse
    // };

    getClientToken = async () => {
        const body = {
            grant_type: 'client_credentials',
            client_id: clientId,
            client_secret: clientSecret,
            scope: 'read'
        };

        const response = await this.instance.post('/oauth/token', body);
        const authResponse = response.data;

        this.setToken(authResponse.access_token);
        this.storeClientToken(authResponse.access_token);
    };
}
