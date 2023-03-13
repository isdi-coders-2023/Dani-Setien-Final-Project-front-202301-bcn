import styled from "styled-components";

const LogButtonStyled = styled.div`
  width: 100%;
  order: -1;

  .button {
    width: 100%;

    font-size: ${(props) => props.theme.fontSize.button};
    border-radius: ${(props) => props.theme.borderRadius.button};

    padding: 12px;

    margin-bottom: 20px;
    margin-top: 10px;
  }

  .log-out {
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.secondary};
  }

  .log-in {
    color: ${(props) => props.theme.colors.secondary};
    background-color: ${(props) => props.theme.colors.primary};

    border: 1px solid ${(props) => props.theme.colors.secondary};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.small}) {
    display: flex;
    align-items: center;

    order: 1;
    flex: 1;

    justify-content: flex-end;

    .button {
      width: 200px;
      margin: 0;
    }
  }
`;

export default LogButtonStyled;
