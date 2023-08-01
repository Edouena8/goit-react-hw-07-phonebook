import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operation';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
    },
    [addContact.fulfilled](state, action) {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      const idx = state.items.findIndex(item => item.id === action.payload.id);
      state.items.splice(idx, 1);
    },
  },
});
