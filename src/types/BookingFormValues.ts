export interface BookingFormValues {
  places: number;
  booking_date: string;
  booking_time: string;
}

export interface OrderValues {
  cafe_id: number;
  places: number;
  booking_date: string;
}

export interface OrderError {
  detail: string;
}
