import decodeToken from "jwt-decode";
import { useRouter } from "next/router";
import fetch from "node-fetch";
import displayErrorModal from "../../components/LoginForm/modals/errorModal";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";
import {
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/userUi/uiSlice";
import { useAppDispatch } from "../../store/hooks";
import { User, UserCredentials } from "../../types/userTypes";
import routeUtils from "../../utils/routeUtils/routeUtils";
import { BackLoginResponse, TokenPayload } from "./types";

interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();

  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL!;
  const loginEndpoint = "user/login/";

  const router = useRouter();

  const loginUser = async (userCredentials: UserCredentials) => {
    dispatch(setIsLoadingActionCreator());

    try {
      const backResponse = await fetch(`${apiUrl}${loginEndpoint}`, {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: { "Content-Type": "application/json" },
      });

      if (!backResponse.ok) {
        const rejectedCredentialsMessage = "Invalid user credentials";

        throw new Error(rejectedCredentialsMessage);
      }

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

      dispatch(unsetIsLoadingActionCreator());

      router.push(routeUtils.homePage);
    } catch (error: unknown) {
      dispatch(unsetIsLoadingActionCreator());

      displayErrorModal((error as Error).message);
    }
  };

  return { loginUser };
};

export default useUser;
