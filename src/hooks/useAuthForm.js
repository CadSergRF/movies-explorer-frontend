import { useState, useCallback } from 'react';
import isEmail from 'validator/lib/isEmail';

const useAuthForm = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "name" && event.target.validity.patternMismatch) {
      event.target.setCustomValidity(
        "Имя может содержать только кириллицу, латиницу, пробел или дефис."
      );
    } else if (name === "email" && !isEmail(value)) {
      event.target.setCustomValidity(
        "Формат e-mail: name@domain.zone"
      );
    } else {
      event.target.setCustomValidity("");
    }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: event.target.validationMessage });
    setIsFormValid(event.target.closest('#form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsFormValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsFormValid(newIsFormValid);
    },
    [setValues, setErrors, setIsFormValid],
  );

  return {
    values,
    errors,
    handleChange,
    isFormValid,
    resetForm,
  };
};

export default useAuthForm;
