import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/reducer";

interface UserInfo {
  id: null | string;
  name: string;
  email: string;
  balance: number;
}

interface ProfileData {
  id?: null | string;
  name?: string;
  email?: string;
  balance?: number;
}

export const initialState: UserInfo = {
  id: null,
  name: "",
  email: "",
  balance: 0,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    resetUser: () => initialState,
    setUserInfo: (state, action: PayloadAction<ProfileData>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { resetUser, setUserInfo } = profileSlice.actions;
export default profileSlice.reducer;

export const profileSelector = (state: RootState) => state.profile;
