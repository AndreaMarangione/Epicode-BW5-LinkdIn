import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { profileApi } from './api/profileApi';
import { experienceApi } from './api/experienceApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import modalExperienceReducer from './redux/modalExpSlice'
import experienceSelectedReducer from './redux/experienceSelectedSpice'


const rootReducer = combineReducers({
  experienceModalState: modalExperienceReducer,
  experienceSelectedState: experienceSelectedReducer,
  [profileApi.reducerPath]: profileApi.reducer,
  [experienceApi.reducerPath] : experienceApi.reducer
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(profileApi.middleware).concat(experienceApi.middleware)
})

setupListeners(store.dispatch)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
