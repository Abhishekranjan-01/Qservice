import { addGender } from "@/features/forms/userSignup/userSignupSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Gender() {
  const dispatch = useDispatch();
  const { genderValidated } = useSelector((store) => store.userSignupSlice[1]);

  return (
    <div className="relative ">
      <div className="flex gap-4  ">
        {/* <select className="border p-2 rounded w-full"> */}
        <label htmlFor="Gender" name="gender" className="font-semibold">
          Gender:
        </label>
        <div className="flex gap-2">
          <div className="flex gap-1">
            <label htmlFor="male" className="">
              Male
            </label>
            <input
              aria-label="gender"
              type="radio"
              name="gender"
              value={"male"}
              id="male"
              onChange={(e) => dispatch(addGender(e.target.value))}
            />
          </div>

          <div className="flex gap-1">
            <label htmlFor="female" className="">
              Female{" "}
            </label>
            <input
              aria-label="gender"
              type="radio"
              name="gender"
              value={"female"}
              id="female"
              onChange={(e) => dispatch(addGender(e.target.value))}
            />
          </div>

          <div className="flex gap-1">
            <label htmlFor="Others" className="">
              Others
            </label>
            <input
              aria-label="gender"
              type="radio"
              name="gender"
              value={"Others"}
              id="Others"
              onChange={(e) => dispatch(addGender(e.target.value))}
            />
          </div>
        </div>
      </div>
      {!genderValidated && (
        <h4 className="absolute top-5 text-xs font-medium text-red-600">
          *Gender is required
        </h4>
      )}
    </div>
  );
}
