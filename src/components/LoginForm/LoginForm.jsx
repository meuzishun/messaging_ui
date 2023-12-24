import Form from '../Form/Form';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import styles from './LoginForm.module.scss';
import { postLoginData } from '../../services/api';
import { loginInputFields } from '../../constants/inputFields';

function LoginForm() {
  const handleSubmit = async (formData) => {
    const response = await postLoginData(formData);
    console.log(response);
  };

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
          />
        ))}
        <Button type='submit' textContent='submit' classNames={['btn']} />
      </Form>
    </div>
  );
}

export default LoginForm;
