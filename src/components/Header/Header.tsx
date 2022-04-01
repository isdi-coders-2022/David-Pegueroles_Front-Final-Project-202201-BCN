import HeaderImage from "./Header.style";

const Header = (): JSX.Element => {
  return (
    <HeaderImage>
      <h1>
        <img
          src="/images/logo_small_blank.png"
          className="logo"
          alt="Pin Your Meetings logo"
        />
      </h1>
    </HeaderImage>
  );
};

export default Header;
