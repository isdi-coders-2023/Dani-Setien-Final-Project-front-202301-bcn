"use client";

import LoginForm from "../../components/LoginForm/LoginForm";
import Image from "next/image";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = () => {
  return (
    <LoginPageStyled className="login-page">
      <Image
        src={"/../public/img/brushbids-full-logo.webp"}
        alt="brushbids logo"
        width={200}
        height={200}
        priority
        className="logo"
      ></Image>
      <h2 className="login-page__title">
        {`Log in to collect art by the world's leading artists`}
      </h2>
      <LoginForm />
      <span className="login-page__register-text">
        Do you want an account? <span>Register here.</span>
      </span>
    </LoginPageStyled>
  );
};

export default LoginPage;
