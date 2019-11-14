const Validator = require('validator');

const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);

const validateRegisterInputs = data => {
  const errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.username = !isEmpty(data.username) ? data.username : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Invalid Email';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Required';
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = 'Required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

const validateLoginInputs = data => {
  const errors = {};

  data.username = !isEmpty(data.username) ? data.username : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (Validator.isEmpty(data.username)) {
    errors.username = 'Required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = { validateLoginInputs, validateRegisterInputs };
