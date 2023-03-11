import { renderHook } from "@testing-library/react";
import decodeToken from "jwt-decode";
import { act } from "react-dom/test-utils";
import useToken from "../../../hooks/useToken/useToken";
import { TokenPayload } from "../../../hooks/useUser/types";
import { store } from "../../../store";
import { loginUserActionCreator } from "../../../store/features/userSlice/userSlice";
import { User } from "../../../types/userTypes";
import Wrapper from "../../../utils/testUtils/Wrapper";

jest.mock("jwt-decode", () => jest.fn());

const mockDispatcher = jest.spyOn(store, "dispatch");

const mockTokenPayload: TokenPayload = {
  id: "2",
  username: "felixBauhaus",
};

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given a fetchToken function", () => {
  describe("When it is called to fetch an exisiting user's token", () => {
    test("Then it should log in the user", async () => {
      const token = "mockToken";

      const {
        result: {
          current: { fetchToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: Wrapper,
      });

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );

      const mockUser: User = {
        ...mockTokenPayload,
        token,
      };

      window.localStorage.setItem("token", token);

      await act(async () => fetchToken());

      expect(mockDispatcher).toHaveBeenCalledWith(
        loginUserActionCreator(mockUser)
      );
    });
  });
});
