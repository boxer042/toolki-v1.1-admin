import {
  Action,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
} from '@reduxjs/toolkit';
import accountsSlice from './accountsSlice';
import baseSlice from './baseSlice';

export const store = configureStore({
  reducer: { accounts: accountsSlice, base: baseSlice },
  middleware: getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
