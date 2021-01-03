import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';

const name = 'accounts';

export const fetchAccounts = createAsyncThunk(
  `${name}/fetchAccounts`,
  async (thunkAPI) => {
    const res = await Axios.get('http://localhost:4000/account/list');
    return res.data;
  },
);

export const createAccount = createAsyncThunk(
  `${name}/createAccount`,
  async (
    account: {
      name: string;
      contact: {
        office: string;
        fax: string;
      };
      manager: {
        name: string;
        position: string;
        mobile: string;
      };
      detail: {
        address: string;
        businessNumber: string;
        ceo: string;
      };
    },
    thunkAPI,
  ) => {
    const res = await Axios.post('http://localhost:4000/account/add', account);
    return res.data;
  },
);

export interface IAccount {
  _id: string;
  name: string;
  contact: {
    office: string;
    fax: string;
  };
  manager: {
    name: string;
    position: string;
    mobile: string;
  };
  detail: {
    address: string;
    businessNumber: string;
    ceo: string;
  };
}
export interface IAccountsState {
  accounts: IAccount[];
  loading: boolean;
  error?: string;
}

const initialState: IAccountsState = {
  accounts: [],
  loading: false,
  error: '',
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
    builder.addCase(createAccount.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createAccount.fulfilled, (state, action) => {
      state.loading = false;
      const account = state.accounts.concat(action.payload.account); // ...state
      state.accounts = account;
    });
    builder.addCase(createAccount.rejected, (state, action) => {
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

/**
 * TODO
 * 유효성 검사를 만들어야함
 * 전화번호나 사업자번호는 문자형식이지만 숫자만 사용가능하도록하고 추가적으로 포맷팅까지한다.
 * 현재 백앤드에서 발생하는 에러를 프론트앤드에도 사용하는 방법을 사용하고 싶다, 뭐 큰문제되는건 없을려나..?
 * 이부분에 대해 조금 더 연구해봐야겟다.
 * 표 부분 다시 만들고 싶다. 데이터가 눈에 잘안들어온다..
 * 사이드바도 다시 제작하고싶다.. 모달뺴고 다시만드는수준이 될려나..
 */
