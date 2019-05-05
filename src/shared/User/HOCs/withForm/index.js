import React from "react";

import { HandlerAPI } from "../../api";

const withForm = (Component, api_prefix, validate) => {
  class WithForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {},
        validate,
        load: false
      };
      this.handlerChange = this.handlerChange.bind(this);
      this.handlerSubmit = this.handlerSubmit.bind(this);
    }

    componentWillUnmount() {
      let { validate } = this.state;
      for (const key in validate) {
        validate[key].error = false;
        this.setState({ validate });
      }
    }

    handlerChange(name, value) {
      let { data, validate } = this.state;
      data[name] = value;
      if (value) {
        validate[name].isExist = true;
        validate[name].error = false;
      } else {
        validate[name].isExist = false;
      }
      this.setState({ data, validate });
    }

    handlerSubmit() {
      const { validate, data } = this.state;
      let error = false;
      for (const key in validate) {
        if (validate[key].validate && !validate[key].isExist) {
          validate[key].error = true;
          error = true;
        } else {
          validate[key].error = false;
        }
      }
      if (error) {
        this.setState({ validate });
      } else {
        this.setState({ load: true });
        const handlerApi = new HandlerAPI(api_prefix, "post", data);
        handlerApi.response().then(res => {
          this.setState({ load: false }, () => {
            if (res.ok) {
              this.props.submitCb(res);
            } else {
              if (res.err === "NOT_VALID") {
                res.data.map(val => {
                  validate[val].error = true;
                });
                this.setState({ validate });
              } else if (res.err === "DUPLICATE_USER") {
                this.props.addError("A user with this login already exists");
              } else if (res.err === "INCORRECT_USER") {
                this.props.addError("Incorrect Login or Password");
              } else {
                this.props.addError(
                  res.err ? res.err : "Server error, please try again later!"
                );
              }
            }
          });
        });
      }
    }

    render() {
      const { data, validate, load } = this.state;
      return (
        <Component
          {...this.props}
          handlerChange={this.handlerChange}
          data={data}
          validate={validate}
          handlerSubmit={this.handlerSubmit}
          load={load}
        />
      );
    }
  }
  WithForm.displayName = `WithForm(${Component.displayName ||
    Component.name ||
    "Component"})`;
  return WithForm;
};

export default withForm;
