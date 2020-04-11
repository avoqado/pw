import { combineReducers } from "@reduxjs/toolkit";
import profile from "modules/profile/profileSlice";
import transactionForm from "modules/transactions/transactionFormSlice";
import transactions from "modules/transactions/transactionSlice";

export type RootState = ReturnType<typeof rootReducer>;
export const rootReducer = combineReducers({
  transactionForm,
  transactions,
  profile,
});
