import React, { useState } from "react";
import MoreIcon from "@material-ui/icons/More";
import { NavLink, useHistory } from "react-router-dom";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import MyModel3 from "./MyModel3";
import { db } from "../config/Fire";
export const MyCard = ({ productName, imgurl, data }) => {
  return (
    <>
      <div className="MyCardMainDiv m-4">
        <h5>{productName}</h5>
        <div className="myCardMiniDiv">
          <img className="MyCardImage" src={`${imgurl}`} alt="productame" />
        </div>
        <NavLink className="myButton2" to={`/productDetail/${data.id}`}>
          <MoreIcon />
        </NavLink>
        <br />
      </div>
    </>
  );
};
export const MyCard2 = ({ productName, imgurl, data }) => {
  return (
    <>
      <div className="col-xs-10 col-sm-10 col-md-6 col-lg-4 col-xl-3 mb-4">
        <div className="MyCardMainDiv2">
          <h5>{productName}</h5>
          <div className="myCardMiniDiv">
            <img className="MyCardImage" src={`${imgurl}`} alt="productame" />
          </div>
          <NavLink className="myButton2" to={`/productDetail/${data.id}`}>
            <MoreIcon />
          </NavLink>
          <br />
        </div>{" "}
      </div>
    </>
  );
};

export const MyCard3 = ({ productName, imgurl, data, category }) => {
  let location = useHistory();

  const [modelbtn, setmodelbtn] = useState(false);
  return (
    <>
      <div className="col-xs-10 col-sm-10 col-md-6 col-lg-4 col-xl-3 mb-4">
        <div className="MyCardMainDiv2">
          <h5>{productName}</h5>
          <div className="myCardMiniDiv">
            <img className="MyCardImage" src={`${imgurl}`} alt="productame" />
          </div>
          <div style={{ display: "flex" }}>
            <button
              onClick={() => setmodelbtn(true)}
              className="btn btn-outline-primary mr-4"
            >
              <EditIcon />
            </button>
            <button
              onClick={() => {
                db.collection("Products").doc(data.id).delete();
                location.push("/");
              }}
              className="btn btn-outline-danger"
            >
              <DeleteOutlineIcon />
            </button>
          </div>

          <br />
        </div>{" "}
      </div>
      <MyModel3
        openModel={modelbtn}
        closeModel={() => setmodelbtn(false)}
        data={data}
        category={category}
      />
    </>
  );
};
