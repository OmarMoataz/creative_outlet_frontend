import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, Switch } from "react-router-dom";

import { history } from "@/_helpers";
import { authenticationService } from "@/_services";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import { PrivateRoute } from "@/_components";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x =>
      this.setState({ currentUser: x })
    );
  }

  logout() {
    authenticationService.logout();
    history.push("/login");
  }

  render() {
    const { currentUser } = this.state;

    return (
      <Router history={history}>
        <div>
          {currentUser && (
            <nav>
              <div>
                <Link to="/">Home</Link>
                <a href="/login" onClick={this.logout}>Logout</a>
              </div>
            </nav>
          )}
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
