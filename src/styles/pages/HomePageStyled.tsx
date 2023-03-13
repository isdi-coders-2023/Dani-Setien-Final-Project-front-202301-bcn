import styled from "styled-components";

const HomePageStyled = styled.div`
  .section-title {
    font-size: 24px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.smallest}) {
    .section-title {
      font-size: 22px;
    }
  }
`;

export default HomePageStyled;
