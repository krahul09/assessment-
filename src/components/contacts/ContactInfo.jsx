import React from "react";

function ContactInfo() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Address</h3>
        <p>298 GB St Avenue, New York NY10000, United States</p>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Phone</h3>
        <p>Mobile: 1(04) 546-6789</p>
        <p>Hotline: 1(04) 456-6789</p>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Working Time</h3>
        <p>Monday - Friday: 9:00 - 22:00</p>
        <p>Saturday - Sunday: 9:00 - 21:00</p>
      </div>
    </div>
  );
}

export default ContactInfo;
