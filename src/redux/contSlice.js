import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import shortid from 'shortid';

const initialState = {
  items: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.items.push({
        id: shortid(),
        name: payload.name,
        number: payload.number,
      });
    },
    delContact(state, { payload }) {
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload),
      };
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, delContact } = contactsSlice.actions;
export const getContacts = state => state.contacts.items;
