import { useRef, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Form from '../Form/Form';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import styles from './RegisterForm.module.scss';
import { registerInputFields } from '../../constants/inputFields.js';
import useAuth from '../../hooks/useAuth.jsx';

function RegisterForm() {
  const [error, setError] = useState(null);
  const { register } = useAuth();
  const navigate = useNavigate();

  const inputRefs = {
    firstName: useRef(null),
    lastName: useRef(null),
    email: useRef(null),
    password: useRef(null),
  };

  const handleSubmit = async (formData) => {
    inputRefs.password.current.blur();
    setError(null);

    try {
      await register(formData);
      setError(null);
      navigate('/messages');
    } catch (error) {
      setError(error);
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
      <h2>Register</h2>
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
        {/* {isLoading && <LoadingMsg text='Submitting...' />} */}
        {error && <p>{error.message}</p>}
        <Button type='submit' textContent='sign up' classNames={['btn']} />
        <p className={styles['link']}>
          Already have an account? <Link to='/login'>Click here</Link>
        </p>
      </Form>
    </div>
  );
}

export default RegisterForm;
