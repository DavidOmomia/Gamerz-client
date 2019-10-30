import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//Store
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
//Persistence
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
//Asynchronous
import thunk from 'redux-thunk';
import reqestMiddleware from './utils/requestMiddleware'
import 'animate.css'

import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import logger from 'redux-logger'
//Reducers
import authReducer from './store/reducers/auth'
import requestMiddleware from './utils/requestMiddleware';

//Axios Configuration
// axios.defaults.baseURL = 'http://localhost:7000';

// axios.interceptors.request.use(function(config) {
//     const token = localStorage.getItem('token');
//     config.headers.Authorization = token;
//     return config;
// });
// axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');


const rootReducer = combineReducers({
  auth: authReducer
})

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2 ,
  blacklist:[]// see "Merge Process" section for details.
};

//Configuring ReduxDevTools
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(pReducer,
  applyMiddleware(thunk,logger)
);
const persistor = persistStore(store);
//  const store = createStore(rootReducer,composeEnhancers(
//   applyMiddleware(thunk,logger))
//  )



const app = (
  <Provider store={store}>
  <PersistGate loading={<h1>Hi There</h1>} persistor={persistor}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PersistGate>
</Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
