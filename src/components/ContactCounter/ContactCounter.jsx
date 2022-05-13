import React from 'react';
// import PropTypes from 'prop-types';
// import { CssForm } from 'сomponents';

import { useSelector } from 'react-redux';
// import { useGetContactsQuery } from 'redux/contacts/contacts';

// import { setfilter } from 'redux/store';

export function ContactCounter() {
  //const { data: contacts, isFetching } = useGetContactsQuery();
  const contacts = useSelector(state => state.contacts.contacts);
  //console.log(contacts);

  return <span>( total contacts: {contacts?.length} )</span>;
}
