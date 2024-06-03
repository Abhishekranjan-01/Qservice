import { useDispatch, useSelector } from "react-redux";
import { addLastName } from "@/features/forms/userSignup/userSignupSlice";

export default function LastName({ register, errors }) {
  const { lastName, lastNameValidated } = useSelector(
    (store) => store.userSignupSlice[0].name
  );
  const dispatch = useDispatch();
  return (
    <div className="relative flex flex-col gap-2">
      <input
        value={lastName}
        {...register("lastName")}
        onChange={(e) => {
          dispatch(addLastName(e.target.value));
        }}
        type="text"
        placeholder="Last name"
        required
        className="border p-2 rounded w-full"
      />
      {errors.lastName && (
        <h4 className="absolute top-10 text-xs font-medium text-red-600">
          {errors.lastName.message}
        </h4>
      )}
    </div>
  );
}
