import { addEmail } from "@/features/forms/userSignup/userSignupSlice";
import { useDispatch } from "react-redux";

export default function Email() {
  const dispatch = useDispatch();
  return (
    <div className="mb-4">
      <input
        type="email"
        onChange={(e) => dispatch(addEmail(e.target.value))}
        placeholder="Email address"
        className="border p-2 rounded w-full"
      />
    </div>
  );
}
