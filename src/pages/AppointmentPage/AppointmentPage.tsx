import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AppointmentDisplay from "../../components/AppointmentDisplay/AppointmentDisplay";
import { navigationPositionAction } from "../../redux/actions/actionsCreators";
import { RootState } from "../../redux/store";
import {
  deleteAppointmentThunk,
  loadAppointmentInfoThunk,
} from "../../redux/thunks/appointmentsThunks";
import { Appointment } from "../../types/Appointment";
import Heading from "./AppointmentPage.style";

const AppointmentPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const appointmentInfo: Appointment = useSelector(
    (state: RootState) => state.appointmentInfo
  );

  const deleteOnClick = async (id: string | undefined) => {
    await dispatch(deleteAppointmentThunk(id));
    navigate("/calendar");
  };

  useEffect(() => {
    const thisAppointmentId = window.location.pathname.split("/", 4);
    dispatch(navigationPositionAction(1));
    dispatch(loadAppointmentInfoThunk(thisAppointmentId[3]));
  }, [dispatch]);

  return (
    <>
      <Heading>Appointment</Heading>

      <AppointmentDisplay
        appointment={appointmentInfo}
        deleteOnClick={deleteOnClick}
      />
    </>
  );
};
export default AppointmentPage;
