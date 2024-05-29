import userSignupSlice, {
  userSignupFormSlice,
} from "@/features/forms/userSignup/userSignupSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { userSignupSlice },
});
