import { useSelector, useDispatch } from "react-redux";
import { addFirstName } from "@/features/forms/userSignup/userSignupSlice";
export default function FirstName() {
  const { firstNameValidated } = useSelector(
    (store) => store.userSignupSlice[0].name
  );
  const dispatch = useDispatch();

  return (
    <div className="relative ">
      <input
        onChange={(e) => {
          dispatch(addFirstName(e.target.value));
        }}
        type="text"
        placeholder="First name"
        required
        className="border p-2 rounded w-full"
      />
      {!firstNameValidated && (
        <h4 className="absolute top-10 text-xs font-medium text-red-600">
          *First name is required
        </h4>
      )}
    </div>
  );
}
