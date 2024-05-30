export const checkFirstNameValidation = (firstName) =>
  firstName === "" ? false : true;
export const checkLastNameValidation = (lastName) =>
  lastName === "" ? false : true;
export function validateAge(dateOfBirth) {
  const givenDate = new Date(dateOfBirth);
  const currentDate = new Date();

  // Calculate the difference in years
  let yearsDifference = currentDate.getFullYear() - givenDate.getFullYear();

  // Adjust if the current date is before the given date's month and day in the current year
  const monthDifference = currentDate.getMonth() - givenDate.getMonth();
  const dayDifference = currentDate.getDate() - givenDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    yearsDifference--;
  }

  return yearsDifference < 18 ? false : true;
}

export const checkGenderValidation = (gender) => (gender === "" ? false : true);
export const checkEmailValidation = (email) => (email === "" ? false : true);
export const checkStreetAddressValidation = (streetAddress) =>
  streetAddress === "" ? false : true;
export const checkCityValidation = (city) => (city === "" ? false : true);
export const checkPincodeValidation = (pincode) =>
  pincode.length !== 6 ? false : true;
export const checkPhoneValidation = (phone) =>
  !phone.includes("91") || phone.length !== 12 ? false : true;
