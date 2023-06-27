export interface Cafe {
  id: number;
  name: string;
  places: number;
  images: string[];
  rating: number;
  reviews: number;
  average_bill: '$' | '$$' | '$$$';
}

export interface CafesAPIResponse {
  items: Cafe[];
  total: number;
  page: number;
  size: number;
  pages: number;
}
