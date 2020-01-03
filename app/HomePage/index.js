import React from "react";
import { authenticationService } from "../_services/authentication.service";
import Header from "../_components/header";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="bg-white">
        <p>
          {" "}
          Welcome to homepage,{" "}
          {authenticationService.currentUserValue().user.name}{" "}
        </p>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
