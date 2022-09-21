import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../redux/contSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
