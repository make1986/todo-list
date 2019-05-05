import React from "react";

const Error = ({ err, close }) => (
  <div className="error-block">
    <div className="error-block__container">
      <p>{err}</p>
      <span className="button green" onClick={() => close("")}>
        Ok
      </span>
    </div>
  </div>
);

export default Error;
