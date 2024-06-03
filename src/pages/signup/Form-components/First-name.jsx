import { useSelector, useDispatch } from "react-redux";
import { addFirstName } from "@/features/forms/userSignup/userSignupSlice";
export default function FirstName({ register, errors }) {
  const { firstName } = useSelector((store) => store.userSignupSlice[0].name);
  const dispatch = useDispatch();

  return (
    <div className="relative ">
      <input
        value={firstName}
        {...register("firstName")}
        onChange={(e) => {
          dispatch(addFirstName(e.target.value));
        }}
        type="text"
        placeholder="First name"
        required
        className="border p-2 rounded w-full"
      />
      {errors.firstName && (
        <h4 className="absolute top-10 text-xs font-medium text-red-600">
          {errors.firstName.message}
        </h4>
      )}
    </div>
  );
}
