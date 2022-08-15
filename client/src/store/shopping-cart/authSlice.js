import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../api/axios'

export const createUser = createAsyncThunk('auth/createUser', async (params) => {
  console.log(params)
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
  
  return data;
});

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
  const { data } = await axios.get('/auth/me')
  .catch(function (error) {
    console.log(error.toJSON());
  });

  return data;
});

var initialState = {
  data: '',
  status: 'loading',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    // doLogin
    builder
      .addCase(doLogin.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(doLogin.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.data = action.payload;
      })
      .addCase(doLogin.rejected, (state, action) => {
        state.status = 'error';
        state.data = null;
      })
      // fetchAuthMe
      .addCase(fetchAuthMe.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(fetchAuthMe.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.data = action.payload;
      })
      .addCase(fetchAuthMe.rejected, (state, action) => {
        state.status = 'error';
        state.data = null;
      })
      // createUser
      .addCase(createUser.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.data = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = 'error';
        state.data = null;
      });
  },
});

export const selectIsAuth = (state) => Boolean(state.auth.data);
export const { logout } = authSlice.actions;
export default authSlice.reducer;