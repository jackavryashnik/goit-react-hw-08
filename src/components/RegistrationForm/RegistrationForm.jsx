import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useId } from 'react';
import * as Yup from 'yup';
import css from './LoginForm.module.css'
import register from '../../redux/auth/operations'

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

const RegistrationForm = () => {
  const registerFormId = useId();

  const handleRegistrate = (values) => {
    register(values);
  }

  return <Formik
  initialValues={{ name: '', email: '', password: '' }}
  onSubmit={handleRegistrate}
  validationSchema={SignupSchema}>
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
  </Formik>;
};

export default RegistrationForm;
