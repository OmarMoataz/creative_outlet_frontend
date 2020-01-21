import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { withRouter } from "react-router";
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
                this.props.history.push("/");
              },
              error => {
                setSubmitting(false);
                setStatus(error);
              }
            );
          }}
        >
          {({ status, isSubmitting }) => (
            <Form className="px-4">
              <h1 className="my-1 font-bold text-lg"> Login </h1>
              <div className="mb-4">
                <label
                  className="mb-1 w-full lg:w-56 text-sm block"
                  htmlFor="email"
                >
                  My Email
                </label>
                <Field
                  placeholder="john.doe@example.com"
                  className="w-full lg:w-56 lg:mr-1 text-sm p-1 border"
                  name="email"
                  type="text"
                />  
                <ErrorMessage
                  className="inline-block text-red-600"
                  name="email"
                  component="div"
                />
              </div>
              <div className="mb-4">
                <label className="mb-1 text-sm block" htmlFor="password">
                  My Password
                </label>
                <Field
                  placeholder="my password"
                  className="w-full lg:w-56 lg:mr-1 text-sm p-1 border"
                  name="password"
                  type="password"
                />
                <ErrorMessage
                  className="inline-block text-red-600"
                  name="password"
                  component="div"
                />
              </div>
              <div>
                <button
                  className="w-full lg:w-56 bg-gray-500 border"
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
