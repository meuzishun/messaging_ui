import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.scss';
import { useReducer, Children, cloneElement } from 'react';
import { removeObjProps } from '../../lib/removeObjProps.js';

function Form({ onSubmit, children, inputRefs }) {
  const initialFormState = {
    error: null,
    isLoading: false,
  };

  function formReducer(formState, action) {
    switch (action.type) {
      case 'submit':
        return {
          ...formState,
          password: '',
          isLoading: true,
          error: null,
        };
      case 'changeValue':
        return {
          ...formState,
          [action.field]: action.value,
        };
      case 'error':
        return {
          ...formState,
          isLoading: false,
          error: action.error,
        };
      case 'success':
        return {
          isLoading: false,
          error: null,
        };
      default:
        return initialFormState;
    }
  }

  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const handleChange = (e) => {
    e.preventDefault();
    dispatch({
      type: 'changeValue',
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'submit' });
    const fields = removeObjProps(formState, ['isLoading', 'error']);
    const submission = await onSubmit(fields);

    if (!submission.success) {
      dispatch({ type: 'error', error: submission });
    }

    if (submission.success) {
      dispatch({ type: 'success' });
    }
  };

  useEffect(() => {
    if (formState.error) {
      if (formState.error.message.includes('email')) {
        inputRefs.email.current.select();
      }
      if (formState.error.message.includes('User')) {
        inputRefs.email.current.select();
      }
      if (formState.error.message.includes('password')) {
        inputRefs.password.current.focus();
      }
    }
  }, [formState.error]);

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
      {formState.isLoading && <p>Submitting...</p>}
      {formState.error && <p>{formState.error.message}</p>}
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
  inputRefs: PropTypes.object,
};

export default Form;
