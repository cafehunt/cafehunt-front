import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().required().email('invalid email'),
  firstname: yup.string().required().min(4).max(60),
  lastname: yup.string().required().min(4).max(60),
  password: yup
  .string()
  .required()
  .min(8, 'password must be at least 8 characters')
  .max(30, 'password must not exceed 30 characters')
  .matches(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/,
    'password must contain at least one digit, one lowercase letter, and one uppercase letter'
  ),
  passwordRepeat: yup
  .string()
  .oneOf([yup.ref('password'), undefined], 'passwords must match')
  .required('repeat your password is a required field'),
});