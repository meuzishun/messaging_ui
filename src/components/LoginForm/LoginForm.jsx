import { useRef, useEffect } from 'react';
import Form from '../Form/Form';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import styles from './LoginForm.module.scss';
import { postLoginData } from '../../services/api';
import { loginInputFields } from '../../constants/inputFields';
import { storeUserDataAndToken } from '../../services/localStorage.js';

function LoginForm() {
  const inputRefs = {
    email: useRef(null),
    password: useRef(null),
  };

  const handleSubmit = async (formData) => {
    const response = await postLoginData(formData);
    const data = await response.json();

    if (!response.ok) {
      data.success = false;
    }

    if (response.ok) {
      data.success = true;
      storeUserDataAndToken(data);
      //? Is this where we would navigate?
    }

    return data;
  };

  useEffect(() => {
    inputRefs.email.current.value = '';
    inputRefs.email.current.focus();
  }, []);

  return (
    <div className={styles['login-form']}>
      <h2>Login Form</h2>
      <Form onSubmit={handleSubmit}>
        {loginInputFields.map((field) => (
          <FormInput
            key={field.id}
            type={field.type}
            id={field.id}
            name={field.name}
            label={field.label}
            forwardedRef={inputRefs[field.name]}
          />
        ))}
        <Button type='submit' textContent='login' classNames={['btn']} />
      </Form>
    </div>
  );
}

export default LoginForm;
