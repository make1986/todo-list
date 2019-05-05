import React from "react";

const withTextFields = Component => {
  class WithTextFields extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        focus: this.props.value ? true : false
      };
      this.handlerFocus = this.handlerFocus.bind(this);
      this.handlerBlur = this.handlerBlur.bind(this);
      this.changeMiddleware = this.changeMiddleware.bind(this);
    }

    handlerFocus() {
      this.setState({ focus: true });
    }

    handlerBlur() {
      if (!this.props.value || this.props.value.length === 0) {
        this.setState({ focus: false });
      }
      if (this.props.isChecklist) {
        const isIsset =
          !this.props.value || this.props.value.length === 0 ? false : true;
        this.props.blureChek(isIsset, this.props.name);
      }
    }

    changeMiddleware(e) {
      const { name, value } = e.target;
      this.props.handlerChange(name, value);
    }

    render() {
      const { focus } = this.state;
      return (
        <Component
          {...this.props}
          length={this.props.value ? this.props.value.length : 0}
          handlerFocus={this.handlerFocus}
          handlerBlur={this.handlerBlur}
          focus={focus}
          changeMiddleware={this.changeMiddleware}
        />
      );
    }
  }
  WithTextFields.displayName = `WithTextFields(${Component.displayName ||
    Component.name ||
    "Component"})`;
  return WithTextFields;
};

export default withTextFields;
