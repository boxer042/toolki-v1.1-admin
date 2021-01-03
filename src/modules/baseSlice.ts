import { createSlice } from '@reduxjs/toolkit';

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
  reducers: {
    openAccountModal: (state) => {
      state.account.visible = true;
      state.layer = true;
    },
    closeAccountModal: (state) => {
      state.account.visible = false;
      state.layer = false;
    },
  },
  extraReducers: () => {},
});

export default baseSlice.reducer;

export const { openAccountModal, closeAccountModal } = baseSlice.actions;
