import PropTypes from 'prop-types';
import styles from './Form.module.scss';
import { useState, Children, cloneElement } from 'react';

function Form({ onSubmit, children }) {
  const [formState, setFormState] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setFormState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('formState in From component:');
    console.table(formState);
    onSubmit(formState);
    setFormState((prev) => {
      return {
        ...prev,
        password: '',
      };
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {Children.map(children, (child) => {
        if (child?.type.name === 'FormInput') {
          return cloneElement(child, {
            value: formState[child.props.name] || '',
            onChange: handleChange,
          });
        } else {
          return child;
        }
      })}
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Form;
