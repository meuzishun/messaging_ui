import { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Form from '../Form/Form';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import styles from './LoginForm.module.scss';
import { loginInputFields } from '../../constants/inputFields';
import useAuth from '../../hooks/useAuth.jsx';

function LoginForm() {
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const inputRefs = {
    email: useRef(null),
    password: useRef(null),
  };

  const handleSubmit = async (formData) => {
    inputRefs.password.current.blur();
    setError(null);

    try {
      await login(formData);
      setError(null);
      navigate('/messages');
    } catch (error) {
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
        {error && <p>{error.message}</p>}
        <Button type='submit' textContent='login' classNames={['btn']} />
        <p className={styles['link']}>
          Don&apos;t have an account? <Link to='/register'>Click here</Link>
        </p>
      </Form>
    </div>
  );
}

export default LoginForm;
