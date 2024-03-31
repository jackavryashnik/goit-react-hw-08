import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useId } from 'react';
import * as Yup from 'yup';
import css from './LoginForm.module.css'
import login from '../../redux/auth/operations'

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, 'Too Short! Min length 3')
    .max(50, 'Too Long! Max length 50')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too Short! Min length 8')
    .max(50, 'Too Long! Max length 50')
    .required('Required'),
});

const LoginForm = () => {
  const loginFormId = useId();

  const handleLogin = (values) => {
    login(values);
  }

  return <Formik
  initialValues={{ email: '', password: '' }}
  onSubmit={handleLogin}
  validationSchema={SignupSchema}>
    <Form>
    <div className={css.inputWrapper}>
          <label htmlFor={`${loginFormId}-email`}>Email</label>
          <Field type="text" name="email" id={`${loginFormId}-email`} />
          <ErrorMessage name="email" component="span" className={css.error} />
        </div>
        <div className={css.inputWrapper}>
          <label htmlFor={`${loginFormId}-password`}>Name</label>
          <Field type="text" name="password" id={`${loginFormId}-password`} />
          <ErrorMessage name="password" component="span" className={css.error} />
        </div>
    </Form>
  </Formik>;
};

export default LoginForm;
