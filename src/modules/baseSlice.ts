import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const name = 'base';

export interface IBaseState {
  layer: boolean;
  sidebar: boolean;
  account: {
    visible: boolean;
  };
}

const initialState: IBaseState = {
  layer: false,
  sidebar: false,
  account: {
    visible: false,
  },
};

export const baseSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default baseSlice.reducer;
