import React from "react";
import PropTypes from "prop-types";
import classes from "./NumberInput.module.css";
import { numberInputSchema } from "../../Pages/Rates/ValidationSchemas";

const NumberInput = ({
  value,
  onChange,
  placeholder,
  label,
  isError = false,
  testId,
}) => {
  const handleNumberInputChange = (value) => {
    const validationResult = numberInputSchema.safeParse(value);
    if (!validationResult.success) {
      console.error(validationResult.error.errors[0].message);
      return;
    }
    onChange(value);
  };

  return (
    <div className={classes.NumberInputContainer}>
      {label && (
        <label className={classes.label} htmlFor="number-input">
          {label}
        </label>
      )}
      <input
        id="number-input"
        data-testid={testId}
        type="number"
        value={value}
        onChange={(e) => handleNumberInputChange(e.target.value)}
        className={classes.input}
        placeholder={placeholder}
        disabled={isError}
      />
    </div>
  );
};

NumberInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  isError: PropTypes.bool,
  testId: PropTypes.string,
};

export default NumberInput;
