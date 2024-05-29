import { addGender } from "@/features/forms/userSignup/userSignupSlice";
import { useDispatch } from "react-redux";

export default function Gender() {
  const dispatch = useDispatch();

  return (
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
  );
}
