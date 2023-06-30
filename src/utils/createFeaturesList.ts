import { Cafe } from '../types/Cafe.type';

export const createFeaturesList = (item: Cafe): string[] => {
  const res = [];

  if (item.has_wifi) {
    res.push('Free Wi-Fi');
  }

  if (item.has_coworking_place) {
    res.push('Coworking place');
  }

  if (item.can_with_pets) {
    res.push('Pet friendly');
  }

  if (item.has_outdoor_seating) {
    res.push('Terrace');
  }

  if (item.has_vegan_menu) {
    res.push('Vegan menu');
  }

  return res;
};
