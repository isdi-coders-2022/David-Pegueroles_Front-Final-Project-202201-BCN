import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppointmentBanner from "../../components/AppointmentBanner/AppointmentBanner";
import Calendar from "../../components/Calendar/Calendar";
import SelectedDay from "../../components/SelectedDay/SelectedDay";
import { navigationPositionAction } from "../../redux/actions/actionsCreators";
import { RootState } from "../../redux/store";
import { loadDailyAppointmentsThunk } from "../../redux/thunks/appointmentsThunks";
import { Appointment } from "../../types/Appointment";
import getCalendarDays from "../../utils/getCalendarDays/getCalendarDays";

const CalendarPage = (): JSX.Element => {
  const [days, setDays] = useState<string[][]>(getCalendarDays());

  const [currentMonth, setCurrentMonth] = useState<number>(0);

  const [selectedDay, setSelectedDay] = useState<string>(
    format(new Date(), "yyyy-MM-d")
  );

  const changeSelectedDay = (date: string) => {
    setSelectedDay(date);
  };

  const [displayingMonth, setDisplayingMonth] = useState<string>(
    format(new Date(), "MMMM yyyy")
  );

  const previousMonth = () => {
    const newMonth: number = currentMonth - 1;
    setCurrentMonth(newMonth);
  };

  const nextMonth = () => {
    const newMonth: number = currentMonth + 1;
    setCurrentMonth(newMonth);
  };

  const dispatch = useDispatch();

  const dailyAppointmentsList: Appointment[] = useSelector(
    (state: RootState) => state.dailyAppointments
  );

  const sortedAppointmentsList: Appointment[] = dailyAppointmentsList.sort(
    (a, b) =>
      parseInt(a.hour.split(":")[0] + a.hour.split(":")[1]) -
      parseInt(b.hour.split(":")[0] + b.hour.split(":")[1])
  );

  useEffect(() => {
    dispatch(navigationPositionAction(1));
    dispatch(loadDailyAppointmentsThunk(selectedDay));
  }, [dispatch, selectedDay]);

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
        dayOnClick={changeSelectedDay}
        selectedDay={selectedDay}
      />

      {sortedAppointmentsList.length === 0 ? (
        <SelectedDay date={selectedDay} isThereAnAppointment={false} />
      ) : (
        <SelectedDay date={selectedDay} isThereAnAppointment={true} />
      )}

      {sortedAppointmentsList.length !== 0 &&
        sortedAppointmentsList.map((appointment) => (
          <AppointmentBanner key={appointment.id} appointment={appointment} />
        ))}
    </>
  );
};

export default CalendarPage;
