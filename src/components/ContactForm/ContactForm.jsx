import React, { useEffect } from 'react';

import { useState } from 'react';
// import PropTypes from 'prop-types';
import { CssForm } from './ContactForm.styled';

import { useSelector, useDispatch } from 'react-redux';
// import { addContact } from 'redux/store';

import toast from 'react-hot-toast';

import {
  useCreateContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contacts';

import { setDisabledButton } from 'redux/store';

import { contactsOperations } from 'redux/contacts';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { styled } from '@mui/material/styles';

const ButtonStylized = styled(Button)`
  /* This renders the buttons above... Edit me! */

  :hover {
    background-color: #084d05;
  }
`;

export const ContactForm = ({ initName = '', initNumber = '' }) => {
  const [name, setName] = useState(initName);
  const [number, setNumber] = useState(initNumber);

  //const { data: contacts, isFetching } = useGetContactsQuery();
  //const [createContact, { isLoading: isCreating }] = useCreateContactMutation();
  //  console.log('isCreating (1) - ', isCreating);
  // const isDisabledButton = useSelector(state => state.isDisabledButton.value);
  const contacts = useSelector(state => state.contacts.contacts);
  const isLoading = useSelector(state => state.contacts.isLoading);
  // console.log('isDeleting - contact form: ', isDeleting);
  const dispatch = useDispatch();
  //dispatch(setDisabledButton(isCreating));
  //const contacts = useSelector(state => state.contacts.items);
  // useEffect(() => {
  //   dispatch(setDisabledButton(isCreating));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isCreating]);
  //console.log(contacts);

  const handleChangeName = e => setName(e.currentTarget.value);
  const handleChangeNumber = e => setNumber(e.currentTarget.value);

  //const formSubmitHandler = data => {
  //   return new Promise((resolve, reject) => {
  //     if (
  //       contacts.some(({ name }) =>
  //         name.toLowerCase().includes(data.name.toLowerCase())
  //       )
  //     ) {
  //       //  console.log('1');
  //       alert(`${data.name} is already in contacts.`);
  //       return reject('Error! Error passed to reject function');
  //     }
  //     // console.log('2');
  //     setContacts(contacts => {
  //       return [
  //         ...contacts,
  //         {
  //           id: nanoid(),
  //           name: data.name,
  //           number: data.number,
  //         },
  //       ];
  //     });
  //     return resolve('Ok');
  //   });
  // };

  const addContacts = e => {
    e.preventDefault();
    // onSubmit({ name, number })
    //   .then(() => {
    //     reset();
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // console.log(contacts);
    // console.log(name);
    const localName = name;
    let contactId = '';

    if (
      contacts.some(({ name, id }) => {
        if (name.toLowerCase().includes(localName.toLowerCase())) {
          contactId = id;
          return true;
        }
        return false;
      })
    ) {
      //  console.log('1');
      dispatch(contactsOperations.editContact({ contactId, name, number }));
      toast.success(`Contact - ${name} - has been changed.`);
      // toast.error(`${name} is already in contacts.`);
      // alert(`${name} is already in contacts.`);
      // return reject('Error! Error passed to reject function');
    } else {
      dispatch(contactsOperations.createContact({ name, number }));
      // createContact({ name, phone: number }).then(
      //   toast.success(`Contact - ${name} - has been added.`)
      // );
      //   console.log('isCreating (2) - ', isCreating);

      toast.success(`Contact - ${name} - has been added.`);
    }
    reset();
  };

  function reset() {
    setName(initName);
    setNumber(initNumber);
  }

  return (
    <div>
      <h1>Contact book (phone book)</h1>
      <CssForm.Form onSubmit={addContacts}>
        {/* <CssForm.Label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChangeName}
          required
        />
      </CssForm.Label> */}
        <TextField
          // sx={{ width: '100%' }}
          fullWidth
          type="text"
          name="name"
          label="Name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChangeName}
          required
          inputProps={{
            pattern:
              "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
            title:
              "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
          }}
        ></TextField>
        {/* <CssForm.Label>
        <span>Number</span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChangeNumber}
          required
        />
      </CssForm.Label> */}
        <TextField
          // sx={{ width: '100%' }}
          fullWidth
          type="tel"
          name="number"
          label="Number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChangeNumber}
          required
          inputProps={{
            pattern: '[+]?[0-9]{1,4}?[-]?[0-9]{1,3}?[0-9]{1,9}',
            title:
              'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
          }}
        ></TextField>
        {/* <CssForm.Button type="submit" name="add" disabled={() => {}}>
        Add/Edit contact
      </CssForm.Button> */}
        <ButtonStylized variant="contained" name="add" type="submit">
          Add/Edit contact
        </ButtonStylized>
      </CssForm.Form>
    </div>
  );
};

// ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };
