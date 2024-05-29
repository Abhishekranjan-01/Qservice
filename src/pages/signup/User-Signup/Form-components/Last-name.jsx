import { addLastName } from "@/features/forms/userSignup/userSignupSlice";
import { useDispatch } from "react-redux";

export default function LastName() {
  const dispatch = useDispatch();
  return (
    <input
      type="text"
      placeholder="Last name"
      onChange={(e) => {
        dispatch(addLastName(e.target.value));
      }}
      className="border p-2 rounded w-full"
    />
  );
}
