import { addState } from "@/features/forms/userSignup/userSignupSlice";
import { useDispatch } from "react-redux";

export default function State() {
  const dispatch = useDispatch();
  return (
    <select
      className="border p-2 rounded "
      disabled
      onChange={(e) => dispatch(addState(e.target.value))}
    >
      <option value={"Bihar"}>Bihar</option>
    </select>
  );
}
