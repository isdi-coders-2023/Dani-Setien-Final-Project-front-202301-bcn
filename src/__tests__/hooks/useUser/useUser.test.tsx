import { renderHook } from "@testing-library/react";
import decodeToken from "jwt-decode";
import { act } from "react-dom/test-utils";
import { store } from "../../../store";
import { loginUserActionCreator } from "../../../store/features/userSlice/userSlice";
import { User, UserCredentials } from "../../../types/userTypes";
import { TokenPayload } from "../../../hooks/useUser/types";
import useUser from "../../../hooks/useUser/useUser";
import Wrapper from "../../../utils/testUtils/Wrapper";
import { mockToken } from "../../../utils/testUtils/mockHardcodedData";

beforeAll(() => {
  jest.clearAllMocks();
});

afterEach(() => {
  jest.clearAllMocks();
});

jest.mock("jwt-decode", () => jest.fn());

jest.mock("next/router", () => require("next-router-mock"));

const mockDispatcher = jest.spyOn(store, "dispatch");

const userCredentials: UserCredentials = {
  email: "felix@bauhaus.com",
  password: "admin1234",
};

const mockTokenPayload: TokenPayload = {
  id: "2",
  username: "felixBauhaus",
};

describe("Given a loginUser function", () => {
  describe("When it is called with an email 'felix@bauhaus.com' and a password 'admin1234'", () => {
    test("Then it should log in the user", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: Wrapper,
      });

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );

      const mockUser: User = {
        ...mockTokenPayload,
        token: mockToken,
      };

      await act(async () => loginUser(userCredentials));

      expect(mockDispatcher).toHaveBeenCalledWith(
        loginUserActionCreator(mockUser)
      );
    });
  });
});
