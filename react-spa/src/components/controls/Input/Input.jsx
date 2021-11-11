import React from 'react';
import PropTypes from 'prop-types';
import Asterisk from '../../../components/units/Asterisk/Asterisk';
import './Input.scss';

const Input = ({
  label, type, className, name, placeholder, value, onChange, onBlur, onKeyPress, isRequired, title, 
}) => (
  <div className="input-wrapper">
    <label className="label" htmlFor={name}>
      {label}
      {isRequired && <Asterisk />}
    </label>
    <input
      className={`input ${className}`}
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onKeyPress={onKeyPress}
      isRequired={isRequired}
      title={title}
    />
  </div>
);

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyPress: PropTypes.func,
  isRequired: PropTypes.bool,
  title: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  value: '',
  placeholder: '',
  className: '',
  onChange: () => {},
  onBlur: () => {},
  onKeyPress: () => {},
  isRequired: false,
  title: '',
};

export default Input;
