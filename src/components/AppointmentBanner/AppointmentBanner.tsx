import { Appointment } from "../../types/Appointment";
import Card from "./AppointmentBanner.style";

interface Props {
  appointment: Appointment;
  actionOnClick: (id: string | undefined) => void;
}

const AppointmentBanner = ({
  appointment,
  actionOnClick,
}: Props): JSX.Element => {
  return (
    <Card className="appointment" onClick={() => actionOnClick(appointment.id)}>
      <li className="appointment__hour" title={appointment.hour}>
        {appointment.hour}
      </li>
      <li className="appointment__name" title={appointment.name}>
        {appointment.name}
      </li>
      <li className="appointment__edit">
        <img src="icons/edit.svg" alt="Edit" />
      </li>
    </Card>
  );
};

export default AppointmentBanner;
