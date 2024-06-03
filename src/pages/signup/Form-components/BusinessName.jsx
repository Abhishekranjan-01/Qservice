export default function BusinessName({ register, errors }) {
  return (
    <div className="mb-4 relative">
      {/* <h4 className="absolute -top-4 text-xs font-semibold text-gray-800">
        *Optional
      </h4> */}
      <input
        // value={email}
        {...register("businessName")}
        type="text"
        // onChange={(e) => dispatch(addEmail(e.target.value))}
        placeholder="Business name (Optional)"
        className="border p-2 rounded w-full"
      />
      {/* {errors.businessName && (
        <h4 className="absolute top-10 text-xs font-medium text-red-600">
          {errors.email.businessName}
        </h4>
      )} */}
    </div>
  );
}
