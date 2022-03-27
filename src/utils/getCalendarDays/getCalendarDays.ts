import { format, getWeeksInMonth } from "date-fns";

const getCalendarDays = (
  month: number = new Date().getMonth(),
  year: number = new Date().getFullYear()
): string[][] => {
  const date = new Date(year, month, 1);
  const monthFirstDayPosition: number = date.getDay();
  const numberOfWeeksToShow: number = getWeeksInMonth(date);

  let calendarDay: number = 1 - monthFirstDayPosition;

  const calendarDays: string[][] = new Array(numberOfWeeksToShow)
    .fill([])
    .map((): string[] => {
      return new Array(7).fill(null).map((): string => {
        calendarDay++;
        const day = format(new Date(year, month, calendarDay), "d-MM-yyyy");
        return day;
      });
    });

  return calendarDays;
};

export default getCalendarDays;
