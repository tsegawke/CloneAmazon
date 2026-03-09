import React, { useContext, useEffect, useState } from "react";
import LayOut from "../../Components/Layout/Layout";
import classes from "./Orders.module.css";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import ProductCard from "../../Components/Product/ProductCard";
import { useLocation } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
function Orders() {
  const [{ user }] = useContext(DataContext);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navStateData = useLocation();
  useEffect(() => {
    if (user) {
      setIsLoading(true);
      // db.collection("user").doc(user.uid).collection("orders").orderBy("created","desc").onSnapshot((snapshot)=>{
      //   console.log(snapshot)
      // })

      const ordersRef = collection(db, "user", user.uid, "orders");
      const ordersQuery = query(ordersRef, orderBy("created", "desc"));
      const unsubscribe = onSnapshot(ordersQuery, (snapshot) => {
        // console.log(snapshot);
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
        setIsLoading(false);
        return () => unsubscribe();
      });
    } else {
      setOrders([]);
    }
  }, [user]);
  // console.log(orders);
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.orders__container}>
          {navStateData?.state?.msg ? (
            <h2>{navStateData?.state?.msg}</h2>
          ) : (
            <h2>Your Orders</h2>
          )}
          {isLoading && <Loader />}
          {orders.length === 0 && (
            <div style={{ padding: "20px" }}>
              you don't have any orders yet.
            </div>
          )}
          <hr />
          <br />

          {/* ordered items */}
          <div>
            {orders?.map((eachOrders, i) => (
              <div key={i} className={classes.flex}>
                <h3>Order ID: {eachOrders?.id}</h3>
                <div className={classes.payment__items}>
                  {eachOrders?.data.basket.map((order, i) => (
                    <ProductCard
                      product={order}
                      key={i}
                      flex={true}
                      renderDesc={false}
                      renderDetail={true}
                      renderAdd={false}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;
