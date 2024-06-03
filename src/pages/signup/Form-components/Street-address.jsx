import { addStreetAddress } from "@/features/forms/userSignup/userSignupSlice";
import { useDispatch, useSelector } from "react-redux";

export default function StreetAddress({ register, errors }) {
  const dispatch = useDispatch();
  const { streetAddress } = useSelector((store) => store.userSignupSlice[5]);

  return (
    <div className="relative ">
      <div className="mb-4">
        <input
          value={streetAddress}
          {...register("streetAddress")}
          type="text"
          placeholder="Street address"
          onChange={(e) => dispatch(addStreetAddress(e.target.value))}
          className="border p-2 rounded w-full"
        />
      </div>
      {errors.streetAddress && (
        <h4 className="absolute top-10 text-xs font-medium text-red-600">
          {errors.streetAddress.message}
        </h4>
      )}
    </div>
  );
}
