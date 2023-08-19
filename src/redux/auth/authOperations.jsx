import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

export const $instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const setToken = token => {
  $instance.defaults.headers['Authorization'] = `Bearer ${token}`;
};
const clearToken = token => {
  $instance.defaults.headers['Authorization'] = '';
};


export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const {data}= await $instance.post('/users/signup', userData);
      setToken (data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const login = createAsyncThunk(
  'auth/login', async (userData, thunkAPI) => {
  try {
    const { data } = await $instance.post('/users/login', userData);
    setToken(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token

    try {
      setToken(token)
      const { data } = await $instance.get('/users/current');
     
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const { data } = await $instance.post('/users/logout');
      clearToken()
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);