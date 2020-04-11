import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";

const preloadedState = {
  profile: {
    id: null,
    name: "",
    email: "",
    balance: 0,
  },
  transactionForm: {
    name: "",
    amount: 0,
  },
  transactions: [],
};

export const store = configureStore({
  preloadedState,
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== "production",
});

export type AppDispatch = typeof store.dispatch;
