import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function UserSignup() {
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
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First name"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border p-2 rounded w-full"
              />
            </div>
            <div className=" gap-4 mb-4">
              <select className="border p-2 rounded w-full">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email address"
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <select className="border p-2 rounded w-full" disabled>
                <option>India</option>
              </select>
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Street address"
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <input
                type="text"
                placeholder="City"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="State "
                value={"Bihar"}
                disabled
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="pincode / Postal code"
                className="border p-2 rounded w-full"
                minLength={6}
                maxLength={6}
              />
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
              // onChange={(phone) => this.setState({ phone })}
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
