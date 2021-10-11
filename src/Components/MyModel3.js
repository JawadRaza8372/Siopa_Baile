import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { db } from "../config/Fire";
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
    padding: "30px",
  },
}));

function MyModel3({ openModel, closeModel, data, category }) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [docId, setdocId] = useState(data.id);
  const [formdat, setformdat] = useState(data.post);
  let submitfun = async (e) => {
    e.preventDefault();
    await db
      .collection("Products")
      .doc(docId)
      .set(formdat)
      .then(() => {
        console.log("updated");
        closeModel();
      });
  };
  return (
    <Modal open={openModel} onClose={closeModel}>
      <div style={modalStyle} className={classes.paper}>
        <form onSubmit={submitfun} className="formAddproduct p-4">
          <h1 className="formHeading">Update Product</h1>
          <input
            className="formInput"
            type="text"
            value={formdat.name}
            onChange={(e) => setformdat({ ...formdat, name: e.target.value })}
            placeholder="Product Name"
          />
          <textarea
            className="formInput"
            type="text"
            value={formdat.description}
            onChange={(e) =>
              setformdat({ ...formdat, description: e.target.value })
            }
            placeholder="Product Description"
          />
          <div className="row">
            <div className="col">
              <select
                className="mydropdown"
                id="category"
                onChange={(e) =>
                  setformdat({ ...formdat, category: e.target.value })
                }
                defaultValue={formdat.category}
              >
                <option disabled>Category</option>
                {category &&
                  category.map((dat) => (
                    <option key={dat.id}>{dat.post.name}</option>
                  ))}
                <option>Other</option>
              </select>
            </div>
            <div className="col">
              <select
                className="mydropdown"
                value={formdat.status}
                id="status"
                onChange={(e) =>
                  setformdat({ ...formdat, status: e.target.value })
                }
                defaultValue="Status"
              >
                <option disabled>Status</option>
                <option>Available</option>
                <option>Not Available</option>
              </select>
            </div>
          </div>
          <input
            className="formInput"
            id="price"
            value={formdat.price}
            onChange={(e) => setformdat({ ...formdat, price: e.target.value })}
            type="number"
            placeholder="$Price"
          />
          <div style={{ display: "flex" }}>
            {data.post.images &&
              data.post.images.map((data, index) => (
                <img
                  style={{
                    height: "70px",
                    width: "70px",
                    objectFit: "contain",
                    marginRight: "20px",
                  }}
                  key={index}
                  src={data}
                />
              ))}
          </div>
          <button className="myButton2">Update</button>
        </form>
      </div>
    </Modal>
  );
}

export default MyModel3;
