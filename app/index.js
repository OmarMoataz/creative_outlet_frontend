import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

import "./styles/tailwind.css";

import { history } from "@/_helpers";
import { authenticationService } from "@/_services";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import Blog from "./Blog";
import Header from "./_components/header";
import { PrivateRoute } from "@/_components";
import ArticleDetailsPage from "./ArticleDetailsPage";

class App extends React.Component {
  constructor(props) {
    library.add(fab, faCheckSquare);
    super(props);

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe((x) =>
      this.setState({ currentUser: x })
    );
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Router history={history}>
          <div>
            <Switch>
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/" component={HomePage} />
              <PrivateRoute exact path="/blog" component={Blog} />
              <Route
                exact
                path="/:id"
                children={<ArticleDetailsPage />}
              />
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
