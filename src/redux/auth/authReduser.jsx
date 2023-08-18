import { createSlice } from '@reduxjs/toolkit';
import { register, login, refresh, logout } from './authOperations';

const initialState = {
    isLoading: false,
    error: null,
    userData: null,
    authentificated: false,
    token: null
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = true;
        state.authentificated = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // ================Login=============
      .addCase(login.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authentificated = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // ===================refresh============
      .addCase(refresh.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authentificated = true;
        state.userData = action.payload;
      })
      .addCase(refresh.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // =================logout============
      .addCase(logout.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authentificated = false;
        state.userData = null;
        state.token = null
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const selectaUthentificated = state => state.auth.authentificated;
export const selectIsLoadingUser = state => state.auth.isLoading;
export const selectErrorUser = state => state.auth.error;
export const selectUserData = state => state.auth.userData;
export const selectToken = state => state.auth.token;

export const authReducer = authSlice.reducer