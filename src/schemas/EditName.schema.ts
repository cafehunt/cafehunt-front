import * as Yup from 'yup';
import { UserNameFormValues } from '../types/UserNameFormValues';

export const EditNameSchema: Yup.ObjectSchema<UserNameFormValues> =
  Yup.object().shape({
    userName: Yup.string()
      .test(
        'twoWords',
        'Full name should contain two words',
        (value) => value?.trim().split(' ').length === 2
      )
      .test(
        'wordLength',
        'Each word should be between 4 and 60 characters',
        (value) => {
          const words = value?.trim().split(' ');
          return words?.every((word) => word.length >= 4 && word.length <= 60);
        }
      )
      .required('Full name is required'),
  });
