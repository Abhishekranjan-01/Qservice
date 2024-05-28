export default function Pincode() {
  return (
    <input
      type="text"
      placeholder="pincode / Postal code"
      className="border p-2 rounded w-full"
      minLength={6}
      maxLength={6}
    />
  );
}
