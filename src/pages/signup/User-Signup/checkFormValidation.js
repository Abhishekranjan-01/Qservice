export const checkFirstNameValidation = (firstName) =>
  firstName === "" ? false : true;
export const checkLastNameValidation = (lastName) =>
  lastName === "" ? false : true;
export const isEighteen = (dob) => {
  console.log("Dob:\t", dob);
  const today = new Date();
  const birthDate = new Date(dob);
  const age = today.getFullYear() - birthDate.getFullYear();
  console.log("After - Years age=:\t", age);
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1;
  }

  return age;
};

export const checkPhoneValidation = (phone) =>
  !phone.includes("91") || phone.length !== 12 ? false : true;
