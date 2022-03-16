import "styled-components";
interface Colors {
  main: string;
  alt: string;
}
interface IconsColors {
  main: string;
  secondary: string;
  inverted: string;
}

declare module "styled-components" {
  export interface Theme {
    mediaQueries: string;
    borderRadius: string;
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: Colors;
      secondary: Colors;
      icons: IconsColors;
    };
  }
}
