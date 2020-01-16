import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { withRouter } from 'react-router';
import * as Yup from "yup";
import { authenticationService } from "../_services/authenticationService";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    if (authenticationService.curretnUserValue) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div>
        <h2> Login </h2>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().required("Email is required"),
            password: Yup.string().required("Password is required")
          })}
          onSubmit={({ email, password }, { setStatus, setSubmitting }) => {
            setStatus();
            authenticationService.login(email, password).then(
              user => {
                this.props.history.push('/');
              },
              error => {
                setSubmitting(false);
                setStatus(error);
              }
            );
          }}
        >
          {({ status, isSubmitting }) => (
            <Form>
              <div>
                <label htmlFor="email">Email</label>
                <Field name="email" type="text" />
                <ErrorMessage name="email" component="div" />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" />
                <ErrorMessage name="password" component="div" />
              </div>
              <div>
                <button type="submit" disabled={isSubmitting}>
                  Login
                </button>
              </div>
              {status && <div> {status} </div>}
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default withRouter(LoginPage);
