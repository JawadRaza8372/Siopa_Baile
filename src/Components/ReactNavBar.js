import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Webname from "./Webname";
import { auth } from "../config/Fire";
import Avatar from "@material-ui/core/Avatar";
import DropDownP from "./DropDownP";
function ReactNavBar({ user, logout }) {
  let logoutfun = () => {
    logout();
  };
  let nav = () => {
    if (user) {
      if (user.data) {
        if (user.data.role === "Seller") {
          return (
            <>
              <NavLink
                style={{ marginRight: "15px" }}
                exact
                activeClassName="active_class"
                className="nav-link h6"
                to="/addProduct"
              >
                Add Product
              </NavLink>
              <NavLink
                style={{ marginRight: "15px" }}
                exact
                activeClassName="active_class"
                className="nav-link h6"
                to="/sellerProducts"
              >
                My Product
              </NavLink>
              <NavLink
                style={{ marginRight: "15px" }}
                exact
                activeClassName="active_class"
                className="nav-link h6"
                to="/productOrderSeller"
              >
                Orders
              </NavLink>
              <NavLink
                style={{ marginRight: "15px" }}
                exact
                activeClassName="active_class"
                className="nav-link h6"
                to="/cart"
              >
                Cart
              </NavLink>
              <NavLink
                style={{ marginRight: "15px" }}
                exact
                activeClassName="active_class"
                className="nav-link h6"
                to="/orderedProduct"
              >
                Ordered Product
              </NavLink>
              <DropDownP logoutfunction={logoutfun}>
                <Avatar
                  style={{
                    height: "50px",
                    width: "60px",
                    marginLeft: "5px",
                    border: "1px solid black",
                  }}
                  src={user.data.profileImage}
                  alt={user.data.name}
                />
              </DropDownP>
            </>
          );
        } else if (user.data.role === "Buyer") {
          return (
            <>
              <NavLink
                style={{ marginRight: "15px" }}
                exact
                activeClassName="active_class"
                className="nav-link h6"
                to="/cart"
              >
                Cart
              </NavLink>
              <NavLink
                style={{ marginRight: "15px" }}
                exact
                activeClassName="active_class"
                className="nav-link h6"
                to="/orderedProduct"
              >
                Ordered Product
              </NavLink>
              <DropDownP logoutfunction={logoutfun}>
                <Avatar
                  style={{
                    height: "50px",
                    width: "60px",
                    marginLeft: "5px",
                    border: "1px solid black",
                  }}
                  src={user.data.profile}
                  alt={user.data.name}
                />
              </DropDownP>
            </>
          );
        } else {
          return (
            <>
              <NavLink
                style={{ marginRight: "15px" }}
                exact
                activeClassName="active_class"
                className="nav-link h6"
                to="/addCategory"
              >
                Add Category
              </NavLink>
              <DropDownP logoutfunction={logoutfun}>
                <Avatar
                  style={{
                    height: "50px",
                    width: "60px",
                    marginLeft: "5px",
                    border: "1px solid black",
                  }}
                  src={user.data.profile}
                  alt={user.data.name}
                />
              </DropDownP>
            </>
          );
        }
      } else {
        console.log("notyet");
      }
    } else {
      return (
        <>
          <NavLink
            style={{ marginRight: "15px" }}
            exact
            activeClassName="active_class"
            className="nav-link h6"
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            style={{ marginRight: "15px" }}
            exact
            activeClassName="active_class"
            className="nav-link h6"
            to="/signUp"
          >
            SignUp
          </NavLink>
        </>
      );
    }
  };
  nav();
  return (
    <>
      <Navbar
        style={{ borderBottom: "2px solid #d1cdcd" }}
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Navbar.Brand href="/">
          <Webname />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavLink
              style={{ marginRight: "15px" }}
              exact
              activeClassName="active_class"
              className="nav-link h6"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              style={{ marginRight: "15px" }}
              exact
              activeClassName="active_class"
              className="nav-link h6"
              to="/products"
            >
              Products
            </NavLink>
            <NavLink
              style={{ marginRight: "15px" }}
              exact
              activeClassName="active_class"
              className="nav-link h6"
              to="/search"
            >
              Search
            </NavLink>
            {nav()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default ReactNavBar;
