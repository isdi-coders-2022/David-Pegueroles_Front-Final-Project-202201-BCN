import styled from "styled-components";

const Nav = styled.nav`
  @media (max-width: ${(props) => props.theme.mediaQueries}) {
    position: fixed;
    bottom: 0;
  }

  .navigation {
    list-style: none;
    margin: 0;
    padding: 0;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    position: relative;

    width: 100vw;
    height: 75px;

    &::before {
      content: "";
      width: 100vw;
      height: 1px;

      position: absolute;
      top: 0;

      background-color: ${(props) => props.theme.palette.primary.main};
    }

    .navigation__item {
      margin: 0;
      padding: 0;

      height: 60px;
      width: 60px;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;

      transition: 0.5s ease;

      .navigation__icon {
        height: 40px;
        filter: ${(props) => props.theme.palette.icons.main};
      }

      .navigation__title {
        display: none;
      }

      &--selected {
        height: 60px;
        width: 60px;
        background-color: ${(props) => props.theme.palette.primary.main};

        transform: translateY(-35px);

        .navigation__icon {
          height: 35px;
          filter: ${(props) => props.theme.palette.icons.inverted};
        }
      }
    }
  }

  @media (min-width: ${(props) => props.theme.mediaQueries}) {
    position: fixed;
    left: 0;
    bottom: 0;

    .navigation {
      flex-direction: column;
      justify-content: flex-start;

      width: 150px;
      height: 85vh;
      background-color: ${(props) => props.theme.palette.primary.main};

      &::before {
        height: 100%;
        width: 1px;
        right: 0;
        background-color: ${(props) => props.theme.palette.secondary.main};
      }

      .navigation__item {
        height: 80px;
        width: 80px;

        margin-bottom: 50px;

        .navigation__icon {
          height: 50px;
          filter: ${(props) => props.theme.palette.icons.inverted};
        }

        &:hover,
        &--selected {
          height: 80px;
          width: 80px;

          position: relative;

          border: 2px solid;
          border-color: ${(props) => props.theme.palette.primary.main};
          border-radius: 50%;

          background-color: ${(props) => props.theme.palette.primary.alt};

          transform: translatex(75px);

          a {
            display: flex;
            flex-direction: row-reverse;
            justify-content: flex-start;
            align-items: center;

            position: absolute;
            right: 15px;

            .navigation__icon {
              height: 50px;
              filter: ${(props) => props.theme.palette.icons.main};
            }

            .navigation__title {
              display: block;
              color: white;
              font-weight: bold;
              text-align: right;

              &--small-text {
                margin-right: 40px;
                font-size: 14px;
              }

              &--medium-text {
                margin-right: 30px;
                font-size: 14px;
              }

              &--large-text {
                margin-right: 20px;
                font-size: 12px;
              }
            }
          }
        }

        &:hover {
          transform: translatex(60px);

          a {
            .navigation__title {
              &--medium-text {
                margin-right: 20px;
              }

              &--large-text {
                margin-right: 20px;
                font-size: 10px;
              }
            }
          }
        }
      }
    }
  }
`;

export default Nav;
