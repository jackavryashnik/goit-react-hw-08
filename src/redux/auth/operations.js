import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk(
  'auth/register',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post('auth/register');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (_, thunkAPI) => {
  try {
    const response = await axios.post('auth/login');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logot = createAsyncThunk('auth/logot', async (_, thunkAPI) => {
  try {
    const response = await axios.post('auth/logot');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk('auth/refreshUser', async (_, thunkAPI) => {
    try {
      const response = await axios.get('auth/refresh');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });