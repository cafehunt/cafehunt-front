import * as Yup from 'yup';
import { BookingFormValues } from '../types/BookingFormValues';

export const BookingSchema: Yup.ObjectSchema<BookingFormValues> =
  Yup.object().shape({
    places: Yup.number()
      .moreThan(0, 'Number must be positive')
      .required('Please enter number of guests'),
    booking_date: Yup.string().required('Please choose date'),
    booking_time: Yup.string().required('Please choose time'),
  });
