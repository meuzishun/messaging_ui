import PropTypes from 'prop-types';
import styles from './Form.module.scss';
import { useReducer, Children, cloneElement } from 'react';
import { removeObjProps } from '../../lib/removeObjProps.js';

function Form({ onSubmit, children }) {
  const initialFormState = {
    error: null,
    isLoading: false,
  };

  function formReducer(formState, action) {
    switch (action.type) {
      case 'submit':
        return {
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
};

export default Form;
