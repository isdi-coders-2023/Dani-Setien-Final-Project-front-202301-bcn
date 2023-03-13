import styled from "styled-components";

const PaintingsListStyled = styled.section`
  .paintings {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    width: auto;

    margin-left: -30px;

    &__column {
      background-clip: padding-box;

      padding-left: 30px;
      margin-bottom: 30px;
    }
  }
`;

export default PaintingsListStyled;
