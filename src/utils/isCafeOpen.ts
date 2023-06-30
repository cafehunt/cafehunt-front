export const isCafeOpen = (start_time: string, end_time: string) => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();

  const startHour = parseInt(start_time.split(':')[0]);
  const startMinutes = parseInt(start_time.split(':')[1]);
  const endHour = parseInt(end_time.split(':')[0]);
  const endMinutes = parseInt(end_time.split(':')[1]);

  if (endHour < startHour) {
    // The working hours span across midnight
    if (
      currentHour > startHour ||
      (currentHour === startHour && currentMinutes >= startMinutes) ||
      currentHour < endHour ||
      (currentHour === endHour && currentMinutes < endMinutes)
    ) {
      return true;
    }

    return false;
  } else {
    // The working hours do not span across midnight
    if (
      (currentHour > startHour ||
        (currentHour === startHour && currentMinutes >= startMinutes)) &&
      (currentHour < endHour ||
        (currentHour === endHour && currentMinutes < endMinutes))
    ) {
      return true;
    }

    return false;
  }
};
