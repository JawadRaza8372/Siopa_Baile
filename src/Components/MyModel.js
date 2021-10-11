import React, { useState, useEffect } from "react";
import { db } from "../config/Fire";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "40%",
    height: "auto",
    overflowY: "auto",
    overflowX: "hidden",
    background: "white",
    border: "none",
    borderRadius: "20px",
    boxShadow: theme.shadows[5],
  },
}));

function MyModel({
  openModel,
  closeModel,
  price,
  productId,
  sellerId,
  userid,
}) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [save, setsave] = useState(false);
  const [orderdat, setorderdat] = useState(null);
  const [fdata, setfdata] = useState({
    country: "",
    address: "",
    postalCode: "",
    quantity: "",
    productId: "",
  });
  const handlein = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    setfdata((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    if (orderdat) {
      db.collection("Order").doc(userid).set({ data: orderdat });
      closeModel();
      console.log("added");
    }
  }, [save]);
  const submit = (e) => {
    e.preventDefault();
    fdata.productId = productId;
    fdata.orderBy = userid;
    fdata.seller = sellerId;
    fdata.orderStatus = "No Responce";
    console.log(fdata);
    setorderdat(() => {
      return [...orderdat, fdata];
    });
    setsave(true);
  };
  useEffect(() => {
    db.collection("Order")
      .doc(userid)
      .get()
      .then((doc) => {
        if (doc) {
          setorderdat(doc.data().data);
        } else {
          console.log("No such document!");
        }
      });
  }, []);
  return (
    <Modal open={openModel} onClose={closeModel}>
      <div style={modalStyle} className={classes.paper}>
        <form onSubmit={submit} className="formAddproduct p-4">
          <h1 className="formHeading">Place Order</h1>
          <input
            className="formInput"
            id="country"
            onChange={handlein}
            type="text"
            placeholder="Country"
          />
          <input
            className="formInput"
            id="address"
            onChange={handlein}
            type="text"
            placeholder="Address"
          />
          <input
            className="formInput"
            id="postalCode"
            onChange={handlein}
            type="number"
            placeholder="Postal Code"
          />
          <select
            defaultValue="Quantity"
            id="quantity"
            onChange={handlein}
            className="mydropdown"
          >
            <option disabled>Quantity</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
          <p>Price: {fdata.quantity ? fdata.quantity * price : price} $</p>
          <button type="submit" className="myButton2">
            Place Order
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default MyModel;
