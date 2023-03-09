import { renderHook } from "@testing-library/react";
import decodeToken from "jwt-decode";
import { act } from "react-dom/test-utils";
import Wrapper from "../../mocks/Wrapper";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";
import { User, UserCredentials } from "../../types/types";
import { TokenPayload } from "./types";
import useUser from "./useUser";

afterEach(() => {
  jest.clearAllMocks();
});

const mockDispatcher = jest.fn();

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppDispatch: () => mockDispatcher,
}));

jest.mock("jwt-decode", () => jest.fn());

jest.mock("node-fetch", () =>
  jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({ token: "mockToken" }),
  })
);

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
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );

      const mockUser: User = {
        ...mockTokenPayload,
        token: "mockToken",
      };

      await loginUser(userCredentials);

      expect(mockDispatcher).toHaveBeenCalledWith(
        loginUserActionCreator(mockUser)
      );
    });
  });
});
