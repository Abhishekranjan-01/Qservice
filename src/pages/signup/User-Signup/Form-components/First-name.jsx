import { useSelector, useDispatch } from "react-redux";
import { addFirstName } from "@/features/forms/userSignup/userSignupSlice";
export default function FirstName() {
  // const { firstName } = useSelector((store) => store.userSignupSlice[0].name);
  const dispatch = useDispatch();

  return (
    <input
      onChange={(e) => {
        dispatch(addFirstName(e.target.value));
      }}
      type="text"
      placeholder="First name"
      className="border p-2 rounded w-full"
    />
  );
}
