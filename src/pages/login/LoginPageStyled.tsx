import styled from "styled-components";

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100;
  align-content: center;

  margin: ${(props) => props.theme.margin.page};

  .logo {
    align-self: center;

    margin-top: 10px;
    margin-bottom: 10px;
  }

  .login-page {
    &__title {
      font-size: ${(props) => props.theme.fontSize.title};
      line-height: ${(props) => props.theme.lineHeight.title};

      margin-bottom: ${(props) => props.theme.margin.titleBottom};

      width: ${(props) => props.theme.form.width};
    }
    &__register-text {
      align-self: center;

      font-weight: ${(props) => props.theme.fontWeight.primary};
      color: ${(props) => props.theme.colors.grayscale.darker};

      margin-top: 40px;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoint.small}) {
    width: ${(props) => props.theme.form.width};
  }
`;

export default LoginPageStyled;
