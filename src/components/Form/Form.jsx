import PropTypes from 'prop-types';
import styles from './Form.module.scss';
import { useState, Children, cloneElement } from 'react';

function Form({ onSubmit, children }) {
  // console.log('Rendering form...');
  const [formState, setFormState] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
    setFormState({});
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {Children.map(children, (child) => {
        if (child.type.name === 'FormInput') {
          return cloneElement(child, {
            value: formState[child.props.name] || '',
            onChange: handleChange,
          });
        }

        if (child.type.name === 'Button' && child.props.type === 'submit') {
          return cloneElement(child, {
            clickHandler: handleSubmit,
          });
        }
      })}
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
};

export default Form;
