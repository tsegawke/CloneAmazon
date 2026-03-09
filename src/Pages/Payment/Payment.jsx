import React, { useContext, useState } from "react";
import LayOut from "../../Components/Layout/Layout";
import classes from "./Payment.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { axiosInstance } from "../../API/axios";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/firebase";
import { doc, setDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Type } from "../../Utility/action.type";

function Payment() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => amount + item.amount, 0);
  const totalPrice = basket?.reduce(
    (amount, item) => amount + item.price * item.amount,
    0,
  );

  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e?.error?.message) setCardError(e.error.message);
    else setCardError("");
  };

  const paymentHandler = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setCardError("");

    if (!stripe || !elements) {
      setCardError("Stripe has not loaded yet. Please wait and try again.");
      setProcessing(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setCardError("Card element not found. Please refresh and try again.");
      setProcessing(false);
      return;
    }

    try {
      // Step 1: Get client secret from backend
      const response = await axiosInstance.post(
        `/payment/create?total=${totalPrice * 100}`,
      );
      const clientSecret = response.data?.clientSecret;

      if (!clientSecret) {
        setCardError("Failed to get payment client secret. Please try again.");
        setProcessing(false);
        return;
      }

      // Step 2: Confirm payment
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: { card: elements.getElement(CardElement) },
        },
      );

      if (error) {
        setCardError(error.message);
        setProcessing(false);
        return;
      }

      // Step 3: Save order to Firestore
      try {
        await setDoc(
          doc(collection(db, "user"), user.uid, "orders", paymentIntent.id),
          {
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          },
        );

        dispatch({ type: Type.EMPTY_BASKET });
        navigate("/orders", { state: { msg: "You have placed a new order!" } });
      } catch (firestoreError) {
        console.error("Error saving order:", firestoreError);
        setCardError(
          "Payment succeeded, but failed to save order. Contact support.",
        );
      }

      setProcessing(false);
    } catch (err) {
      console.error(err);
      setCardError("Payment failed. Please try again.");
      setProcessing(false);
    }
  };

  return (
    <LayOut>
      <div className={classes.payment__header}>
        Checkout ({totalItem} items)
      </div>

      <section className={classes.payment}>
        {/* Delivery Address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>USA</div>
          </div>
        </div>
        <hr />

        {/* Review Items */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div className={classes.payment__items}>
            {basket?.map((item) => (
              <ProductCard
                product={item}
                key={item.id}
                flex={true}
                renderDesc={false}
                renderDetail={true}
                renderAdd={false}
              />
            ))}
          </div>
        </div>
        <hr />

        {/* Payment Form */}
        <div className={classes.flex}>
          <h3>Payment Methods</h3>
          <div className={classes.payment__card__container}>
            <div className={classes.payment__details}>
              <form onSubmit={paymentHandler}>
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                <CardElement onChange={handleChange} />

                <div className={classes.payment__price}>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <p>Total Order | </p>
                    <CurrencyFormat amount={totalPrice} />
                  </div>

                  <button type="submit" disabled={!stripe || processing}>
                    {processing ? (
                      <div className={classes.loading}>
                        <ClipLoader color="gray" size={12} />
                        <p>Please wait ...</p>
                      </div>
                    ) : (
                      "Buy Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;
