import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AuthService from '../../Auth/Auth';

const initialState = {
  data: null,
  isLogin: false,
  isRegister: false,
  isLoader: false,
  isError: false,
  message: null,
};

export const getLogin = createAsyncThunk(
  'auth/login',
  async ({email, password}, thunkApi) => {
    try {
      const response = await AuthService.login(email, password);

      return response;
    } catch (error) {
      console.log(error);
    }
  },
);

export const register = createAsyncThunk(
  'auth/register',
  async ({fullName, email, password}, thunkApi) => {
    try {
      const response = await AuthService.registerUser(
        fullName,
        email,
        password,
      );

      return response;
    } catch (error) {
      console.log(error);
    }
  },
);

const User = createSlice({
  name: 'User',
  initialState: initialState,
  extraReducers: builder => {
    builder.addCase(getLogin.pending, (state, action) => {
      state.isLoader = true;
    });
    builder.addCase(getLogin.fulfilled, (state, action) => {
      state.isLoader = false;
      state.isError = false;
      state.data = action.payload;
      if (action.payload.status === true) {
        state.isLogin = true;
      } else {
        state.isLogin = false;
        state.message = action.payload.message;
      }
    });
    builder.addCase(getLogin.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
      state.isLogin = false;
    });

    // Registration Redux Classes
    builder.addCase(register.pending, (state, action) => {
      state.isLoader = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoader = false;
      state.isError = false;
      state.data = action.payload;
      if (action.payload.status === true) {
        state.isRegister = true;
      } else {
        state.isRegister = false;
        state.message = action.payload.message;
      }
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
      state.isRegister = false;
    });
  },
});

export default User.reducer;
