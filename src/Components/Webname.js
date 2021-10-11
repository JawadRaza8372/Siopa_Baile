import React from "react";
import StorefrontIcon from "@material-ui/icons/Storefront";
function Webname({ color }) {
  return (
    <>
      <div style={{ flexDirection: "row", display: "flex" }}>
        {!color && (
          <h2 className="heading">
            <StorefrontIcon style={{ fontSize: "50px", marginRight: "10px" }} />
            <strong>Siopa Baile</strong>
          </h2>
        )}
        {color && (
          <h2 className="heading" style={{ color: "white" }}>
            <StorefrontIcon style={{ fontSize: "50px", marginRight: "10px" }} />
            <strong>Siopa Baile</strong>
          </h2>
        )}
      </div>
    </>
  );
}

export default Webname;
