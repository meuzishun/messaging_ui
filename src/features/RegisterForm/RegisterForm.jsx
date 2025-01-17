import { registerInputFields } from '../../constants/inputFields.js';
import { useRef, useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth.jsx';
import { useNavigate, Link } from 'react-router-dom';
import Form from '../../composites/Form/Form.jsx';
import FormInput from '../../components/FormInput/FormInput.jsx';
import Button from '../../components/Button/Button.jsx';
import styles from './RegisterForm.module.scss';

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
    if (error?.message.includes('email') || error?.message.includes('User')) {
      inputRefs.email.current.select();
    }

    if (error?.message.includes('password')) {
      inputRefs.password.current.focus();
    }
  }, [error]);

  useEffect(() => {
    inputRefs.firstName.current.focus();
  }, []);

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
