import decodeToken from "jwt-decode";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { User, UserCredentials } from "../../types/types";
import { backLoginResponse, TokenPayload } from "./types";

interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();

  const apiUrl = process.env.REACT_APP_URL_API!;
  const loginEndpoint = "/user/login/";

  const loginUser = async (userCredentials: UserCredentials) => {
    const response = await fetch(`${apiUrl}${loginEndpoint}`, {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: { "Content-Type": "application/json" },
    });

    const { token } = (await response.json()) as backLoginResponse;

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
