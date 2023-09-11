import React from 'react';
import { Formik } from 'formik';

const Login = () => (
  <div style={{display:'flex',flexDirection:'column',alignItems:'center',backgroundColor:'blanchedalmond'}}>
    <h1>Please Enter Your Credentials</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
            <div className='login-form'>
                <label >Email: </label>
                <input
                    className='input-form'
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                {errors.email && touched.email && errors.email}
                <br />
                <label>Password: </label>
                <input
                    className='input-form'
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                />
                {errors.password && touched.password && errors.password}
                <br />
                <button type="submit" disabled={isSubmitting} style={{width:'25%',height:'10%'}}>
                    Submit
                </button>
            </div>
            
        </form>
      )}
    </Formik>
  </div>
);

export default Login;