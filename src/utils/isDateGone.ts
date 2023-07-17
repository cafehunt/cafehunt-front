export const isDateGone = (dateString: string) => {
  const passedDate = new Date(dateString);

  // Get the current date and time
  const currentDate = new Date();

  // Compare the passed date with the current date
  if (passedDate < currentDate) {
    return true;
  } else {
    return false;
  }
};
