import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppointmentDisplay from "../../components/AppointmentDisplay/AppointmentDisplay";
import { navigationPositionAction } from "../../redux/actions/actionsCreators";
import { RootState } from "../../redux/store";
import { loadAppointmentInfoThunk } from "../../redux/thunks/appointmentsThunks";
import { Appointment } from "../../types/Appointment";
import Heading from "./AppointmentPage.style";

const AppointmentPage = (): JSX.Element => {
  const dispatch = useDispatch();

  const appointmentInfo: Appointment = useSelector(
    (state: RootState) => state.appointmentInfo
  );

  useEffect(() => {
    const thisAppointmentId = window.location.pathname.split("/", 4);
    dispatch(navigationPositionAction(1));
    dispatch(loadAppointmentInfoThunk(thisAppointmentId[3]));
  }, [dispatch]);

  return (
    <>
      <Heading>Appointment</Heading>

      <AppointmentDisplay appointment={appointmentInfo} />
    </>
  );
};
export default AppointmentPage;
