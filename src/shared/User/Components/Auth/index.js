import React from "react";

import withForm from "../../HOCs/withForm";

import Preloader from "../../Components/Preloader";
import Textfield from "../Textfield";

const Auth = ({
  data,
  handlerChange,
  switchLogin,
  validate,
  handlerSubmit,
  title,
  load
}) => (
  <div className="login auth">
    <div className="login__container">
      <h3>{title}</h3>
      <Textfield
        classes={validate.login.error ? `input error` : `input`}
        name="login"
        placeholder="Login"
        type="input"
        value={data.login ? data.login : ""}
        handlerChange={handlerChange}
      />
      <Textfield
        classes={validate.pass.error ? `input error` : `input`}
        name="pass"
        placeholder="Password"
        type="password"
        value={data.pass ? data.pass : ""}
        handlerChange={handlerChange}
      />
      <div className="button green login-button" onClick={handlerSubmit}>
        Continue
      </div>
      <div
        className="button white signup-button"
        onClick={() => switchLogin("registration")}
      >
        Sign Up
      </div>
      {load ? <Preloader /> : ""}
    </div>
  </div>
);

export default withForm(Auth, "user/auth", {
  login: { validate: true },
  pass: { validate: true }
});
