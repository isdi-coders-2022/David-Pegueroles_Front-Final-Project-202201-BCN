import styled from "styled-components";

const AppointmentInfo = styled.section`
  font-family: "IBM Plex Sans";

  margin: 0 20px;

  .title {
    font-size: 25px;
  }

  .edit,
  .delete {
    width: 20px;
    height: 20px;
  }

  .information {
    list-style: none;
    margin: 0;
    padding: 0;

    .information__element {
      .information__image {
      }

      .information__text {
      }
    }
  }
`;

export default AppointmentInfo;
