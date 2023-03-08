import styled from "styled-components";

const LoginPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  margin: 20px;

  .logo {
    align-self: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .login-page {
    &__title {
      font-size: 30px;
      margin-bottom: 20px;
    }
    &__register-text {
      margin-top: 30px;
      align-self: center;

      color: #707070;

      padding-top: 10px;
    }
  }
`;

export default LoginPageStyled;
