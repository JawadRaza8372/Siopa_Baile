import React, { useState, useEffect } from "react";
import { db } from "../config/Fire";
import SellerOrderedProductsitems from "../Components/SellerOrderedProductsitems";
import { SettingsOverscanRounded } from "@material-ui/icons";
import LoadingCompnent from "../Components/LoadingCompnent";
import { useHistory } from "react-router-dom";
function SellerProductorder({ user, data }) {
  const [sellerOrder, setsellerOrder] = useState(null);
  const [updatedata, setupdatedata] = useState(null);
  const [save, setsave] = useState(false);
  let location = useHistory();
  const [incomeDta, setincomeDta] = useState({
    index: "",
    docid: "",
    data: "",
  });

  let fetch = async () => {
    await db.collection("Order").onSnapshot((snapshot) => {
      setsellerOrder(
        snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() }))
      );
    });
  };

  useEffect(() => {
    fetch();
  }, []);
  let updateStatus = (index, docid, data) => {
    setincomeDta({ index: index, docid: docid, data: data });
    db.collection("Order")
      .doc(docid)
      .get()
      .then((doc) => {
        setupdatedata(doc.data().data);
        setsave(true);
      });
  };

  let dataswap = async () => {
    if (incomeDta.data) {
      updatedata[incomeDta.index] = incomeDta.data;
      await db
        .collection("Order")
        .doc(incomeDta.docid)
        .set({ data: updatedata });
    }
  };
  useEffect(() => {
    dataswap();
    console.log("done");
  }, [save]);

  if (user) {
    if (`${user.data}` !== "undefined" && `${user.data.role}` !== "undefined") {
      if (user.data.role && user.data.role === "Seller") {
        return (
          <div style={{ overflow: "hidden" }}>
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="container">
                  {sellerOrder &&
                    sellerOrder.map((sorder) =>
                      sorder.post.data.map((sd, index) => {
                        if (sd.seller === user.userId) {
                          return (
                            <>
                              <br />{" "}
                              <SellerOrderedProductsitems
                                key={index}
                                id={index}
                                docid={sorder.id}
                                orderdata={sd}
                                productsData={data}
                                updatfun={updateStatus}
                              />
                            </>
                          );
                        }
                      })
                    )}
                </div>
              </div>
            </div>
          </div>
        );
      }
    } else {
      location.push("/");
      return null;
    }
  } else {
    return (
      <>
        <LoadingCompnent />
      </>
    );
  }
}

export default SellerProductorder;
