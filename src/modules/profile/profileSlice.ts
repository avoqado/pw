import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/reducer";

interface UserInfo {
  id?: null | string;
  name?: string;
  email?: string;
  balance?: string;
}

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const initialState: UserInfo = {
  id: null,
  name: "",
  email: "",
  balance: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInfo>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setUserInfo } = profileSlice.actions;
export default profileSlice.reducer;

export const profileSelector = (state: RootState) => state.profile;
