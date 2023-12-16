import Form from '../Form/Form';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import styles from './LoginForm.module.scss';
import { postLoginData } from '../../services/api';

function LoginForm() {
  const inputFields = [
    { type: 'email', id: 'email', name: 'email', label: 'email' },
    { type: 'password', id: 'password', name: 'password', label: 'password' },
  ];

  const handleSubmit = async (formData) => {
    const response = await postLoginData(formData);
    console.log(response);
  };

  return (
    <div className={styles['login-form']}>
      <h2>Login Form</h2>
      <Form onSubmit={handleSubmit}>
        {inputFields.map((field) => (
          <FormInput
            key={field.id}
            type={field.type}
            id={field.id}
            name={field.name}
            label={field.label}
          />
        ))}
        <Button type='submit' textContent='submit' classNames={['btn']} />
      </Form>
    </div>
  );
}

export default LoginForm;
