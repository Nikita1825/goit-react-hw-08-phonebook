import { configureStore} from '@reduxjs/toolkit';
import { contactsReducer } from './сontact/contactsSlice';
import { filterReducer } from './сontact/filterSlice';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authReduser';

import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
