import { addStreetAddress } from "@/features/forms/userSignup/userSignupSlice";
import { useDispatch } from "react-redux";

export default function StreetAddress() {
  const dispatch = useDispatch();

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Street address"
        onChange={(e) => dispatch(addStreetAddress(e.target.value))}
        className="border p-2 rounded w-full"
      />
    </div>
  );
}
