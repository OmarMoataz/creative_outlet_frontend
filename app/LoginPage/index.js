import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { authenticationService } from "../_services/authentication.service";

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
          onSubmit={(values, { setStatus, setSubmitting }) => {
            setStatus();
            authenticationService.login(values.email, values.password).then(
              user => {
                const { from } = this.props.location.state || {
                  from: { pathname: "/" }
                };
                this.props.history.push(from);
              },
              error => {
                setSubmitting(false), setStatus(error);
              }
            );
          }}
        >
          {({ errors, touched, status, isSubmitting }) => (
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
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default LoginPage;
