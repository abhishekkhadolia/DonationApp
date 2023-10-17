import {DonationList, baseUrl} from '../../assets/Api';

const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');

export const fetchDonationList = createAsyncThunk(
  'fetchDonationList',
  async () => {
    const response = await fetch(baseUrl + DonationList);
    const final = await response.json();
    return final;
  },
);

const initialState = {
  data: null,
  isLoader: false,
  isError: false,
};

const Donation = createSlice({
  name: 'Donation',
  initialState: initialState,
  extraReducers: builder => {
    builder.addCase(fetchDonationList.pending, (state, action) => {
      state.isLoader = true;
    });
    builder.addCase(fetchDonationList.fulfilled, (state, action) => {
      state.isLoader = false;
      state.isError = false;
      state.data = action.payload;
    });
    builder.addCase(fetchDonationList.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});

export default Donation.reducer;
