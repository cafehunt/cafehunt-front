import * as Yup from 'yup';
import { BookingFormValues } from '../types/BookingFormValues';

export const BookingSchema: Yup.ObjectSchema<BookingFormValues> =
  Yup.object().shape({
    places: Yup.number().required('Please enter number of guests'),
    booking_date: Yup.string().required('Please choose date'),
    booking_time: Yup.string().required('Please choose time'),
  });
