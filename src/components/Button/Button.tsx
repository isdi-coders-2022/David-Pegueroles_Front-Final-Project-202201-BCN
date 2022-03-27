interface Props {
  className: string;
  text: string | JSX.Element;
  actionOnClick: () => void;
}

const Button = ({ className, text, actionOnClick }: Props): JSX.Element => {
  return (
    <button className={className} onClick={() => actionOnClick()}>
      {text}
    </button>
  );
};

export default Button;
