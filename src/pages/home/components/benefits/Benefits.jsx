import React from "react";

function Benefits() {
  return (
    <div className="container mx-auto px-4 py-16 justify-center flex">
      <div className="flex justify-around flex-wrap -mx-3">
        <div className="h-[500px]">
          <img
            src="https://metangas.az//assets/img/appoinment-man-bg.png"
            alt="Home and corporate services"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 md:w-1/2 px-3 flex flex-col justify-center">
          <h1 className="text-4xl font-medium mb-4">
            Benefits of using our home and corporate services
          </h1>
          <p className="text-gray-600 mb-8">
            The following facilities will be provided in all of our home and
            corporate places.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-8">
            <li className="mb-2">
              <i className="fas fa-check-circle text-green-500 mr-2" />
              100% Satisfied
            </li>
            <li className="mb-2">
              <i className="fas fa-check-circle text-green-500 mr-2" />
              Carefully complete your work
            </li>
            <li className="mb-2">
              <i className="fas fa-check-circle text-green-500 mr-2" />
              Easy and online payment
            </li>
            <li className="mb-2">
              <i className="fas fa-check-circle text-green-500 mr-2" />
              24/7 Support
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
