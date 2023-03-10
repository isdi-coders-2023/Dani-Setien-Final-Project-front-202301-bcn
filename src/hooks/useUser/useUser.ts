import decodeToken from "jwt-decode";
import fetch from "node-fetch";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { User, UserCredentials } from "../../types/types";
import { BackLoginResponse, TokenPayload } from "./types";

interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();

  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL!;
  const loginEndpoint = "user/login/";

  const loginUser = async (userCredentials: UserCredentials) => {
    const backResponse = await fetch(`${apiUrl}${loginEndpoint}`, {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: { "Content-Type": "application/json" },
    });

    const { token } = (await backResponse.json()) as BackLoginResponse;

    const tokenPayload: TokenPayload = decodeToken(token);
    const { id, username } = tokenPayload;

    const user: User = {
      id,
      username,
      token,
    };

    dispatch(loginUserActionCreator(user));

    localStorage.setItem("token", token);
  };

  return { loginUser };
};

export default useUser;
