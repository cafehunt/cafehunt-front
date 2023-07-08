import * as Yup from 'yup';
import { LoginFormValues } from '../types/LoginFormValues.type';

export const LoginSchema: Yup.ObjectSchema<LoginFormValues> =
  Yup.object().shape({
    username: Yup.string().required('The email field is required'),
    password: Yup.string().required('The password field is required'),
  });
