import React, { useState } from "react";
import { authenticationService } from "../_services/authenticationService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = props => {
  const [isMenuShown, setMenuShown] = useState(false);

  const renderMenu = () => {
    return (
      <div
        className={`${
          isMenuShown ? "block" : "hidden"
        } w-full flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          {authenticationService.currentUserValue() ? (
            <React.Fragment>
              <a
                href="/blog"
                className="lg:float-right lg:mr-3 text-2xl block mt-4 sm:block lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
              >
                Blog
              </a>
              <button
                onClick={() => authenticationService.logout()}
                className="lg:float-right lg:mr-3 text-2xl block mt-4 sm:block lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
              >
                Logout
              </button>
            </React.Fragment>
          ) : (
            <a
              href="/login"
              className="lg:float-right lg:mr-3 text-2xl block mt-4 sm:block lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Login
            </a>
          )}
        </div>
      </div>
    );
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-2">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a
          href="/"
          className="text-white mr-6 sm:text-5xl lg:text-2xl font-semibold tracking-tight"
        >
          Creative Outlet
        </a>
      </div>

      <div className="block lg:hidden">
        <button
          onClick={() => setMenuShown(!isMenuShown)}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <FontAwesomeIcon className="sm:text-5xl" icon="bars" />
        </button>
      </div>
      {renderMenu()}
    </nav>
  );
};

export default Header;
