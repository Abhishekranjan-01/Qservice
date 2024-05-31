import { addCountry } from "@/features/forms/userSignup/userSignupSlice";
import { useDispatch } from "react-redux";

export default function Country() {
  const dispatch = useDispatch();
  return (
    <div className="mb-4">
      <select
        className="border p-2 rounded w-full"
        disabled
        onChange={(e) => dispatch(addCountry(e.target.value))}
      >
        <option value={"India"}>India</option>
      </select>
    </div>
  );
}
