export interface User {
  email: string;
  password: string;
  is_active: boolean;
  is_superuser: boolean;
  is_verified: boolean;
  first_name: string;
  last_name: string;
  phone_number: string;
}

export interface NewUserAPIResponse {
  id: number;
  email: string;
  is_active: boolean;
  is_superuser: boolean;
  is_verified: boolean;
  first_name: string;
  last_name: string;
  phone_number: null;
}

export interface LoginUserAPIResponse {
  access_token: string;
  token_type: 'bearer';
}
