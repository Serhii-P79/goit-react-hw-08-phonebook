import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { createAction, createReducer } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { createSlice } from '@reduxjs/toolkit';

import { contactsApi } from 'redux/contacts/contacts';
import { setupListeners } from '@reduxjs/toolkit/query';

import { authReducer } from './auth';
import { contactsReducer } from './contacts';

const authPersistConfig = {
  key: 'auth',
  version: 1,
  storage: storage,
  whitelist: ['token'],
};

const myFilter = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    // addContact: {
    //   reducer: (state, action) => {
    //     state.items.push(action.payload);
    //   },
    //   prepare: data => {
    //     const id = nanoid();
    //     return { payload: { id, ...data } };
    //   },
    // },
    // deleteContact(state, action) {
    //   state.items = [...state.items.filter(({ id }) => id !== action.payload)];
    // },
    setfilter(state, action) {
      state.value = action.payload;
    },
  },
});

const disabledButton = createSlice({
  name: 'disButton',
  initialState: { value: false },
  reducers: {
    setDisabledButton(state, action) {
      state.value = action.payload;
    },
  },
});

//const persistedReducer = persistReducer(persistConfig, myContacts.reducer);

//export const { addContact } = myContacts.actions;

export const { setfilter } = myFilter.actions;
export const { setDisabledButton } = disabledButton.actions;

//export const { deleteContact } = myContacts.actions;
//const f => getDefaultMiddleware().concat(contactsApi.middleware);

let middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    filter: myFilter.reducer,
    isDisabledButton: disabledButton.reducer,
    contacts: contactsReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: middleware.concat(contactsApi.middleware),
  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
