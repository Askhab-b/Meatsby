import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../api/axios'

if (typeof window !== 'undefined') { var user = localStorage.getItem('token') }

var initialState = {
  signingUp: false,
  signingIn: false,
  user: {},
  error: null,
  registered: false,
  token: user,
}

export const createUser = createAsyncThunk('auth/createUser', async (params) => {
  const { data } = await axios.post('/register', params) 
  .catch(function (error) {
    console.log(error.toJSON());
  });

  return data;
});

export const doLogin = createAsyncThunk('auth/doLogin', async (params) => {
  const { data } = await axios.post('/login', params)
  .catch(function (error) {
    console.log(error.toJSON());
  });
  localStorage.setItem('token', data.token);
  localStorage.setItem('user', data.user);
  
  return data;
});

export const logOut = createAsyncThunk('auth/logOut', async (req, res) => {
  localStorage.removeItem('token');
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logOut.fulfilled, (state, action) => {
        state.token = null;
      })

      .addCase(createUser.pending, (state, action) => {
        state.signingUp = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.signingUp = true;
        state.error = null;
        state.registered = true;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.signingUp = false;
        state.error = action.payload;
      })
      .addCase(doLogin.pending, (state, action) => {
        state.signingIn = true;
      })
      .addCase(doLogin.fulfilled, (state, action) => {
        state.signingIn = true;
        state.error = null;
        state.token = action.payload.token;
      })
      .addCase(doLogin.rejected, (state, action) => {
        state.signingIn = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.actions
export default authSlice.reducer;