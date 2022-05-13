import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async userinfo => {
  try {
    const { data } = await axios.post('/users/signup', userinfo);
    token.set(data.token);
    return data;
  } catch (error) {
    //gdfgd
  }
});

const logIn = createAsyncThunk('auth/login', async userinfo => {
  try {
    const { data } = await axios.post('/users/login', userinfo);
    token.set(data.token);
    return data;
  } catch (error) {
    //gdfgd
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    //gdfgd
  }
});

const refreshCurentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    // persistedToken = '1321';
    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    // console.log(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      // console.log(data);
      return data;
      // console.log('try - ');
    } catch (error) {
      // console.log('error - ', error);
      return thunkAPI.rejectWithValue();
      //gdfgd
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  refreshCurentUser,
};

export default operations;
