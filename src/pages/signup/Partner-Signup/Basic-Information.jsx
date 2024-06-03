import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Cities from "../Form-components/Cities";
import FirstName from "../Form-components/First-name";
import LastName from "../Form-components/Last-name";
import Gender from "../Form-components/Gender";
import Email from "../Form-components/Email";
import Country from "../Form-components/Country";
import StreetAddress from "../Form-components/Street-address";
import State from "../Form-components/State";
import Pincode from "../Form-components/Pincode";
import DateOfBirth from "../Form-components/Date-of-birth";
import { useDispatch } from "react-redux";

import {
  addPhone,
  validateCity,
  validatePhone,
} from "@/features/forms/userSignup/userSignupSlice";
import {
  checkPhoneValidation,
  isEighteen,
} from "../User-Signup/checkFormValidation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import BusinessName from "../Form-components/BusinessName";
import { useNavigate } from "react-router-dom";

export default function BasicInfromation() {
  const navigate = useNavigate();
  const schema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    businessName: z.string(),
    gender: z.string(),
    dateOfBirth: z.string().refine((dob) => isEighteen(dob) >= 18, {
      message: "You must be at least 18 years old",
    }),
    email: z.string().email(),
    streetAddress: z
      .string({ message: "Address is Too Short" })
      .trim()
      .min(10, { message: "Address is too short" })
      .max(100, { message: "Address is too long" }),

    pincode: z.coerce.number().lte(823001).gte(800001),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const { city, cityValidated } = useSelector(
    (store) => store.userSignupSlice[7]
  );
  const { phone, phoneValidated } = useSelector(
    (store) => store.userSignupSlice[9]
  );
  const onSubmit = (data) => {
    if (city) {
      console.log("City Is Validated");
      dispatch(validateCity(true));
    } else if (!city) {
      console.log("City not validate");
      dispatch(validateCity(false));
    }

    dispatch(validatePhone(checkPhoneValidation(phone)));
    console.log("Successfully submited :\t", data);
    if (phoneValidated && cityValidated) {
      navigate("/partner-signup/service+information+page");
    }
  };

  const { firstName, lastName } = useSelector(
    (store) => store.userSignupSlice[0].name
  );
  const { dateOfBirth } = useSelector((store) => store.userSignupSlice[2]);
  const { pincode } = useSelector((store) => store.userSignupSlice[8]);
  const { streetAddress } = useSelector((store) => store.userSignupSlice[5]);
  const { gender } = useSelector((store) => store.userSignupSlice[1]);

  useEffect(() => {
    // Update form values when Redux state changes
    reset({
      firstName,
      lastName,
      gender,
      dateOfBirth,
      pincode,
      streetAddress,
      gender,
      phone,
    });
  }, [
    firstName,
    lastName,
    gender,
    dateOfBirth,
    pincode,
    streetAddress,
    phone,
    reset,
  ]);

  const dispatch = useDispatch();

  return (
    <div className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto p-4">
        <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
          <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Personal Information
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Use a present address where you can receive services.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <FirstName register={register} errors={errors} />
              <LastName register={register} errors={errors} />
              <BusinessName register={register} errors={errors} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 items-center">
              <Gender register={register} errors={errors} />
              <DateOfBirth register={register} errors={errors} />
            </div>

            <Email register={register} errors={errors} />
            <Country />
            <StreetAddress register={register} errors={errors} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <State />
              <Cities register={register} error={errors} />

              <Pincode register={register} errors={errors} />
            </div>
            <div className="relative">
              <PhoneInput
                type="tel"
                role="phone number"
                country={"in" || 91}
                onlyCountries={["in"]}
                preferredCountries={["in"]}
                placeholder=""
                className="mb-4 w-1/2 sm:w-full"
                // value={this.state.phone}
                onChange={(phone) => dispatch(addPhone(phone))}
              />
              {!phoneValidated && (
                <h4 className="absolute top-9 text-xs font-medium text-red-600">
                  Please enter phone in correct pattern
                </h4>
              )}
            </div>

            <button
              type="submit"
              id="submit-button"
              className="px-4 py-2 rounded  bg-[rgb(5,7,8)] hover:bg-[#050708]/90  text-white focus:outline-none transition-colors"
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
