import { Appointment } from "../../types/Appointment";
import Card from "./AppointmentBanner.style";

interface Props {
  appointment: Appointment;
}

const AppointmentBanner = ({ appointment }: Props): JSX.Element => {
  return (
    <Card className="appointment">
      <li className="appointment__hour">{appointment.hour}</li>
      <li className="appointment__name">{appointment.name}</li>
      <li className="appointment__edit">
        <img src="icons/edit.svg" alt="Edit" />
      </li>
    </Card>
  );
};

export default AppointmentBanner;
