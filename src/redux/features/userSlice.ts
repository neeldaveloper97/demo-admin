import { RootState } from "../store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserSliceState } from "../../types/userTypes";

const initialState: UserSliceState = {
  user: [],
  slider: true,
  isFetching: false,
  isSuccess: false,
  isError: false,
  isUpdate: false,
  error: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearBucketState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.error = "";
    },
    setSlider: (state, action: PayloadAction<boolean>) => {
      state.slider = action.payload;
    },
  },

  extraReducers: (builder) => {},
});


export const { setSlider } = UserSlice.actions;
export default UserSlice;
