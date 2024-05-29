import userSignupSlice, {
  addPincode,
} from "@/features/forms/userSignup/userSignupSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Pincode() {
  const dispatch = useDispatch();
  // const pincode = useSelector((store) => store.userSignupSlice[8].pincode);

  const [pincode, setPincode] = useState("");
  console.log("pincode:\t", pincode);
  dispatch(addPincode(pincode));
  return (
    <input
      value={pincode}
      onChange={(e) => {
        try {
          if (e.nativeEvent.data === null)
            setPincode(e.target.value.substring(0, e.target.value.length - 1));
          if (
            e.nativeEvent.data.charCodeAt(0) >= 48 &&
            e.nativeEvent.data.charCodeAt(0) <= 57
          ) {
          } else {
            // console.log("not found!!!");
          }
        } catch (err) {
          console.log("Pincode Error !");
        }
      }}
      type="text"
      placeholder="pincode / Postal code"
      className="border p-2 rounded w-full"
      minLength={6}
      maxLength={6}
    />
  );
}
