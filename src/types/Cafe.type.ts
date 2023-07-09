export interface Image {
  url: string;
}

export interface Cafe {
  id: number;
  name: string;
  street: string;
  places: number;
  images: Image[];
  rating: number;
  reviews: number;
  average_bill: '$' | '$$' | '$$$';
  is_favourite_cafe: boolean;
  work_time_start: string;
  work_time_end: string;
  has_wifi: boolean;
  has_coworking_place: boolean;
  can_with_pets: boolean;
  has_outdoor_seating: boolean;
  has_vegan_menu: boolean;
  phone_number?: string;
}

export interface APIResponse<T> {
  items: T[];
  total: number;
  page: number;
  size: number;
  pages: number;
}
