import { useRef, useEffect } from 'react';
import Form from '../Form/Form';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import styles from './RegisterForm.module.scss';
import { postRegisterData } from '../../services/api';
import { registerInputFields } from '../../constants/inputFields';
import { storeUserDataAndToken } from '../../services/localStorage.js';

function RegisterForm() {
  const inputRefs = {
    firstName: useRef(null),
    lastName: useRef(null),
    email: useRef(null),
    password: useRef(null),
  };

  const handleSubmit = async (formData) => {
    const response = await postRegisterData(formData);
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
    inputRefs.firstName.current.focus();
  }, []);

  return (
    <div className={styles['register-form']}>
      <h2>Register Form</h2>
      <Form onSubmit={handleSubmit} inputRefs={inputRefs}>
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
        <Button type='submit' textContent='sign up' classNames={['btn']} />
      </Form>
    </div>
  );
}

export default RegisterForm;
