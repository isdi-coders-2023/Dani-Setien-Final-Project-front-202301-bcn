import styled from "styled-components";

const HeaderStyled = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  font-size: ${(props) => props.theme.fontSize.title};

  border-bottom: 1px solid ${(props) => props.theme.colors.grayscale.gray};

  justify-content: space-between;

  margin-bottom: 30px;
  padding-top: 10px;
  padding-bottom: 20px;

  .button-container {
    width: 100%;
    order: -1;
  }

  .logout-button {
    width: 100%;
    padding: 12px;

    margin-bottom: 20px;
    margin-top: 10px;

    background-color: ${(props) => props.theme.colors.secondary};

    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.fontSize.button};

    border-radius: ${(props) => props.theme.borderRadius.button};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.small}) {
    .navigation-link {
      margin-left: 30px;
    }

    .button-container {
      display: flex;
      align-items: center;

      order: 1;
      flex: 1;

      justify-content: flex-end;
    }

    .logout-button {
      width: 200px;
      margin: 0;
    }
  }
`;

export default HeaderStyled;
