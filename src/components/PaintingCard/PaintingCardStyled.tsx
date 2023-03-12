import styled from "styled-components";

const PaintingCardStyled = styled.li`
  max-width: ${(props) => props.theme.cardPainting.width};

  white-space: nowrap;
  overflow: clip;

  margin-top: 35px;

  .image-container {
    display: flex;
    position: relative;

    &__image {
      object-fit: contain;
      object-position: bottom;

      width: ${(props) => props.theme.cardPainting.imageWidth};
      height: fit-content;
      z-index: -1;
    }

    .button {
      width: ${(props) => props.theme.cardPainting.buttonWidthAndHeigth};
      height: ${(props) => props.theme.cardPainting.buttonWidthAndHeigth};
      border-radius: 50%;
      background-color: ${(props) => props.theme.colors.primary};
    }

    .edit {
      position: absolute;
      top: ${(props) => props.theme.cardPainting.buttonDistanceToEdge};
      left: ${(props) => props.theme.cardPainting.buttonDistanceToEdge};
    }

    .delete {
      position: absolute;
      top: ${(props) => props.theme.cardPainting.buttonDistanceToEdge};
      right: ${(props) => props.theme.cardPainting.buttonDistanceToEdge};
    }
  }
  .information {
    background-color: ${(props) => props.theme.colors.primary};

    display: flex;
    flex-direction: column;
    overflow: clip;

    flex: 2;

    &__author {
      margin-top: ${(props) => props.theme.cardPainting.informationMarginTop};

      font-size: ${(props) => props.theme.cardPainting.fontSizeAuthor};
    }

    &__name-and-year {
      margin-top: ${(props) => props.theme.cardPainting.informationMarginTop};

      font-size: ${(props) => props.theme.cardPainting.fontSizeNameOfPainting};
    }

    &__price-and-bids {
      margin-top: ${(props) => props.theme.cardPainting.informationMarginTop};

      font-size: ${(props) => props.theme.cardPainting.fontSizePrice};
    }
  }

  .about {
    display: flex;
  }

  .favorites-icon  {
    align-self: center;
    flex: 1;

    font-size: ${(props) => props.theme.cardPainting.fontSizeFavoriteIcon};
    color: ${(props) => props.theme.colors.grayscale.darkest};
  }

  .button {
    color: ${(props) => props.theme.colors.grayscale.darkest};
    font-size: 25px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default PaintingCardStyled;
