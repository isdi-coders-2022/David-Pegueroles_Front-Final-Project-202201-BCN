import styled from "styled-components";
import "@fontsource/ibm-plex-sans";

export const CalendarNavigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 10px;

  font-family: "IBM Plex Sans";

  .month-navigation {
    &__previous-month,
    &__next-month {
      margin: 5px;

      background: none;
      border: none;

      img {
        width: 30px;
        height: 30px;

        filter: ${(props) => props.theme.palette.calendar.navigation};
      }
    }

    &__previous-month {
      transform: rotateZ(-90deg);
    }

    &__next-month {
      transform: rotateZ(90deg);
    }

    &__title {
      text-align: center;
      font-size: 25px;
      width: 200px;
    }
  }
`;

export const WeekDays = styled.ul`
  list-style: none;
  margin: 0;
  margin-bottom: 20px;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  .weekDay {
    width: 14vw;
    text-align: center;

    font-family: "IBM Plex Sans";
    font-size: 15px;
    font-weight: bold;
  }
`;

export const Week = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "IBM Plex Sans";
  font-size: 20px;

  .day {
    width: 14vw;
    height: 70px;

    text-align: center;

    position: relative;

    cursor: pointer;
  }

  .day--anotherMonth {
    color: ${(props) => props.theme.palette.calendar.day.anotherMonth};
  }

  .day--passed {
    color: ${(props) => props.theme.palette.calendar.day.passed};
  }

  .day--current {
    color: ${(props) => props.theme.palette.calendar.day.current};
    display: flex;
    justify-content: center;
    align-items: flex-start;

    &::before {
      content: "";
      width: 45px;
      height: 45px;

      background-color: ${(props) => props.theme.palette.primary.main};

      border: 1px solid;
      border-color: ${(props) => props.theme.palette.calendar.day.passed};
      border-radius: 50%;

      position: absolute;
      top: -10px;

      z-index: -1;
    }
  }

  .day--coming {
    color: ${(props) => props.theme.palette.calendar.day.coming};
  }

  .selected {
    transition: 1s ease;
    &::after {
      content: "";
      width: 44px;
      height: 44px;

      border: 2px solid;
      border-color: ${(props) => props.theme.palette.calendar.day.appointment};
      border-radius: 50%;

      position: absolute;
      left: 5px;
      top: -10px;
    }
  }
`;
