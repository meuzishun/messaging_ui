import PropTypes from 'prop-types';
import styles from './FormInput.module.scss';

function FormInput({ type, id, name, label, placeholder, value, onChange }) {
  return (
    <fieldset className={styles['form-input']}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type || 'text'}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </fieldset>
  );
}

FormInput.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;
