import React, { useState, useEffect } from "react";
import MyModel from "./MyModel";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ProductDetailCarsole from "./ProductDetailCarsole";
import ShopIcon from "@material-ui/icons/Shop";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { db } from "../config/Fire";
function ProductDeatailsComponent({ itemDetail, user }) {
  let pid = itemDetail.id;

  const [modal, setModal] = useState(false);
  const [save, setsave] = useState(false);
  const [message, setmessage] = useState(null);
  const [cartdat, setcartdat] = useState(null);
  console.log(cartdat);

  let addtoCartFun = () => {
    setcartdat(() => {
      return [...cartdat, pid];
    });
    setsave(true);
  };
  useEffect(() => {
    db.collection("Cart")
      .doc(user.userId)
      .get()
      .then((doc) => {
        if (doc) {
          setcartdat(doc.data().product);
        } else {
          console.log("No such document!");
        }
      });
  }, []);

  useEffect(() => {
    if (cartdat) {
      db.collection("Cart").doc(user.userId).set({ product: cartdat });
      setmessage("Added To Cart");
      console.log("added");
    }
  }, [save]);
  useEffect(() => {
    const interval = setInterval(() => {
      setmessage(null);
    }, 5000);
    return () => clearInterval(interval);
  }, [message]);

  return (
    <>
      <div className="middlediv">
        <div className="col-8 mx-auto">
          <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 header_img">
              <div style={{ width: "100%", height: "auto" }}>
                <ProductDetailCarsole images={itemDetail.post.images} />
              </div>
            </div>
            <div
              className="col-lg-6 order-11 order-lg-2 d-flex justify-content-center flex-column"
              style={{ paddingLeft: "100px" }}
            >
              <h1 className="leftUnderlineText">{itemDetail.post.name}</h1>
              <br />
              <h5 className="textLeftAlign">
                Category:<span> {itemDetail.post.category}</span>
              </h5>
              <br />

              <p className="textLeftAlign">{itemDetail.post.description}</p>
              <br />

              <p className="textLeftAlign">
                Price: <span> {itemDetail.post.price}</span> $
              </p>
              <br />

              <p className="textLeftAlign">
                Status: <span> {itemDetail.post.status}</span>
              </p>
              <br />
              <p className="textLeftAlign">*Delivery Charges Excluded</p>
              <br />

              <p className="textLeftAlign">
                Rating:
                <StarIcon style={{ color: "gold" }} />
                <StarIcon style={{ color: "gold" }} />
                <StarIcon style={{ color: "gold" }} />
                <StarHalfIcon style={{ color: "gold" }} />
                <StarBorderIcon style={{ color: "black" }} />
              </p>

              <div className="textLeftAlign">
                <button
                  onClick={() => setModal(true)}
                  className="btn btn-outline-success mr-3"
                >
                  <ShopIcon />
                </button>
                <button
                  onClick={addtoCartFun}
                  className="btn btn-outline-primary"
                >
                  <AddShoppingCartIcon />
                </button>
              </div>
            </div>
          </div>
          <br />
          <br />
          {message && (
            <div
              style={{
                width: "200px",
                height: "60px",
                display: "grid",
                placeItems: "center",
                paddingTop: "10px",
                height: "fit-content",
                background: "green",
                color: "white",
              }}
            >
              <p>{message}</p>
            </div>
          )}
        </div>
      </div>

      <MyModel
        openModel={modal}
        closeModel={() => setModal(false)}
        price={itemDetail.post.price}
        productId={itemDetail.id}
        sellerId={itemDetail.post.seller}
        userid={user.userId}
      />
    </>
  );
}

export default ProductDeatailsComponent;
