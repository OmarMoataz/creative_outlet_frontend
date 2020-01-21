import { BehaviorSubject } from "rxjs";

import config from "config";
import { handleResponse } from "@/_helpers";

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("currentUser"))
);

export const authenticationService = {
  login,
  logout,
  currentUser: currentUserSubject.asObservable(),
  currentUserValue() {
    return currentUserSubject.value;
  }
};

function login(email, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  };

  return fetch(`${config.apiUrl}/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));

            return user;
        });
}

function logout() {
  // Remove user from local storage.
  localStorage.removeItem('currentUser');
  currentUserSubject.next(null);
}
