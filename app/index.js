import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./LoginPage";

class App extends React.Component {
  render() {
    return <Login/>
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
