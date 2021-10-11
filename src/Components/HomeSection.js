import React from "react";
import home from "../assets/home.png";
import { NavLink } from "react-router-dom";
import Webname from "./Webname";
function HomeSection() {
  return (
    <div className="middlediv">
      <div className="col-10 mx-auto">
        <div className="row">
          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
            <Webname color="white" />
            <h3 className="my-3">A few clicks is all it takes.</h3>
            <p>
              We see our customers as invited guests to a party, and we are the
              hosts. It’s our job every day to make every important aspect of
              the customer experience a little bit better.
            </p>
            <div className="mt-3">
              <NavLink
                style={{ borderRadius: "12px" }}
                className="myButton2"
                to="/products"
              >
                Check Products
              </NavLink>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 header_img">
            <img
              style={{ height: "500px" }}
              src={home}
              alt="header img"
              className="img-fluid animated"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
