import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';

const initialState = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.push({
        id: shortid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    delContact: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addContact, delContact } = contactsSlice.actions;
export default contactsSlice.reducer;
