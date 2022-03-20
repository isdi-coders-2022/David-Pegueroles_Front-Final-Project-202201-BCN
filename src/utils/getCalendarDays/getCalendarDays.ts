const getCalendarDays = (
  month: number = new Date().getMonth(),
  year: number = new Date().getFullYear()
): string[][] => {
  const monthFirstDayPosition: number = new Date(year, month, 1).getDay();

  let calendarDay: number = 1 - (monthFirstDayPosition - 1);

  const calendarDays: string[][] = new Array(5).fill([]).map((): string[] => {
    return new Array(7).fill(null).map((): string => {
      calendarDay++;
      const day = new Date(year, month, calendarDay);
      return day.toISOString();
    });
  });

  return calendarDays;
};

export default getCalendarDays;
