import styled from "styled-components";

const Heading = styled.h2`
  color: ${(props) => props.theme.palette.primary.main};

  font-family: "IBM Plex Sans";
  font-size: 40px;

  margin: 0;
  margin-bottom: 30px;
  padding: 0;

  width: 100vw;
  text-align: center;
`;

export default Heading;
