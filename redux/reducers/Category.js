const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');
export const fetchCategoryList = createAsyncThunk(
  'fetchCategoryList',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const final = await response.json();
    return final;
  },
);

const initialState = {
  data: null,
  isLoader: false,
  isError: false,
};

const Category = createSlice({
  name: 'Category',
  initialState: initialState,

  extraReducers: builder => {
    builder.addCase(fetchCategoryList.pending, (state, action) => {
      state.isLoader = true;
    });
    builder.addCase(fetchCategoryList.fulfilled, (state, action) => {
      state.isLoader = false;
      state.isError = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCategoryList.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});

export default Category.reducer;
