import React from "react";

const Checkbox = ({ isChecked, placeholder, handlerChange }) => (
  <div
    onClick={handlerChange}
    className={isChecked ? "checkbox checked" : "checkbox"}
  >
    <div className="box" />
    <span>{placeholder}</span>
  </div>
);

export default Checkbox;
