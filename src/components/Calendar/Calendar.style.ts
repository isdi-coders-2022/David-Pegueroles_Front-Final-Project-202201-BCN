import styled from "styled-components";

export const CalendarNavigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 10px;

  .month-navigation {
    &__previous-month,
    &__next-month {
      margin: 5px;

      background: none;
      border: none;

      img {
        width: 25px;
        height: 25px;

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
      font-size: 20px;
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

    font-size: 14px;
  }
`;

export const Week = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  .day {
    width: 14vw;
    height: 70px;

    text-align: center;

    position: relative;
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
      width: 40px;
      height: 40px;

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
`;
