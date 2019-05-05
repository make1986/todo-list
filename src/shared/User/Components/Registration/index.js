import React from "react";

import withForm from "../../HOCs/withForm";

import Preloader from "../../Components/Preloader";
import Textfield from "../Textfield";

const Registration = ({
  data,
  handlerChange,
  switchLogin,
  validate,
  handlerSubmit,
  load
}) => (
  <div className="login registration">
    <div className="login__container">
      <h3>Sign up and start creating tasks</h3>
      <Textfield
        classes={validate.name.error ? `input error` : `input`}
        name="name"
        placeholder="Name"
        type="input"
        value={data.name ? data.name : ""}
        handlerChange={handlerChange}
      />
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
        onClick={() => switchLogin("login")}
      >
        ← Back
      </div>
      {load ? <Preloader /> : ""}
    </div>
  </div>
);

export default withForm(Registration, "user/add", {
  login: { validate: true },
  pass: { validate: true },
  name: { validate: true }
});
