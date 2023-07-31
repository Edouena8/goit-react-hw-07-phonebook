import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [{ id: 1, name: 'Liza', number: '555' }],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: shortid.generate(),
            name: text.name,
            number: text.number,
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
