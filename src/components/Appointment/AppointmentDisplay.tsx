import { Appointment } from "../../types/Appointment";
import AppointmentInfo from "./AppointmentDisplay.style";

interface Props {
  appointment: Appointment;
}

const AppointmentDisplay = ({ appointment }: Props): JSX.Element => {
  return (
    <AppointmentInfo>
      <h3 className="title">{appointment.name}</h3>
      <img src="icons/edit.svg" className="edit" alt="Edit" />
      <img src="icons/trash.svg" className="delete" alt="Delete" />

      <ul className="information">
        <li className="information__element" title={appointment.date}>
          <img
            src="icons/schedule.svg"
            className="information__image"
            alt="Date"
          />
          <span className="information__text">{appointment.date}</span>
        </li>

        <li className="information__element" title={appointment.hour}>
          <img
            src="icons/clock.svg"
            className="information__image"
            alt="Hour"
          />
          <span className="information__text">{appointment.hour}</span>
        </li>

        <li className="information__element" title={appointment.description}>
          <img
            src="icons/clipboard.svg"
            className="information__image"
            alt="Description"
          />
          <span className="information__text">{appointment.description}</span>
        </li>

        <li className="information__element" title={appointment.location}>
          <img
            src="icons/map-marker.svg"
            className="information__image"
            alt="Location"
          />
          <span className="information__text">{appointment.location}</span>
        </li>
      </ul>
    </AppointmentInfo>
  );
};

export default AppointmentDisplay;
