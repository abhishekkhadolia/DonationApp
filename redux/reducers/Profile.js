import {baseUrl} from '../../assets/Api';
import {getProfile} from '../../assets/Api';
const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');

export const fetchProfileInfo = createAsyncThunk(
  'fetchProfileInfo',
  async () => {
    const response = await fetch(baseUrl + getProfile + 1);
    const final = await response.json();
    return final;
  },
);

const initialState = {
  data: null,
  isLoader: false,
  isError: false,
};

const Profile = createSlice({
  name: 'Profile',
  initialState: initialState,
  extraReducers: builder => {
    builder.addCase(fetchProfileInfo.pending, (state, action) => {
      state.isLoader = true;
    });
    builder.addCase(fetchProfileInfo.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchProfileInfo.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});

export default Profile.reducer;
