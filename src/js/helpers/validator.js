import validator from 'validator';
import i18n from '../i18n/i18n';

/**
 *  return a message about error
 *
 * @param {string} source
 * @param {array} params
 * @returns {string}
 */
function format(source, params) {
  return params.reduce((message, value, index) => message.replace(new RegExp(`\\{${index}\\}`, 'g'), value), source);
}

const messages = {
  required: 'This field is required.',
  remote: 'Please fix this field.',
  email: 'Please enter a valid email address.',
  url: 'Please enter a valid URL.',
  date: 'Please enter a valid date.',
  number: 'Please enter a valid number.',
  digits: 'Please enter only digits.',
  equalTo: 'Please enter the same value again.',
  maxlength: 'Please input max {0} characters.',
  minlength: 'Please enter at least {0} characters.',
  rangelength: 'Please enter a value between {0} and {1} characters long.',
  range: 'Please enter a value between {0} and {1}.',
  max: 'Please enter a value less than or equal to {0}.',
  min: 'Please enter a value greater than or equal to {0}.',
};

/**
 *
 *
 * @export function
 * @param {string} input
 * @returns {string}
 */
export function validateRequired(input) {
  if (validator.isEmpty(input)) {
    return messages.required;
  }
  return '';
}

/**
 * validate email
 *
 * @export function
 * @param {string} email
 * @returns {string}
 */
export function validateEmail(email) {
  if (validator.isEmpty(email)) {
    return messages.required;
  }
  if (!validator.isEmail(email)) {
    return messages.email;
  }
  return '';
}

/**
 * validate password
 *
 * @export function
 * @param {string} password
 * @returns {string}
 */
export function validatePassword(password) {
  if (validator.isEmpty(password)) {
    return messages.required;
  }
  if (validator.isLength(password, { max: 5 })) {
    return format(messages.minlength, [6]);
  }
  return '';
}

export function checkEmail(email) {
  let isValid = true;
  let isValidEmail = true;
  let invalidEmailText = '';

  if (!validator.isEmail(email)) {
    isValid = false;
    isValidEmail = false;
    invalidEmailText = i18n.t('invalidEmail');
  }

  return ({
    isValid,
    isValidEmail,
    invalidEmailText,
  });
}

export function checkPassword(password) {
  const { length } = password;

  let isValidPassword = true;
  let invalidPasswordText = '';

  if (length < 8) {
    isValidPassword = false;
    invalidPasswordText = i18n.t('invalidPassword');
  }

  return {
    isValidPassword,
    invalidPasswordText,
  };
}

export function checkConfirmPassword(password, passwordConfirm) {
  let isValidConfirmPassword = true;
  let invalidConfirmPasswordText = '';

  if (password !== passwordConfirm) {
    isValidConfirmPassword = false;
    invalidConfirmPasswordText = i18n.t('invalidConfirmPassword');
  }

  return {
    isValidConfirmPassword,
    invalidConfirmPasswordText,
  };
}
