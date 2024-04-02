import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(login.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logout.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(logout.fulfilled, state => {
        state.loading = false;
        state.isLoggedIn = false;
        state.items = [];
        state.token = null;
      })
      .addCase(refreshUser.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
  },
});

export default authSlice.reducer;
