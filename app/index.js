import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, Switch } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, fabars, faBars } from '@fortawesome/free-solid-svg-icons';

import "./styles/tailwind.css";

import { history } from "@/_helpers";
import { authenticationService } from "@/_services";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import { PrivateRoute } from "@/_components";



class App extends React.Component {
  constructor(props) {
    library.add(fab, faCheckSquare, faBars);
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
