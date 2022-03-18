import HeaderImage from "./Header.style";

const Header = (): JSX.Element => {
  return (
    <HeaderImage>
      <img
        src="images/logo_small_blank.png"
        className="logo"
        alt="Pin Your Meetings logo"
      />
    </HeaderImage>
  );
};

export default Header;
