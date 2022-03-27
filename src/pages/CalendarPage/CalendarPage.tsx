import { format } from "date-fns/esm";
import { useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import getCalendarDays from "../../utils/getCalendarDays/getCalendarDays";

const CalendarPage = (): JSX.Element => {
  const [days, setDays] = useState<string[][]>(getCalendarDays());

  const [currentMonth, setCurrentMonth] = useState<number>(0);

  const [displayingMonth, setDisplayingMonth] = useState<string>(
    format(new Date(), "MMMM yyyy")
  );

  const previousMonth = () => {
    const newMonth = currentMonth - 1;
    setCurrentMonth(newMonth);
  };

  const nextMonth = () => {
    const newMonth = currentMonth + 1;
    setCurrentMonth(newMonth);
  };

  return (
    <>
      <Calendar
        days={days}
        setDays={setDays}
        currentMonth={currentMonth}
        displayingMonth={displayingMonth}
        setDisplayingMonth={setDisplayingMonth}
        previousMonthOnclick={previousMonth}
        nextMonthOnclick={nextMonth}
      />
    </>
  );
};

export default CalendarPage;
