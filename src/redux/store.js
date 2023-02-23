import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';
import { filtersReducer } from './filterSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const contactsReducer = combineReducers({
  contacts: contactReducer,
  filter: filtersReducer,
});

const persistedContactsList = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: persistedContactsList,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);

