export const normalizeWorkingTime = (time: string) =>
  time.split(':').slice(0, 2).join(':');
