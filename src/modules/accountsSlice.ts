import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

const name = "accounts";

export const fetchAccounts = createAsyncThunk(
  `${name}/fetchAccounts`,
  async (thunkAPI) => {
    const res = await Axios.get("http://localhost:4000/supplier/list");
    return res.data;
  }
);

export interface IAccount {
  _id: string;
  name: string;
  address: string;
  phoneNumber: string;
  faxNumber: string;
  cellphoneNumber: string;
  remark: string;
}
export interface IAccountsState {
  accounts: IAccount[];
  loading: boolean;
  error: string | null | undefined;
}

const initialState: IAccountsState = {
  accounts: [],
  loading: false,
  error: null,
};

export const accountsSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAccounts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchAccounts.fulfilled, (state, action) => {
      state.loading = false;
      state.accounts = action.payload;
    });
    builder.addCase(fetchAccounts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default accountsSlice.reducer;

// const listState = (state: RootState) => state.todoSlice.lists;

// export const getFilterLike = createSelector(listState, (lists) => {
//   return lists.filter(({ likes }: { likes: number }) => likes > 10);
// });
// export const { setTitle } = todoSlice.actions;

// export const lists = (state: RootState) => state.todoSlice.lists;
// export const titles = (state: RootState) => state.todoSlice.title;
