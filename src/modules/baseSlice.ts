import { createSlice } from '@reduxjs/toolkit';

const name = 'base';

export interface IBaseState {
  layer: boolean;
  header: boolean;
  footer: boolean;
  modal: boolean;
  account: {
    visible: boolean;
  };
}

const initialState: IBaseState = {
  layer: false,
  header: true,
  footer: false,
  modal: false,
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
    isHeader: (state, action) => {
      state.header = action.payload;
    },
    isFooter: (state, action) => {
      state.footer = action.payload;
    },
    openLayer: (state) => {
      state.layer = true;
    },
    closeLayer: (state) => {
      state.layer = false;
    },
  },
  extraReducers: () => {},
});

export default baseSlice.reducer;

export const {
  openAccountModal,
  closeAccountModal,
  isHeader,
  isFooter,
  openLayer,
  closeLayer,
} = baseSlice.actions;
