import { addMonths, format } from "date-fns";
import { useEffect } from "react";
import Button from "../../components/Button/Button";
import getCalendarDays from "../../utils/getCalendarDays/getCalendarDays";
import { CalendarNavigation, Week, WeekDays } from "./Calendar.style";

interface Props {
  days: string[][];
  setDays: React.Dispatch<React.SetStateAction<string[][]>>;

  currentMonth: number;

  displayingMonth: string;
  setDisplayingMonth: React.Dispatch<React.SetStateAction<string>>;

  nextMonthOnclick: () => void;
  previousMonthOnclick: () => void;
}

const Calendar = ({
  days,
  setDays,
  currentMonth,
  displayingMonth,
  setDisplayingMonth,
  nextMonthOnclick,
  previousMonthOnclick,
}: Props) => {
  const weekDays: string[] = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  useEffect(() => {
    if (currentMonth === 0) {
      setDays(getCalendarDays());
    } else {
      const monthToSet = new Date().getMonth();
      setDays(getCalendarDays(monthToSet + currentMonth));
    }

    setDisplayingMonth(
      format(addMonths(new Date(), currentMonth), "MMMM yyyy")
    );
  }, [currentMonth, setDays, setDisplayingMonth]);

  const assignClassToDay = (date: string): string => {
    let classAssignment: string = "";

    const receivedDay: string[] = date.split("-", 1);
    const receivedDayNumber: number = parseInt(receivedDay[0]);
    const currentDay: number = new Date().getDate();
    const currentMonth: string = (new Date().getMonth() + 1).toString();

    if (!date.split("-", 2)[1].endsWith(currentMonth)) {
      classAssignment = " day--anotherMonth";
    } else if (receivedDayNumber < currentDay) {
      classAssignment = " day--passed";
    } else if (receivedDayNumber === currentDay) {
      classAssignment = " day--current";
    } else if (receivedDayNumber > currentDay) {
      classAssignment = " day--coming";
    }

    return classAssignment;
  };

  return (
    <>
      <CalendarNavigation className="month-navigation">
        <Button
          className="month-navigation__previous-month"
          text={<img src="icons/arrow.svg" alt="Previous Month Button" />}
          actionOnClick={previousMonthOnclick}
        />
        <h2 className="month-navigation__title">{displayingMonth}</h2>
        <Button
          className="month-navigation__next-month"
          text={<img src="icons/arrow.svg" alt="Next Month Button" />}
          actionOnClick={nextMonthOnclick}
        />
      </CalendarNavigation>

      <WeekDays>
        {weekDays.map((weekDay) => (
          <li title={weekDay} className="weekDay" key={weekDay}>
            {weekDay}
          </li>
        ))}
      </WeekDays>

      {days.map((week, index) => (
        <Week key={index} className="week">
          {week.map((day) => (
            <li
              title={day.split("-", 1)[0]}
              key={day}
              className={`day${assignClassToDay(day)}`}
            >
              {day.split("-", 1)}
            </li>
          ))}
        </Week>
      ))}
    </>
  );
};

export default Calendar;
