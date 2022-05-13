import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

import { LoginForm } from './LoginPage.styled';

// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
  login: yup
    .string('Enter your login')
    .min(4, 'Login should be of minimum 4 characters length')
    .required('Login is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export function RegisterPage() {
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     navigate('/');
  //   }
  // }, [isLoggedIn, navigate]);

  const formik = useFormik({
    initialValues: {
      login: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: ({ login: name, email, password }) => {
      console.log(name, email, password);
      dispatch(authOperations.register({ name, email, password }));
      alert(JSON.stringify(`${name} ${email} ${password}`, null, 2));
      formik.handleReset();
    },
  });

  return (
    <LoginForm>
      <h1>Register in the personal book of contacts</h1>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <TextField
            // fullWidth
            id="login"
            name="login"
            label="Login"
            value={formik.values.login}
            onChange={formik.handleChange}
            error={formik.touched.login && Boolean(formik.errors.login)}
            helperText={formik.touched.login && formik.errors.login}
          />
          <TextField
            // fullWidth
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
          <Button color="primary" variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </LoginForm>
  );
}
