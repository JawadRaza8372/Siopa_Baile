import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import "./App.css";
import { auth, db } from "./config/Fire";
import { Routes } from "./Navigations/Routes";
import { useHistory } from "react-router-dom";

function App() {
  let location = useHistory();
  const [userData, setuserData] = useState(null);
  const [ProductsData, setProductsData] = useState(null);
  const [CategoryData, setCategoryData] = useState(null);
  let fetchUser = async (id) => {
    await db
      .collection("users")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc) {
          setuserData((prevalue) => {
            return {
              ...prevalue,
              data: doc.data(),
            };
          });
        } else {
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        setuserData({ userId: user.uid });
        fetchUser(user.uid);
      } else {
        console.log("   ------datasave--error---");
      }
    });
  }, []);
  let ftchProducts = async () => {
    await db.collection("Products").onSnapshot((snapshot) => {
      setProductsData(
        snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() }))
      );
    });
  };
  useEffect(() => {
    ftchProducts();
  }, []);
  useEffect(() => {
    db.collection("Category").onSnapshot((snapshot) => {
      if (snapshot) {
        setCategoryData(
          snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() }))
        );
      }
    });
  }, []);

  let logoutfunction = () => {
    auth.signOut();
    setuserData(null);
    location.push("/");
  };

  return (
    <>
      <Routes
        loginStatus={userData}
        products={ProductsData}
        category={CategoryData}
        userlogout={logoutfunction}
      />
    </>
  );
}

export default App;
