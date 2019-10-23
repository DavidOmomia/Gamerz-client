
import {Logger} from '../utils/index'


export function IsJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
  
  export class Storage {
    static getItem(item) {
      const value = localStorage.getItem(item);
      if (value === undefined || value === null) {
        return null;
      }
      try {
        const parsedValue = JSON.parse(value);
        return parsedValue;
      } catch (error) {
        // log error
      }
      return value;
    }
  
    static setItem(item, itemValue) {
      try {
        let value = itemValue;
        if (typeof itemValue === 'object' && itemValue !== null) {
          value = JSON.stringify(itemValue);
        }
        localStorage.setItem(item, value);
      } catch (error) {
        Logger.error(error);
        // log error
      }
    }
  
    static removeItem(item) {
      try {
        localStorage.removeItem(item);
      } catch (error) {
        Logger.error(error);
      }
    }
  
    static checkAuthentication() {
      let userToken;
      try {
        userToken = Storage.getItem('userToken');
      } catch (error) {
        Logger.error(error);
        return false;
      }
      return userToken;
    }
  
    static clientToken() {
      let clientToken;
      try {
        clientToken = Storage.getItem('clientToken');
      } catch (error) {
        Logger.error(error);
        return false;
      }
      return clientToken;
    }
  
    static getRefreshToken() {
      let refreshToken;
      try {
        refreshToken = Storage.getItem('refreshToken');
      } catch (error) {
        Logger.error(error);
        // log error
        return false;
      }
      return refreshToken;
    }
  
    static checkExpiration() {
      let userTokenExpiration;
      try {
        userTokenExpiration = Storage.getItem('userTokenExpiration');
      } catch (error) {
        Logger.error(error);
        return null;
      }
      return userTokenExpiration || null;
    }
  }