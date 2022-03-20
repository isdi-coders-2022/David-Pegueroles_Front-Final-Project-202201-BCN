const getCalendarDays = (month: number = new Date().getMonth()): Date[][] => {
  const currentDate: Date = new Date();

  const year: number = currentDate.getFullYear();

  const monthFirstDayPosition: number = new Date(year, month, 1).getDay();

  let calendarDay: number = 1 - monthFirstDayPosition;

  const calendarDays: Date[][] = new Array(5).fill([]).map((): Date[] => {
    return new Array(7).fill(null).map((): Date => {
      calendarDay++;

      return new Date(year, month, calendarDay);
    });
  });

  return calendarDays;
};

export default getCalendarDays;
