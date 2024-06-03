import { createSlice } from "@reduxjs/toolkit";
import { date } from "zod";

const initialState = [
  {
    name: {
      firstName: "",
      firstNameValidated: true,
      lastName: "",
      lastNameValidated: true,
    },
  },
  { gender: "", genderValidated: true },
  { dateOfBirth: "", ageValidated: true },
  { email: "", emailValidated: true },
  { country: "India" },
  { streetAddress: "", streetAddressValidated: true },
  { state: "Bihar" },
  { city: "", cityValidated: true },
  { pincode: "", pincodeValidated: true },
  { phone: "", phoneValidated: true },
  { allValidated: "" },
];

export const userSignupFormSlice = createSlice({
  name: "userSignup",
  initialState,
  reducers: {
    addFirstName: (state, { payload }) => {
      state[0].name.firstName = payload;
    },
    validateFirstName: (state, { payload }) => {
      state[0].name.firstNameValidated = payload;
    },
    addLastName: (state, { payload }) => {
      state[0].name.lastName = payload;
    },
    validateLastName: (state, { payload }) => {
      state[0].name.lastNameValidated = payload;
    },
    addGender: (state, { payload }) => {
      state[1].gender = payload;
    },
    validateGender: (state, { payload }) => {
      state[1].genderValidated = payload;
    },
    addDateOfBirth: (state, { payload }) => {
      state[2].dateOfBirth = payload;
    },
    validateDateOfBirth: (state, { payload }) => {
      state[2].ageValidated = payload;
    },
    addEmail: (state, { payload }) => {
      state[3].email = payload;
    },
    validateEmail: (state, { payload }) => {
      state[3].emailValidated = payload;
    },
    addCountry: (state, { payload }) => {
      state[4].country = payload;
    },
    addStreetAddress: (state, { payload }) => {
      state[5].streetAddress = payload;
    },
    validateStreetAddress: (state, { payload }) => {
      state[5].streetAddressValidated = payload;
    },
    addState: (state, { payload }) => {
      state[6].state = payload;
    },
    addCity: (state, { payload }) => {
      state[7].city = payload;
    },
    validateCity: (state, { payload }) => {
      state[7].cityValidated = payload;
    },
    addPincode: (state, { payload }) => {
      state[8].pincode = payload;
    },
    validatePincode: (state, { payload }) => {
      state[8].pincodeValidated = payload;
    },
    addPhone: (state, { payload }) => {
      state[9].phone = payload;
    },
    validatePhone: (state, { payload }) => {
      state[9].phoneValidated = payload;
    },
  },
});

export const {
  addFirstName,
  validateFirstName,
  addLastName,
  validateLastName,
  addGender,
  validateGender,
  addDateOfBirth,
  validateDateOfBirth,
  addEmail,
  validateEmail,
  addCountry,
  addState,
  addCity,
  validateCity,
  addStreetAddress,
  validateStreetAddress,
  addPincode,
  validatePincode,
  addPhone,
  validatePhone,
} = userSignupFormSlice.actions;
export default userSignupFormSlice.reducer;
