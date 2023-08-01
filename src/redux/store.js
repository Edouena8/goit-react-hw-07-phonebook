import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';
import { modalSlice } from './modalSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
    modal: modalSlice.reducer,
  },
});
