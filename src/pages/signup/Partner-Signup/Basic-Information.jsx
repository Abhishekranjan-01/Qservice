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
import { addPhone } from "@/features/forms/userSignup/userSignupSlice";

export default function BasicInfromation() {
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <FirstName />
              <LastName />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 items-center">
              <Gender />
              <DateOfBirth />
            </div>

            <Email />
            <Country />
            <StreetAddress />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <State />
              <Cities />

              <Pincode />
            </div>

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

            <button
              type="submit"
              id="submit-button"
              className="px-4 py-2 rounded  bg-[#050708] hover:bg-[#050708]/90  text-white focus:outline-none transition-colors"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
