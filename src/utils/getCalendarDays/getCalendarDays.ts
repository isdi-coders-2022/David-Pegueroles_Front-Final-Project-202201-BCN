import { format } from "date-fns";

const getCalendarDays = (
  month: number = new Date().getMonth(),
  year: number = new Date().getFullYear()
): string[][] => {
  const monthFirstDayPosition: number = new Date(year, month, 1).getDay();

  let calendarDay: number = 1 - monthFirstDayPosition;

  const calendarDays: string[][] = new Array(5).fill([]).map((): string[] => {
    return new Array(7).fill(null).map((): string => {
      calendarDay++;
      const day = format(new Date(year, month, calendarDay), "do-MM-yyyy");
      return day;
    });
  });

  return calendarDays;
};

export default getCalendarDays;
