import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/reducer";

export interface TransactionFormState {
  amount: number;
  name: string;
}

const initialState = {
  name: "",
  amount: 0,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateTransactionForm: (
      state,
      action: PayloadAction<TransactionFormState>
    ) => action.payload,
  },
});

export const formSelector = (state: RootState) => state.transactionForm;
export const { updateTransactionForm } = formSlice.actions;
export default formSlice.reducer;
