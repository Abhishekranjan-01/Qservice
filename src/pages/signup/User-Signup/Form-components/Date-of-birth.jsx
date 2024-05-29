import { addDateOfBirth } from "@/features/forms/userSignup/userSignupSlice";
import { useDispatch } from "react-redux";

export default function DateOfBirth() {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row items-center gap-4">
      <label htmlFor="date-of-birth " className="font-semibold">
        Date of birth:
      </label>
      <input
        type="date"
        name="date-of-birth"
        onChange={(e) => dispatch(addDateOfBirth(e.target.value))}
        className="border border-gray-300 rounded-md h-full px-1"
      />
    </div>
  );
}
