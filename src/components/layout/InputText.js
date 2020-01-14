import React from "react";
import PropTypes from "prop-types";

const InputText = ({
  // Destructuring Props
  label,
  name,
  type,
  value,
  error,
  onChange
}) => {
  const invalid = { color: "red" };
  return (
    <div className="input-field col s6">
      <label htmlFor="name" className="blue-text">
        {label}
      </label>
      <input type={type} name={name} value={value} onChange={onChange} />
      {error ? (
        <span className="helper-text invalid" style={invalid}>
          {error}
        </span>
      ) : (
        <span className="helper-text"></span>
      )}
    </div>
  );
};

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};
InputText.defaultProps = {
  type: "text"
};
export default InputText;
