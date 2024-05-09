import React from "react";
import BillingForm from "../components/checkout/BillingForm";
import OrderSummary from "../components/checkout/OrderSummary";

function Checkout() {
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BillingForm />
        <OrderSummary />
      </div>
    </div>
  );
}

export default Checkout;
