import React, { useState } from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./App.css";
const App = () => {
  const stripe = loadStripe(
    `${process.env.STRIPE_PUBLISHABLE_KEY}`
  );
  return (
    <Elements stripe={stripe}>
      <CheckoutForm />
    </Elements>
  );
};
function CheckoutForm() {
  // const [isPaymentLoading, setPaymentLoading] = useState(false);
  // const stripe = useStripe();
  const elements = useElements();
  // const payMoney = async (e) => {
  //   e.preventDefault();
  //   if (!stripe || !elements) {
  //     return;
  //   }
  //   setPaymentLoading(true);
  //   const paymentResult = await stripe.confirmCardPayment(`${process.env.STRIPE_SECRET}`, {
  //     payment_method: {
  //       card: elements.getElement(CardElement),
  //       billing_details: {
  //         name: "polar client",
  //       },
  //     },
  //   });
  //   setPaymentLoading(false);
  //   if (paymentResult.error) {
  //     alert(paymentResult.error.message);
  //   } else {
  //     if (paymentResult.paymentIntent.status === "succeeded") {
  //       alert("Success!");
  //     }
  //   }
  // };

  return (
    <div
      style={{
        padding: "3rem",
        backgroundColor: '#fff',
        width: '40%',
        minWidth: '300px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: 20,
        boxShadow: '3px 4px 40px 5px rgba(0, 0, 0, 0.5)'
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontSize: '24px'
        }}
      >Pay for your Order on Polar</h2>
      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <form
          style={{
            display: "block",
            width: "100%",
          }}
        // onSubmit={payMoney}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardElement
              className="card"
              options={{
                style: {
                  base: {
                    backgroundColor: "white",
                  }
                },
              }}
            />
            <button
              className="pay-button"
              disabled={true}
            >
              {"Pay"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App