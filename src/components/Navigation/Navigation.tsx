import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import Nav from "./Navigation.style";

const Navigation = (): JSX.Element => {
  const navigationPosition: number = useSelector(
    (state: RootState) => state.navigationPosition
  );

  const isSelected = (number: number) => {
    if (navigationPosition === number) {
      return " navigation__item--selected";
    }
    return "";
  };

  return (
    <Nav>
      <ul className="navigation">
        <li className={`navigation__item${isSelected(0)}`}>
          <Link to="/users">
            <img
              src="/icons/user.svg"
              className="navigation__icon"
              alt="User"
            />
            <span className="navigation__title navigation__title--small-text">
              USER
            </span>
          </Link>
        </li>
        <li className={`navigation__item${isSelected(1)}`}>
          <Link to="/calendar">
            <img
              src="/icons/schedule.svg"
              className="navigation__icon"
              alt="Calendar"
            />
            <span className="navigation__title navigation__title--medium-text">
              CALENDAR
            </span>
          </Link>
        </li>
        <li className={`navigation__item${isSelected(2)}`}>
          <Link to="/map">
            <img
              src="/icons/map-marker.svg"
              className="navigation__icon"
              alt="Map"
            />
            <span className="navigation__title navigation__title--small-text">
              MAP
            </span>
          </Link>
        </li>
        <li className={`navigation__item${isSelected(3)}`}>
          <Link to="/calendar/appointment/new">
            <img
              src="/icons/plus.svg"
              className="navigation__icon"
              alt="Appointment"
            />
            <span className="navigation__title navigation__title--large-text">
              APPOINTMENT
            </span>
          </Link>
        </li>
      </ul>
    </Nav>
  );
};

export default Navigation;
