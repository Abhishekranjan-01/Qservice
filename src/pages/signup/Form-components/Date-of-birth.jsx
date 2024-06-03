import { addDateOfBirth } from "@/features/forms/userSignup/userSignupSlice";

import { useDispatch, useSelector } from "react-redux";

export default function DateOfBirth({ register, errors }) {
  const dispatch = useDispatch();
  const { dateOfBirth, ageValidated } = useSelector(
    (store) => store.userSignupSlice[2]
  );
  return (
    <div className="relative ">
      <div className="flex flex-row items-center gap-4">
        <label htmlFor="date-of-birth " className="font-semibold">
          Date of birth:
        </label>
        <input
          value={dateOfBirth}
          {...register("dateOfBirth")}
          type="date"
          name="date-of-birth"
          required
          onChange={(e) => dispatch(addDateOfBirth(e.target.value))}
          className="border border-gray-300 rounded-md h-full px-1"
        />
      </div>
      {errors.dateOfBirth && (
        <h4 className="absolute top-7 text-xs font-medium text-red-600">
          {errors.dateOfBirth.message}
        </h4>
      )}
    </div>
  );
}
