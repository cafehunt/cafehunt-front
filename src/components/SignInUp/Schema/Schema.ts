import * as yup from 'yup';
import { emailTemplate } from '../../../utils/emailTemplate';

export const schema = yup.object().shape({
  email: yup
    .string()
    .required('The email field is required')
    .matches(emailTemplate, 'The email must be a valid email address.'),
  first_name: yup
    .string()
    .required('The firstname field is required')
    .min(4, 'The firstname must be at least 4 characters')
    .max(60, 'The firstname must be no longer than 60 characters'),
  last_name: yup
    .string()
    .required('The lastname field is required')
    .min(4, 'The lastname must be at least 4 characters')
    .max(60, 'The lastname must be no longer than 60 characters'),
  password: yup
    .string()
    .required('The password field is required')
    .min(8, 'The password must be at least 8 characters')
    .max(30, 'The password must be no longer than 60 characters')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/,
      'The password must contain at least one digit, one lowercase letter, and one uppercase letter'
    ),
  passwordRepeat: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'The passwords must match')
    .required('The repeat password field is required'),
});
