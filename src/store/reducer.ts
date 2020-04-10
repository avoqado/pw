import { combineReducers } from "@reduxjs/toolkit";
import profile from "modules/profile/profileSlice";
import transactions from "modules/transactions/transactionSlice";

export const rootReducer = combineReducers({ profile, transactions });
export type RootState = ReturnType<typeof rootReducer>;
