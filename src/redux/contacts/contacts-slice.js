import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operations';

const initialState = {
  contacts: [],
  isLoading: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.getContacts.fulfilled](state, action) {
      state.contacts = action.payload;
      state.isLoading = false;
    },
    [contactsOperations.getContacts.pending](state) {
      state.isLoading = true;
    },
    [contactsOperations.createContact.fulfilled](state, action) {
      state.contacts.push(action.payload);
      state.isLoading = false;
    },
    [contactsOperations.createContact.pending](state) {
      state.isLoading = true;
    },
    [contactsOperations.deleteContact.fulfilled](state, action) {
      // console.log('state.contacts - ', state.contacts);
      // console.log('action.payload - ', action.payload);
      state.contacts = [
        ...state.contacts.filter(({ id }) => id !== action.payload),
      ];
      state.isLoading = false;
    },
    [contactsOperations.deleteContact.pending](state) {
      state.isLoading = true;
    },
    [contactsOperations.editContact.fulfilled](state, action) {
      console.log(state);
      state.contacts = [
        ...state.contacts.map(contact => {
          console.log(contact);
          console.log(contact.id);
          console.log(contact.id);

          if (contact.id === action.payload.id) {
            console.log(contact.number);
            contact.number = action.payload.number;
          }
          return contact;
        }),
      ];
      state.isLoading = false;
    },
    [contactsOperations.editContact.pending](state) {
      state.isLoading = true;
    },
  },
});

export default contactsSlice.reducer;
