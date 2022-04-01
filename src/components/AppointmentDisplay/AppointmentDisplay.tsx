import { Appointment } from "../../types/Appointment";
import changeDateFormat from "../../utils/changeDateFormat/changeDateFormat";
import AppointmentInfo from "./AppointmentDisplay.style";

interface Props {
  appointment: Appointment;
  deleteOnClick: (id: string | undefined) => void;
}

const AppointmentDisplay = ({
  appointment,
  deleteOnClick,
}: Props): JSX.Element => {
  return (
    <AppointmentInfo>
      <h3 className="title">{appointment.name}</h3>

      <div className="separator"></div>

      <ul className="information">
        <li className="information__element" title={appointment.date}>
          <img
            src="/icons/schedule.svg"
            className="information__image"
            alt="Date"
          />
          <span className="information__text">
            {appointment.date && changeDateFormat(appointment.date, false)}
          </span>
        </li>

        <li className="information__element" title={appointment.hour}>
          <img
            src="/icons/clock.svg"
            className="information__image"
            alt="Hour"
          />
          <span className="information__text">{appointment.hour}</span>
        </li>

        <li className="information__element" title={appointment.description}>
          <img
            src="/icons/clipboard.svg"
            className="information__image"
            alt="Description"
          />
          <span className="information__text">{appointment.description}</span>
        </li>

        <li className="information__element" title={appointment.location}>
          <img
            src="/icons/map-marker.svg"
            className="information__image"
            alt="Location"
          />
          <span className="information__text">{appointment.location}</span>
        </li>
      </ul>

      <section className="map">
        <iframe
          title="Map"
          width={370}
          height={200}
          frameBorder="0"
          style={{ border: 0, borderRadius: 13 }}
          src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyAK5boJsMKK7FDamPHx_p-dugiERdMRiG8&q=${appointment.location}&zoom=15`}
          allowFullScreen
        ></iframe>
      </section>

      <ul className="dispatch-buttons">
        <li title="Edit">
          <img
            src="/icons/edit.svg"
            className="dispatch-buttons__edit"
            alt="Edit icon"
          />
        </li>
        <li onClick={() => deleteOnClick(appointment.id)} title="Delete">
          <img
            src="/icons/trash.svg"
            className="dispatch-buttons__delete"
            alt="Delete icon"
          />
        </li>
      </ul>
    </AppointmentInfo>
  );
};

export default AppointmentDisplay;
