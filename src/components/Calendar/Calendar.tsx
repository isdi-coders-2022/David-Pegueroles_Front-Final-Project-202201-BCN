import { addMonths, format } from "date-fns";
import { useEffect } from "react";
import Button from "../../components/Button/Button";
import changeDateFormat from "../../utils/changeDateFormat/changeDateFormat";
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
  dayOnClick: any;
}

const Calendar = ({
  days,
  setDays,
  currentMonth,
  displayingMonth,
  setDisplayingMonth,
  nextMonthOnclick,
  previousMonthOnclick,
  dayOnClick,
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

    const receivedDay: string = date.split("-", 3)[2];
    const receivedDayNumber: number = parseInt(receivedDay);
    const currentDay: number = new Date().getDate();
    const thisMonth: string = (new Date().getMonth() + 1).toString();

    if (!date.split("-", 3)[1].endsWith(thisMonth)) {
      classAssignment = " day--anotherMonth";
    } else if (receivedDayNumber < currentDay) {
      classAssignment = " day--passed";
    } else if (receivedDayNumber === currentDay) {
      classAssignment = " day--current";
    } else {
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
              title={changeDateFormat(day, false)}
              key={day}
              className={`day${assignClassToDay(day)}`}
              onClick={() => dayOnClick(day)}
            >
              {day.split("-", 3)[2]}
            </li>
          ))}
        </Week>
      ))}
    </>
  );
};

export default Calendar;
