import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
  
import contactsReducer from './contacts-reducer';

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV === 'development',
});

export default store;