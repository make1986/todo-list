import React from "react";

import { HandlerAPI } from "../../api";

const withInitial = Component => {
  class WithInitial extends React.Component {
    constructor(props) {
      super(props);
      let data;
      if (__isBrowser__) {
        data = window.__INITIAL_DATA__;
        delete window.__INITIAL_DATA__;
      } else if (props.staticContext && props.staticContext.data) {
        data = props.staticContext.data;
      }
      this.state = {
        view: "login",
        titleAuth: "",
        data: data.data && data.data.data ? data.data.data : [],
        withData: data.data ? true : false,
        user: data.user ? data.user : null
      };
      this.switchLogin = this.switchLogin.bind(this);
      this.registrationCallback = this.registrationCallback.bind(this);
      this.authCallback = this.authCallback.bind(this);
      this.callServer = this.callServer.bind(this);
      this.logout = this.logout.bind(this);
    }
    componentDidMount() {
      const { withData } = this.state;
      if (!withData) {
        const handlerAPI = new HandlerAPI("user/get_data", "get");
        handlerAPI.response().then(data => {
          if (data.ok) {
            this.setState({
              data: data && data.data && data.data.data ? data.data.data : [],
              user: data.user,
              view: "todo",
              withData: true
            });
          } else {
            this.setState({ withData: true });
          }
        });
      }
    }
    callServer(data) {
      const id = this.state.user._id;
      const handlerAPI = new HandlerAPI("todo/set", "post", { id, data });
      handlerAPI.response().then(res => {
        if (res.ok && res.data) {
          this.setState({ data: res.data.data });
        }
      });
    }

    switchLogin(type) {
      this.setState({ view: type });
    }

    registrationCallback(res) {
      const { data } = res;
      const titleAuth = `Ok, ${data.name}, log in and work on tasks`;
      this.setState({ view: "login", titleAuth });
    }

    authCallback(data) {
      if (data.ok) {
        const handlerAPI = new HandlerAPI("user/get_data", "get");
        handlerAPI.response().then(data => {
          if (data.ok) {
            this.setState({
              data: data && data.data && data.data.data ? data.data.data : [],
              user: data.user,
              view: "todo"
            });
          }
        });
      }
    }

    logout() {
      document.cookie = "auth_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      this.switchLogin("login");
    }

    render() {
      const { view, titleAuth, withData, data, user } = this.state;
      return (
        <Component
          titleAuth={titleAuth}
          view={view}
          switchLogin={this.switchLogin}
          registrationCallback={this.registrationCallback}
          authCallback={this.authCallback}
          withData={withData}
          data={data}
          user={user}
          callServer={this.callServer}
          logout={this.logout}
          {...this.props}
        />
      );
    }
  }
  WithInitial.displayName = `WithInitial(${Component.displayName ||
    Component.name ||
    "Component"})`;
  return WithInitial;
};

export default withInitial;
