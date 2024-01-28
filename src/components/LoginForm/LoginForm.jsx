import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../Form/Form';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import styles from './LoginForm.module.scss';
import { loginInputFields } from '../../constants/inputFields';
import useAuth from '../../hooks/useAuth.jsx';

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const inputRefs = {
    email: useRef(null),
    password: useRef(null),
  };

  const handleSubmit = async (formData) => {
    setIsLoading(true);
    setError(null);

    try {
      await login(formData);
      setIsLoading(false);
      setError(null);
      navigate('/messages');
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    inputRefs.email.current.focus();
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
    <div className={styles['login-form']}>
      <h2>Login</h2>
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
        {isLoading && <p>Submitting...</p>}
        {error && <p>{error.message}</p>}
        <Button type='submit' textContent='login' classNames={['btn']} />
      </Form>
    </div>
  );
}

export default LoginForm;
