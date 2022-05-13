import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
// import PropTypes from 'prop-types';
import { CssForm, CssContactList, ContactItem } from 'components';

import { useSelector, useDispatch } from 'react-redux';
//import { deleteContact } from 'redux/store';

//import { useGetContactsQuery } from 'redux/contacts/contacts';
//import { useAddContactMutation } from 'utilities/contacts';
//import { useDeleteContactMutation } from 'redux/contacts/contacts';

import { setDisabledButton } from 'redux/store';
import { contactsOperations } from 'redux/contacts';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ButtonStylized = styled(Button)`
  /* This renders the buttons above... Edit me! */

  :hover {
    background-color: #530707;
  }
`;

export function ContactList() {
  //const { data: contacts, error, isLoading } = useGetContactsQuery();
  const dispatch = useDispatch();
  //const [addData] = useAddContactMutation();

  //const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  //dispatch(setDisabledButton(isDeleting));
  // const handleAddContact = async () => {
  //   try {
  //     await addData({ name: 'fdgdfg', phone: '12354651' }).unwrap();
  //   } catch {}
  // };

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);
  // handleAddContact();

  const contacts = useSelector(state => state.contacts.contacts);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const filter = useSelector(state => state.filter.value);
  const isDisabledButton = useSelector(state => state.isDisabledButton.value);

  //dispatch(setDisabledButton(isDeleting));
  // console.log('isDisabledButton - ', isDisabledButton);
  // console.log('isDeleting 1 - ', isDeleting);
  let contactsServer = [];

  const getFilteringContactsServer = () => {
    const normolizeFiltr = filter.toLowerCase();
    console.log('normolizeFiltr - ', normolizeFiltr);
    console.log('contacts - ', contacts);
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normolizeFiltr)
    );
  };

  //if (!isLoading && !error) {
  // console.log(contacts);
  if (!isLoading) {
    contactsServer = getFilteringContactsServer();
  }
  //}
  console.log(contactsServer);
  // console.log(error);

  // const getFilteringContacts = () => {
  //   const normolizeFiltr = filter.toLowerCase();
  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(normolizeFiltr)
  //   );
  // };

  return (
    <CssContactList.ContactList>
      {!isLoading &&
        contactsServer.map(({ id, name, number }) => {
          return (
            <ContactItem key={id} name={name} number={number}>
              {/* <CssForm.Button
                type="button"
                name="del"
                onClick={e => {
                  dispatch(contactsOperations.deleteContact(id));
                  toast.success(`Contact - ${name} - has been deleted.`);
                  //  deleteContact(id).then(
                  //    toast.success(`Contact - ${name} - has been deleted.`)
                  //  );
                }}
                // disabled={}
              >
                 {isDeleting ? 'Deleting...' : 'Delete'} Delete
              </CssForm.Button> */}
              <ButtonStylized
                variant="contained"
                type="button"
                name="del"
                onClick={e => {
                  dispatch(contactsOperations.deleteContact(id));
                  toast.success(`Contact - ${name} - has been deleted.`);
                }}
              >
                Delete
              </ButtonStylized>
            </ContactItem>
            // <CssContactList.Contact key={id}>
            //   <CssContactList.Name>{name}:</CssContactList.Name> tel:{' '}
            //   <CssContactList.Number>{number}</CssContactList.Number>
            //   <CssForm.Button
            //     type="button"
            //     name="del"
            //     onClick={e => onDelete(e, id)}
            //   >
            //     Delete
            //   </CssForm.Button>
            // </CssContactList.Contact>
          );
        })}
    </CssContactList.ContactList>
  );
}

// ContactList.propTypes = {
//   contact: PropTypes.arrayOf(PropTypes.object).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
