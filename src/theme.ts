import { Theme } from "styled-components";
export const theme: Theme = {
  mediaQueries: "750px",
  borderRadius: "4px",
  palette: {
    common: {
      black: "#222831",
      white: "#ffffff",
    },
    primary: {
      main: "#1F4920",
      alt: "#fff",
    },
    secondary: {
      main: "#1EB76A",
      alt: "#fff",
    },
    icons: {
      main: "invert(23%) sepia(22%) saturate(1239%) hue-rotate(72deg) brightness(92%) contrast(92%)",
      secondary:
        "invert(32%) sepia(14%) saturate(1804%) hue-rotate(73deg) brightness(96%) contrast(92%)",
      inverted:
        "invert(100%) sepia(0%) saturate(7488%) hue-rotate(170deg) brightness(121%) contrast(98%)",
    },
    calendar: {
      navigation:
        "invert(82%) sepia(6%) saturate(1960%) hue-rotate(72deg) brightness(89%) contrast(82%)",

      day: {
        anotherMonth: "#aaaaaa",
        passed: "#a9d3ab",
        current: "#fff",
        coming: "#3d7a40",
        appointment: "#00ca05",
      },
    },
  },
};
