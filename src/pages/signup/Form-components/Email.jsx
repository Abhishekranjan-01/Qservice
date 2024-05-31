import { addEmail } from "@/features/forms/userSignup/userSignupSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Email() {
  const dispatch = useDispatch();
  const { emailValidated } = useSelector((store) => store.userSignupSlice[3]);
  return (
    <div className="relative">
      <div className="mb-4">
        <input
          type="email"
          onChange={(e) => dispatch(addEmail(e.target.value))}
          placeholder="Email address"
          className="border p-2 rounded w-full"
        />
      </div>
      {!emailValidated && (
        <h4 className="absolute top-10 text-xs font-medium text-red-600">
          *Email is required
        </h4>
      )}
    </div>
  );
}
