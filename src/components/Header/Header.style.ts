import styled from "styled-components";

const HeaderImage = styled.header`
  position: fixed;
  top: 0;

  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.palette.primary.main};

  z-index: 10;

  &::before {
    content: "";
    width: 100vw;
    height: 1px;

    position: absolute;
    bottom: 0;

    background-color: ${(props) => props.theme.palette.primary.main};
  }

  h1 {
    margin-top: 10px;
    margin-bottom: 5px;

    .logo {
      height: 80px;
      margin: auto;
    }
  }

  @media (min-width: ${(props) => props.theme.mediaQueries}) {
    left: 0;
    width: 150px;
    height: 15vh;

    z-index: 10;

    &::before {
      height: 100%;
      width: 1px;
      right: 0;
      background-color: ${(props) => props.theme.palette.secondary.main};
    }

    h1 {
      margin: 0;
      margin-right: 7px;

      .logo {
        height: auto;
        width: 143px;
      }
    }
  }
`;

export default HeaderImage;
