import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
  margin: 0;

  input {
    margin-top: 8px;
    border-bottom: 1px solid gray;
    padding-bottom: 5px;

    ::placeholder {
      padding-left: 15px;
      font-size: 18px;
    }
  }

  label {
    font-size: 20px;

    margin-top: 8px;
    font-weight: 900;
  }

  .form {
    &__button {
      width: 100%;
      background-color: #c2c2c2;

      color: #fff;
      font-size: 24px;

      padding: 12px;
      border-radius: 25px;
      margin-top: 50px;
    }
  }
`;

export default LoginFormStyled;

console.log("colores tema");
