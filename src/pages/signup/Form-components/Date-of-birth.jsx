import { addDateOfBirth } from "@/features/forms/userSignup/userSignupSlice";
import { useDispatch, useSelector } from "react-redux";

export default function DateOfBirth() {
  const dispatch = useDispatch();
  const { ageValidated } = useSelector((store) => store.userSignupSlice[2]);
  return (
    <div className="relative ">
      <div className="flex flex-row items-center gap-4">
        <label htmlFor="date-of-birth " className="font-semibold">
          Date of birth:
        </label>
        <input
          type="date"
          name="date-of-birth"
          required
          onChange={(e) => dispatch(addDateOfBirth(e.target.value))}
          className="border border-gray-300 rounded-md h-full px-1"
        />
      </div>
      {!ageValidated && (
        <h4 className="absolute top-6 text-xs font-medium text-red-600">
          *Below 18 found !!
        </h4>
      )}
    </div>
  );
}
