import changeDateFormat from "../../utils/changeDateFormat/changeDateFormat";
import Title from "./SelectedDay.style";

interface Props {
  date: string;
  isThereAnAppointment: boolean;
}

const SelectedDay = ({ date, isThereAnAppointment }: Props): JSX.Element => {
  if (isThereAnAppointment) {
    return <Title>{changeDateFormat(date, false)} appointments</Title>;
  }
  return (
    <Title>
      There's no appointments for {changeDateFormat(date, false)} yet
    </Title>
  );
};

export default SelectedDay;
