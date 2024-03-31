import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useId } from 'react';
import * as Yup from 'yup';
import css from './LoginForm.module.css'
import register from '../../redux/auth/operations'
import { useDispatch } from 'react-redux';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const registerFormId = useId();

  const handleRegistrate = (values, actions) => {
    dispatch(register(values))
    actions.resetForm();
  }

  return (<Formik
  initialValues={{ name: '', email: '', password: '' }}
  onSubmit={handleRegistrate}
  validationSchema={validationSchema}>
    <Form>
      <div className={css.inputWrapper}>
        <label htmlFor={`${registerFormId}-name`}>Name</label>
        <Field type="text" name="name" id={`${registerFormId}-name`} />
        <ErrorMessage name="name" component="span" className={css.error} />
      </div>
      <div className={css.inputWrapper}>
        <label htmlFor={`${registerFormId}-email`}>Email</label>
        <Field type="text" name="email" id={`${registerFormId}-email`} />
        <ErrorMessage name="email" component="span" className={css.error} />
      </div>
      <div className={css.inputWrapper}>
        <label htmlFor={`${registerFormId}-password`}>Password</label>
        <Field type="text" name="password" id={`${registerFormId}-password`} />
        <ErrorMessage name="password" component="span" className={css.error} />
      </div>
    </Form>
  </Formik>)
};

export default RegistrationForm;
