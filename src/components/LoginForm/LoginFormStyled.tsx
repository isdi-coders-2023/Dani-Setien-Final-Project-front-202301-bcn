import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;

  input {
    font-size: ${(props) => props.theme.input.fontSize};

    border-bottom: 1px solid ${(props) => props.theme.colors.grayscale.dark};

    padding-bottom: ${(props) => props.theme.input.paddingBottom};
    padding-top: ${(props) => props.theme.input.paddingTop};
    padding-left: ${(props) => props.theme.input.paddingLeft};

    margin-top: ${(props) => props.theme.input.marginTop};
    margin-bottom: ${(props) => props.theme.input.marginBottom};

    ::placeholder {
      font-size: ${(props) => props.theme.fontSize.medium};
    }
  }

  label {
    font-size: ${(props) => props.theme.fontSize.bigger};

    margin-top: ${(props) => props.theme.label.marginTop};
    padding-bottom: ${(props) => props.theme.label.paddingBottom};
  }

  .form {
    &__button {
      width: 100%;
      background-color: ${(props) => props.theme.colors.grayscale.dark};

      color: ${(props) => props.theme.colors.primary};
      font-size: ${(props) => props.theme.fontSize.button};

      border-radius: ${(props) => props.theme.borderRadius.button};

      padding: 12px;
      margin-top: 35px;
    }
  }
`;

export default LoginFormStyled;
