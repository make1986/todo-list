import React from "react";
import { Route, Switch } from "react-router-dom";

import routes from "./routes";

import P404 from "./Pages/404";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: "" };
    this.addError = this.addError.bind(this);
  }
  addError(err) {
    this.setState({ error: err });
  }
  render() {
    const { error } = this.state;
    return (
      <div className="page">
        <Route component={this.HeaderWithProps} />
        <Switch>
          {routes.map(({ path, exact, component: C, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={props => (
                <C {...props} {...rest} addError={this.addError} />
              )}
            />
          ))}
          <Route render={props => <P404 {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
