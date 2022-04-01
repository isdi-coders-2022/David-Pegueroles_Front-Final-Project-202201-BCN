import styled from "styled-components";

export const Heading = styled.h2`
  font-family: "Lexend Deca";
  font-size: 48px;
  font-weight: normal;
  color: ${(props) => props.theme.palette.primary.main};

  margin-top: 130px;
  margin-bottom: 30px;

  justify-self: center;
  align-self: center;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-left: 5vw;

  font-family: "IBM Plex Sans";

  .form__label {
    margin-bottom: 5px;
    font-size: 24px;
  }

  .form__input {
    width: 80vw;
    height: 60px;

    margin-bottom: 15px;
    padding: 0 20px;
    font-size: 24px;

    border: 1px solid;
    border-color: ${(props) => props.theme.palette.secondary.main};
    border-radius: 10px;
  }

  .form__description {
    height: 200px;
    font-family: "IBM Plex Sans";
    padding-top: 10px;
  }

  .form__submit {
    color: white;
    background-color: ${(props) => props.theme.palette.primary.main};

    width: 80vw;
    height: 60px;

    margin-top: 15px;
    margin-left: 4vw;

    border: none;
    border-radius: 10px;

    font-family: "Lexend Deca";
    font-size: 30px;

    transition: 0.5s ease;

    &:disabled {
      visibility: hidden;
      opacity: 0;
    }
  }
`;
