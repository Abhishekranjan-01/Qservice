export default function Gender() {
  return (
    <div className="flex gap-4 mb-4 ">
      {/* <select className="border p-2 rounded w-full"> */}
      <label htmlFor="Gender" name="gender" className="font-semibold">
        Gender:
      </label>
      <div className="flex gap-2">
        <div className="flex gap-1">
          <label htmlFor="male" className="">
            Male
          </label>
          <input type="radio" name="gender" value={"male"} id="male" />
        </div>

        <div className="flex gap-1">
          <label htmlFor="female" className="">
            Female{" "}
          </label>
          <input type="radio" name="gender" value={"female"} id="female" />
        </div>
      </div>
    </div>
  );
}
