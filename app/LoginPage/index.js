import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { withRouter } from "react-router";
import * as Yup from "yup";
import { authenticationService } from "../_services/authenticationService";

import '@/forms.css';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    if (authenticationService.curretnUserValue) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className="centered form__container">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().required("Email is required"),
            password: Yup.string().required("Password is required"),
          })}
          onSubmit={({ email, password }, { setStatus, setSubmitting }) => {
            setStatus();
            authenticationService.login(email, password).then(
              () => {
                this.props.history.push("/");
              },
              (error) => {
                setSubmitting(false);
                setStatus(error);
              }
            );
          }}
        >
          {({ status, isSubmitting }) => (
            <Form className="form__group">
              <h1 className="form__title"> Login </h1>
              <div className="form__group">
                <label
                  className="form__input-label"
                  htmlFor="email"
                >
                  My Email
                </label>
                <Field
                  placeholder="john.doe@example.com"
                  className="form__input-field"
                  name="email"
                  type="text"
                />
                <ErrorMessage
                  className="form__field-error"
                  name="email"
                  component="div"
                />
              </div>
              <div className="form__group">
                <label className="form__input-label" htmlFor="password">
                  My Password
                </label>
                <Field
                  placeholder="my password"
                  className="form__input-field"
                  name="password"
                  type="password"
                />
                <ErrorMessage
                  className="form__field-error"
                  name="password"
                  component="div"
                />
              </div>
              <div className="form__group">
                <button
                  className="button form__submit-button"
                  type="submit"
                  disabled={isSubmitting}
                >
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
