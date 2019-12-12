import React from 'react';
import { Formik } from 'formik';

const Login = () => {
  return ( 
    <Formik>
      <form>
        <input
          type="email"
          name="email"
        />
        <input
          type="password"
          name="password"
        />
        <button type="submit">
          Login
        </button>
      </form>
    </Formik>
  );
}

export default Login;
