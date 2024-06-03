import React, { useState } from "react";

export default function DocumentInformation() {
  const [photoPreview, setPhotoPreview] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto p-4">
        <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
          <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Service Information
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Provide service information as per your choice.
          </p>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="aadhar-number"
                  className="block mb-2 text-sm sm:text-lg font-medium text-gray-900 dark:text-white"
                >
                  Aadhar number
                </label>
                <input
                  type="text"
                  id="aadhar-number"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="aadhar-name"
                  className="block mb-2 text-sm sm:text-lg font-medium text-gray-900 dark:text-white"
                >
                  Aadhar name
                </label>
                <input
                  type="text"
                  id="aadhar-name"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>

            <div className="mb-4 sm:w-1/2">
              <label
                className="block mb-2 text-sm sm:text-lg font-medium text-gray-900 dark:text-white"
                htmlFor="photo-input"
              >
                Photo
              </label>
              <input
                className="block w-full text-sm py-4 px-2 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="photo_input_help"
                id="photo-input"
                type="file"
                accept="image/png, image/jpeg"
                onChange={handlePhotoChange}
              />
              <p
                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="photo_input_help"
              >
                PNG or JPG (MAX. 20kb).
              </p>
              {photoPreview && (
                <img
                  src={photoPreview}
                  alt="Photo Preview"
                  className="mt-2 rounded-lg max-h-40"
                />
              )}
            </div>

            <div className="mb-4 sm:w-1/2">
              <label
                className="block mb-2 text-sm sm:text-lg font-medium text-gray-900 dark:text-white"
                htmlFor="aadhar-input"
              >
                Aadhar Card
              </label>
              <input
                className="block w-full text-sm py-4 px-2 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="aadhar_input_help"
                id="aadhar-input"
                type="file"
                accept=".pdf"
              />
              <p
                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="aadhar_input_help"
              >
                .pdf(MAX. 120kb).
              </p>
            </div>

            <button
              type="button"
              id="theme-toggle"
              className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
