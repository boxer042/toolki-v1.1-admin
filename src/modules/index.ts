import {
  Action,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
} from "@reduxjs/toolkit";
import accountsSlice from "./accountsSlice";

export const store = configureStore({
  reducer: { accounts: accountsSlice },
  middleware: getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
