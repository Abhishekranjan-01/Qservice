import userSignupSlice from "@/features/forms/userSignup/userSignupSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { userSignupSlice },
});
