import { addPincode } from "@/features/forms/userSignup/userSignupSlice";
import { useDispatch, useSelector } from "react-redux";
// import "./style.css";

export default function Pincode({ register, errors }) {
  const dispatch = useDispatch();
  const { pincode } = useSelector((store) => store.userSignupSlice[8]);

  return (
    <div className="relative">
      <input
        {...register("pincode")}
        value={pincode}
        // pattern="\d{6}"
        onChange={(e) => {
          const pattern = /^(\d{1}|\d{2}|\d{3}|\d{4}|\d{5}|\d{6})$/;

          if (e.target.value.match(pattern)) {
            dispatch(addPincode(e.target.value));
          } else if (e.target.value.length == 0 && e.nativeEvent.data == null) {
            //clear pincode inputbox
            dispatch(addPincode(""));
          }
        }}
        type="text"
        inputMode="numeric"
        placeholder="pincode / Postal code"
        className="border p-2 rounded w-full"
      />
      {errors.pincode && (
        <h4 className="absolute top-11 text-xs font-medium text-red-600">
          {errors.pincode.message}
        </h4>
      )}
    </div>
  );
}
