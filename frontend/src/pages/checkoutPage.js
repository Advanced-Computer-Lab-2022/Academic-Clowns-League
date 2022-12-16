import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Badge from 'react-bootstrap/Badge';
import React, { useState, useEffect } from "react";

import CheckoutForm from "../components/checkoutForm";
import PaymentNavbar from "../components/paymentNavbar";

const stripePromise = loadStripe("pk_test_51MEY6KIUMr1PgLAYSujzuy3H8fxL2fC3PFHalBFylMRHvIel3EKPZjk61l0vvIuOPhmhuWRSkbZF23RM9K5o1dNE00VjO0zhmB");

const CheckoutPage = () => {
    const [clientSecret, setClientSecret] = useState("");
    const params = new URLSearchParams(window.location.search);
    const title = params.get("title");
    const id = params.get("id");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch('api/itrainee/create-payment-intent', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items: { id: id } }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, []);

      const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance,
      };
    
      return (
        <div>
          <PaymentNavbar />
          <h6 className="course-purchase">
            You are about to purchase the following course: <Badge bg="secondary">{title}</Badge>
          </h6>
        <div className="body">
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
        </div>
        </div>
      );   
}

export default CheckoutPage