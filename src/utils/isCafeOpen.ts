export const isCafeOpen = (start_time: string, end_time: string) => {
  const now = new Date();
  const currentHour = now.getHours();
  const startHour = parseInt(start_time.split(':')[0]);
  const endHour = parseInt(end_time.split(':')[0]);

  if (
    (currentHour > startHour || currentHour === startHour) &&
    currentHour < endHour
  ) {
    return true;
  }

  return false;
};
