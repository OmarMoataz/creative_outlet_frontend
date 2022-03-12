import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./styles.css";
import "@/forms.css";

const RegisterPage = () => {
  return (
    <div className="centered form__container">
      <Formik
        initialValues={{
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string(),
          email: Yup.string().required("Email is required"),
          password: Yup.string().required("Password is required"),
          password_confirmation: Yup.string().required(
            "Please confirm your password"
          ),
          bio: Yup.string(),
          profile_image: Yup.mixed(),
        })}
        onSubmit={(
          { name, email, password, password_confirmation, bio },
          { setStatus, setSubmitting }
        ) => {
          setStatus();
          const userDetails = {
            name,
            email,
            password,
            password_confirmation,
            bio,
            profile_image,
          };
          authenticationService.register(userDetails).then(
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
            <h1 className="form__title"> Register </h1>
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
                className="form__e"
                name="email"
                component="div"
              />
            </div>
            <div className="form__group">
              <label className="form__input-label" htmlFor="password">
                Password
              </label>
              <Field
                placeholder="my password"
                className="form__input-field"
                name="password"
                type="password"
              />
              <ErrorMessage
                className="form__e"
                name="password"
                component="div"
              />
            </div>
            <div className="form__group">
              <label className="form__input-label" htmlFor="password">
                Password Confirmation
              </label>
              <Field
                placeholder="Password confirmation"
                className="form__input-field"
                name="password_confirmation"
                type="password"
              />
              <ErrorMessage
                className="form__e"
                name="password_confirmation"
                component="div"
              />
            </div>
            <div className="form__group">
              <label className="form__input-label" htmlFor="text">
                Bio
              </label>
              <Field
                as="textarea"
                placeholder="tell us something about you..."
                className="form__input-field"
                name="bio"
              />
              <ErrorMessage
                className="form__e"
                name="bio"
                component="div"
              />
            </div>
            <div className="form__group">
              <label className="" htmlFor="text">
                Profile Image
              </label>
              <input
                id="file"
                name="file"
                className="form__input-field"
                type="file"
                onChange={(event) => {
                  setFieldValue("file", event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage
                className=""
                name="file"
                component="div"
              />
            </div>
            <div className="form__group">
              <button
                className="form__submit-button button"
                type="submit"
                disabled={isSubmitting}
              >
                Register
              </button>
            </div>
            {status && <div> {status} </div>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterPage;
