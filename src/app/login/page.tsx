import LoginForm from "@/components/LoginForm/LoginForm";
import Image from "next/image";

const LoginPage = () => {
  return (
    <>
      <Image
        src={"/../public/img/brushbids-full-logo.webp"}
        alt="brushbids logo"
        width={200}
        height={200}
      ></Image>
      <LoginForm />
      <span>
        Do you want an account? <span>Register here.</span>
      </span>
    </>
  );
};

export default LoginPage;
