// import React, { Component } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
// import { nanoid } from 'nanoid';
import { GlobalStyle } from './GLobalStyle';
import { Layout, CssApp } from 'components';

import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, RegisterPage, LoginPage, ContactsPage } from 'pages';
import { RequireAutch, PublicRoute } from 'hoc';

// import * as LocalApi from 'utilities';

// import { useSelector, useDispatch } from 'react-redux';
// import { increment } from 'redux/store';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.refreshCurentUser());
  }, [dispatch]);
  // const [contacts, setContacts] = useState([]);
  //const [filter, setFilter] = useState('');

  //const dispatch = useDispatch();

  // const contactsS = useSelector(state => state.contacts.items);
  // const filterS = useSelector(state => state.contacts.filter);

  // console.log('items - ', contactsS);
  // console.log('filter - ', filterS);

  // useEffect(() => {
  //   const contacts = LocalApi.load('contacts');
  //   contacts && setContacts([...contacts]);
  // }, []);

  // useEffect(() => {
  //   //  console.log('save contacts');
  //   LocalApi.save('contacts', contacts);
  // }, [contacts]);

  // const formSubmitHandler = data => {
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

  // const deleteContact = (e, delId) => {
  //   // setContacts(contacts => {
  //   //   return [...contacts.filter(({ id }) => id !== delId)];
  //   // });
  // };

  // const handleChangeFiltrContacts = evt => {
  //   setFilter(evt.currentTarget.value);
  // };

  // const getFilteringContacts = () => {
  //   // const normolizeFiltr = filter.toLowerCase();
  //   // return contacts.filter(({ name }) =>
  //   //   name.toLowerCase().includes(normolizeFiltr)
  //   // );
  // };

  return (
    <CssApp.Contener>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <RequireAutch>
                <ContactsPage />
              </RequireAutch>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
          {/* <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        /> */}
        </Route>
      </Routes>
    </CssApp.Contener>
  );
}
