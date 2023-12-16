import Form from '../Form/Form';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import styles from './RegisterForm.module.scss';
import { postRegisterData } from '../../services/api';

function RegisterForm() {
  const inputFields = [
    { type: 'text', id: 'firstName', name: 'firstName', label: 'first name' },
    { type: 'text', id: 'lastName', name: 'lastName', label: 'last name' },
    { type: 'email', id: 'email', name: 'email', label: 'email' },
    { type: 'password', id: 'password', name: 'password', label: 'password' },
  ];

  const handleSubmit = async (formData) => {
    const response = await postRegisterData(formData);
    console.log(response);
  };

  return (
    <div className={styles['register-form']}>
      <h2>Register Form</h2>
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

export default RegisterForm;
