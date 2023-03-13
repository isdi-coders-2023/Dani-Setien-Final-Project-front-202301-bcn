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

describe("Given a removeToken function", () => {
  describe("When it is called to delete a token", () => {
    test("Then it should delete said token", async () => {
      const token = "mockToken";
      const emptyLocalStorageValue = 0;

      const {
        result: {
          current: { removeToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: Wrapper,
      });

      window.localStorage.setItem("token", token);

      await act(async () => removeToken());

      const expectedEmptyLocalStorage = window.localStorage.length;

      expect(expectedEmptyLocalStorage).toBe(emptyLocalStorageValue);
    });

    test("Then it should log out the user", async () => {
      const {
        result: {
          current: { removeToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: Wrapper,
      });

      await act(async () => removeToken());

      expect(mockDispatcher).toHaveBeenCalled();
    });
  });
});
