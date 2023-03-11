import decodeToken from "jwt-decode";
import { useCallback } from "react";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { TokenPayload } from "../useUser/types";

interface UseTokenStructure {
  fetchToken: () => void;
}

const useToken = (): UseTokenStructure => {
  const dispatch = useAppDispatch();

  const fetchToken = useCallback(() => {
    const userToken = localStorage.getItem("token");

    if (userToken) {
      const { id, username } = decodeToken<TokenPayload>(userToken);

      dispatch(loginUserActionCreator({ id, username, token: userToken }));
    }
  }, [dispatch]);

  return { fetchToken };
};

export default useToken;
