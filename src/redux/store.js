import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';
import { filtersReducer } from './filterSlice';
import { combineReducers } from 'redux';


const contactsReducer = combineReducers({
  contacts: contactReducer,
  filter: filtersReducer,
});



export const store = configureStore({
  reducer: contactsReducer,
});



