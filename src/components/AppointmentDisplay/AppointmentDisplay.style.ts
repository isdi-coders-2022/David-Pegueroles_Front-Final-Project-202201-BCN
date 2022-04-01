import styled from "styled-components";

const AppointmentInfo = styled.section`
  font-family: "IBM Plex Sans";

  position: relative;
  margin: 0 20px;

  .title {
    font-size: 27px;

    margin-left: 10px;
    margin-bottom: 5px;
  }

  .separator {
    left: 0;

    width: 90vw;
    height: 2px;
    background-color: ${(props) => props.theme.palette.primary.main};
    margin-bottom: 30px;
  }

  img {
    width: 40px;
    height: 40px;
  }

  .dispatch-buttons {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 80vw;
    margin: 0;
    margin-bottom: 120px;
    margin-left: 20px;
    padding: 0;

    list-style: none;

    li {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 40vw;
      height: 50px;
      border: 1px solid black;

      .dispatch-buttons__edit,
      .dispatch-buttons__delete {
      }
    }
  }

  .map {
    margin-bottom: 20px;
  }

  .information {
    list-style: none;

    font-size: 20px;

    margin: 0;
    margin-left: 20px;
    margin-right: 30px;
    padding: 0;

    .information__element {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      margin-bottom: 40px;

      .information__image {
        margin-right: 20px;
      }

      .information__text {
      }
    }
  }
`;

export default AppointmentInfo;
