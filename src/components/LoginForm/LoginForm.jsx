import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './LoginForm.module.css';
import login from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const loginFormId = useId();

  const handleLogin = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleLogin}
      validationSchema={validationSchema}
    >
      <Form>
        <div className={css.inputWrapper}>
          <label htmlFor={`${loginFormId}-email`}>Email</label>
          <Field type="text" name="email" id={`${loginFormId}-email`} />
          <ErrorMessage name="email" component="span" className={css.error} />
        </div>
        <div className={css.inputWrapper}>
          <label htmlFor={`${loginFormId}-password`}>Name</label>
          <Field type="text" name="password" id={`${loginFormId}-password`} />
          <ErrorMessage
            name="password"
            component="span"
            className={css.error}
          />
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
