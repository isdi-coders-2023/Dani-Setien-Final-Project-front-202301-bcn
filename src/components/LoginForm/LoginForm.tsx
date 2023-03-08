import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  return (
    <LoginFormStyled action="/send-data-here" method="post">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email address"
        autoComplete="off"
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        required
        minLength={8}
        maxLength={32}
      />
      <button type="submit" className="form__button">
        Log in
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
