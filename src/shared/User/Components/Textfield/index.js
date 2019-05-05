import React from "react";

import withTextFields from "../../HOCs/withTextfield";
import TextareaAutosize from "react-autosize-textarea";

const Textfield = ({
  type,
  name,
  value,
  changeMiddleware,
  placeholder,
  handlerFocus,
  handlerBlur,
  focus,
  classes,
  isChecklist
}) => (
  <div className="text-field">
    {type === "input" ? (
      <React.Fragment>
        <input
          className={classes}
          id={name}
          type="text"
          name={name}
          value={value}
          onChange={changeMiddleware}
          onFocus={handlerFocus}
          onBlur={handlerBlur}
          autoComplete="off"
          autoFocus={isChecklist ? true : false}
        />
        <label
          className={focus ? "text-field__label active" : "text-field__label"}
          htmlFor={name}
        >
          {placeholder}
        </label>
      </React.Fragment>
    ) : type === "password" ? (
      <React.Fragment>
        <input
          className={classes}
          id={name}
          type="password"
          name={name}
          value={value}
          onChange={changeMiddleware}
          onFocus={handlerFocus}
          onBlur={handlerBlur}
          autoComplete="off"
        />
        <label
          className={focus ? "text-field__label active" : "text-field__label"}
          htmlFor={name}
        >
          {placeholder}
        </label>
      </React.Fragment>
    ) : type === "textarea" ? (
      <React.Fragment>
        <TextareaAutosize
          id={name}
          name={name}
          value={value}
          onChange={changeMiddleware}
          onFocus={handlerFocus}
          onBlur={handlerBlur}
          autoComplete="off"
          spellCheck="false"
        />
        <label
          className={focus ? "text-field__label active" : "text-field__label"}
          htmlFor={name}
        >
          {placeholder}
        </label>
      </React.Fragment>
    ) : (
      ""
    )}
  </div>
);

export default withTextFields(Textfield);
