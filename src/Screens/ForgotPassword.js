import React from "react";

function forgotPassword() {
  return (
    <div className="middlediv">
      <form className="formAddproduct">
        <h2 className="formHeading">Recover Account</h2>
        <input
          className="formInput"
          type="email"
          placeholder="Your Email Address"
        />
        <p style={{ color: "green" }}>
          A link is also shared to your Email address also verify it
        </p>
        <button className="btn btn-outline-success">Send link</button>
      </form>
    </div>
  );
}

export default forgotPassword;
