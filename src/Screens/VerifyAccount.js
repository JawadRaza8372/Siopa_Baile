import React from "react";

function VerifyAccount() {
  return (
    <div className="middlediv">
      <form className="formAddproduct">
        <h2 className="formHeading">verify Account</h2>
        <p style={{ color: "green" }}>
          A link is also shared to your Email address also verify it
        </p>
        <input
          className="formInput"
          type="text"
          placeholder="Verify Code Shared To Your Phone Number"
        />
        <button className="btn btn-outline-success">Verify</button>
      </form>
    </div>
  );
}

export default VerifyAccount;
