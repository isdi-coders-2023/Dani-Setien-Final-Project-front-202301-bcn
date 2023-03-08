import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      grayscale: {
        lightest: string;
        ligther: string;
        gray: string;
        darker: string;
        darkest: string;
      };
    };
    fonts: {
      primary: string;
    };
  }
}
