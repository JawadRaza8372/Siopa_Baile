import React, { useState, useEffect } from "react";
import { db } from "../config/Fire";
import OrderProductCard from "../Components/OrderProductCard";
import { useHistory } from "react-router-dom";
import LoadingCompnent from "../Components/LoadingCompnent";
function OrderProduct({ user, data }) {
  let location = useHistory();
  const [orderedProduct, setorderedProduct] = useState(null);
  let fetch = async () => {
    await db
      .collection("Order")
      .doc(user.userId)
      .get()
      .then((doc) => {
        if (doc) {
          setorderedProduct(doc.data().data);
        }
      });
  };
  useEffect(() => {
    if (user) {
      fetch();
    }
  }, []);
  if (user && data) {
    return (
      <div style={{ overflow: "hidden" }}>
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="container">
              {orderedProduct &&
                orderedProduct.map((inf, index) => (
                  <>
                    <br />{" "}
                    <OrderProductCard key={index} products={data} info={inf} />
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <LoadingCompnent />;
  }
}

export default OrderProduct;
