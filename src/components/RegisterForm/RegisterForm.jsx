import { useRef, useEffect, useState } from 'react';
import Form from '../Form/Form';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import styles from './RegisterForm.module.scss';
import { postRegisterData } from '../../services/api';
import { registerInputFields } from '../../constants/inputFields.js';
import { storeUserDataAndToken } from '../../services/localStorage.js';

function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const inputRefs = {
    firstName: useRef(null),
    lastName: useRef(null),
    email: useRef(null),
    password: useRef(null),
  };

  const handleSubmit = async (formData) => {
    setIsLoading(true);
    setError(null);
    const response = await postRegisterData(formData);
    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(data);
    }

    if (response.ok) {
      storeUserDataAndToken(data);
      setIsLoading(false);
      setError(null);
      //? Is this where we would navigate?
    }
  };

  useEffect(() => {
    inputRefs.firstName.current.focus();
  }, []);

  useEffect(() => {
    if (error?.message.includes('email') || error?.message.includes('User')) {
      inputRefs.email.current.select();
    }

    if (error?.message.includes('password')) {
      inputRefs.password.current.focus();
    }
  }, [error]);

  return (
    <div className={styles['register-form']}>
      <h2>Register Form</h2>
      <Form onSubmit={handleSubmit}>
        {registerInputFields.map((field) => (
          <FormInput
            key={field.id}
            type={field.type}
            id={field.id}
            name={field.name}
            label={field.label}
            forwardedRef={inputRefs[field.name]}
          />
        ))}
        {isLoading && <p>Submitting...</p>}
        {error && <p>{error.message}</p>}
        <Button type='submit' textContent='sign up' classNames={['btn']} />
      </Form>
    </div>
  );
}

export default RegisterForm;
