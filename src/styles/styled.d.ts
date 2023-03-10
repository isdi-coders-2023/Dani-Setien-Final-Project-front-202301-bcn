import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      grayscale: {
        lightest: string;
        ligther: string;
        gray: string;
        dark: string;
        darker: string;
        darkest: string;
      };
      modalError: string;
    };
    fonts: {
      primary: string;
    };
    fontWeight: {
      primary: number;
    };
    fontSize: {
      medium: string;
      bigger: string;
      button: string;
      title: string;
    };
    margin: {
      page: string;
      titleBottom: string;
    };
    lineHeight: {
      title: string;
    };
    input: {
      fontSize: string;
      paddingBottom: string;
      marginTop: string;
      paddingTop: string;
      marginBottom: string;
      paddingLeft: string;
    };
    label: {
      marginTop: string;
      paddingBottom: string;
    };
    borderRadius: {
      button: string;
    };
    form: {
      width: string;
    };
    breakpoint: {
      smallest: string;
      small: string;
      medium: string;
      large: string;
      largest: string;
    };
    cardPainting: {
      width: string;
      buttonWidthAndHeigth: string;
      buttonDistanceToEdge: string;
      informationMarginTop: string;
      fontSizeAuthor: string;
      fontSizeNameOfPainting: string;
      fontSizePrice: string;
      fontSizeFavoriteIcon: string;
      imageWidth: string;
    };
  }
}
