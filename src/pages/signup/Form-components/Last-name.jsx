import { addLastName } from "@/features/forms/userSignup/userSignupSlice";
import { useDispatch, useSelector } from "react-redux";

export default function LastName() {
  const dispatch = useDispatch();
  const { lastNameValidated } = useSelector(
    (store) => store.userSignupSlice[0].name
  );
  return (
    <div className="relative flex flex-col gap-2">
      <input
        type="text"
        placeholder="Last name"
        required
        onChange={(e) => {
          dispatch(addLastName(e.target.value));
        }}
        className="border p-2 rounded w-full"
      />
      {!lastNameValidated && (
        <h4 className="absolute top-10 text-xs font-medium text-red-600">
          *Last name is required
        </h4>
      )}
    </div>
  );
}
