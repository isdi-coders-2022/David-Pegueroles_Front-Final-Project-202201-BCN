import changeDateFormat from "../../utils/changeDateFormat/changeDateFormat";
import Title from "./SelectedDay.style";

interface Props {
  date: string;
}

const SelectedDay = ({ date }: Props): JSX.Element => {
  return <Title>{changeDateFormat(date, false)} appointments</Title>;
};

export default SelectedDay;
