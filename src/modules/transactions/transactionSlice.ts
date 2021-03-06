import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/reducer";

type TransactionList = Transaction[];

export interface Transaction {
  id: number;
  date: string;
  username: string;
  amount: number;
  balance: number;
}

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: [],
  reducers: {
    resetTransactions: () => [],
    addTransactions: (state, action: PayloadAction<any>) => [
      ...action.payload,
      ...state,
    ],
  },
});

export const { resetTransactions, addTransactions } = transactionsSlice.actions;
export default transactionsSlice.reducer;

export const transactionSelector = (state: RootState) => state.transactions;
