import React, { useState, useEffect } from "react";
import MyModel from "./MyModel";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ProductDetailCarsole from "./ProductDetailCarsole";

function ProductDeatailsComponentNoAuth({ itemDetail }) {
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
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}

export default ProductDeatailsComponentNoAuth;
