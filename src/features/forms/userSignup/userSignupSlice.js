import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { name: { firstName: "", lastName: "" } },
  { gender: "" },
  { dateOfBirth: "" },
  { email: "" },
  { country: "India" },
  { streetAddress: "" },
  { state: "Bihar" },
  { city: "" },
  { pincode: "" },
  { phone: "" },
];

export const userSignupFormSlice = createSlice({
  name: "userSignup",
  initialState,
  reducers: {
    addFirstName: (state, { payload }) => {
      state[0].name.firstName = payload;
    },
    addLastName: (state, { payload }) => {
      state[0].name.lastName = payload;
    },
    addGender: (state, { payload }) => {
      state[1].gender = payload;
    },
    addDateOfBirth: (state, { payload }) => {
      state[2].dateOfBirth = payload;
    },

    addEmail: (state, { payload }) => {
      state[3].email = payload;
    },
    addCountry: (state, { payload }) => {
      state[4].country = payload;
    },
    addStreetAddress: (state, { payload }) => {
      state[5].streetAddress = payload;
    },
    addState: (state, { payload }) => {
      state[6].state = payload;
    },
    addCity: (state, { payload }) => {
      state[7].city = payload;
    },
    addPincode: (state, { payload }) => {
      state[8].pincode = payload;
    },
    addPhone: (state, { payload }) => {
      state[9].phone = payload;
    },
  },
});

export const {
  addFirstName,
  addLastName,
  addGender,
  addDateOfBirth,
  addEmail,
  addCountry,
  addState,
  addCity,
  addStreetAddress,
  addPincode,
  addPhone,
} = userSignupFormSlice.actions;
export default userSignupFormSlice.reducer;
