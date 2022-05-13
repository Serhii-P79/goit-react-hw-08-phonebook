import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { number } from 'prop-types';

const getContacts = createAsyncThunk('contacts/get', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    //gdfgd
  }
});

const createContact = createAsyncThunk('contacts/create', async contactInfo => {
  try {
    const { data } = await axios.post('/contacts', contactInfo);
    return data;
  } catch (error) {
    //gdfgd
  }
});

const deleteContact = createAsyncThunk('contacts/delete', async contactID => {
  try {
    await axios.delete(`/contacts/${contactID}`);
    return contactID;
  } catch (error) {
    //gdfgd
  }
});

const editContact = createAsyncThunk('contacts/edit', async contactInfo => {
  const contactID = contactInfo.contactId;
  const editData = {
    name: contactInfo.name,
    number: contactInfo.number,
  };
  try {
    const { data } = await axios.patch(`/contacts/${contactID}`, editData);
    // console.log(data);
    return data;
  } catch (error) {
    //gdfgd
  }
});

const operations = {
  getContacts,
  createContact,
  deleteContact,
  editContact,
};

export default operations;
