// import { useLocation, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

import { LoginForm } from './LoginPage.styled';

// import { styled } from '@mui/material/styles';
// import { useEffect } from 'react';
//import styled from '@emotion/styled';

// const ButtonStylized = styled(Button)`
//   /* This renders the buttons above... Edit me! */
//   display: inline-block;
//   border-radius: 25px;
//   padding: 0.5rem 0;
//   margin: 0.5rem 1rem;
//   width: 11rem;
//   background: transparent;
//   color: #7c1313;
//   border: 2px solid white;
// `;

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    // .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export function LoginPage() {
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  // const navigate = useNavigate();
  // const location = useLocation();

  // const fromPage = location.state?.from?.pathname || '/';

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     navigate(fromPage);
  //   }
  // }, [fromPage, isLoggedIn, navigate]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: ({ email, password }) => {
      // console.log(email, password);
      dispatch(authOperations.logIn({ email, password }));
      // alert(JSON.stringify(` ${email} ${password}`, null, 2));
      formik.handleReset();
    },
  });

  return (
    <LoginForm>
      <h1>Enter the personal book of contacts</h1>
      {/* {fromPage} */}
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <TextField
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            // fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          {/* <ButtonStylized variant="contained" type="submit"> */}
          <Button variant="contained" type="submit">
            {/* fullWidth color="primary"*/}
            Submit
          </Button>
          {/* </ButtonStylized> */}
        </form>
      </div>
    </LoginForm>
  );
}
