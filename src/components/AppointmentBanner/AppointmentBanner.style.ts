import styled from "styled-components";
import "@fontsource/lexend-deca";

const Card = styled.ul`
  list-style: none;
  margin: 0;
  margin-left: 10vw;
  margin-bottom: 25px;
  padding: 0;

  width: 80vw;
  min-height: 80px;
  max-height: 80px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: ${(props) => props.theme.palette.primary.main};
  color: white;
  border-radius: 15px;

  font-family: "Lexend Deca";
  font-size: 20px;

  z-index: -1;

  .appointment__hour {
    position: relative;
    left: 5px;

    &::before {
      content: "";
      position: absolute;
      right: -15px;
      top: -17px;

      width: 2px;
      height: 60px;
      background-color: ${(props) => props.theme.palette.secondary.main};
    }
  }

  .appointment__name {
    position: relative;
    left: 10px;
    width: 40vw;
    max-height: 70px;

    overflow: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .appointment__edit {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
      content: "";
      position: absolute;

      width: 16vw;
      height: 80px;

      background-color: ${(props) => props.theme.palette.secondary.main};
      border-radius: 0 15px 15px 0;
    }

    img {
      width: 40px;
      height: 40px;
      filter: ${(props) => props.theme.palette.icons.inverted};
    }
  }
`;

export default Card;
