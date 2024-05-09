import React from "react";

function BillingForm() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Billing details</h2>
      <form>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="block font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full border border-gray-300 rounded-md py-2 px-4"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full border border-gray-300 rounded-md py-2 px-4"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="companyName" className="block font-bold mb-2">
            Company Name (Optional)
          </label>
          <input
            type="text"
            id="companyName"
            className="w-full border border-gray-300 rounded-md py-2 px-4"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block font-bold mb-2">
            Country / Region
          </label>
          <select
            id="country"
            className="w-full border border-gray-300 rounded-md py-2 px-4"
          >
            <option value="sri-lanka">Sri Lanka</option>
            {/* Add more options as needed */}
          </select>
        </div>
        {/* Add the remaining form fields */}
      </form>
    </div>
  );
}

export default BillingForm;
