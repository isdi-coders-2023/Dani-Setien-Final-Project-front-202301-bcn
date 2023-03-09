import { User, UserState } from "../../../types/types";
import {
  initialUserState,
  loginUserActionCreator,
  userReducer,
} from "./userSlice";

export {};

describe("Given a loginUser function", () => {
  describe("When it receives a user", () => {
    test("Then it should set the user's isLogged property to true", () => {
      const mockUser: User = {
        id: "1",
        token: "token",
        username: "felixBauhaus",
      };

      const expectedMockUserState: UserState = {
        id: "1",
        token: "token",
        username: "felixBauhaus",
        isLogged: true,
      };

      const loginUserAction = loginUserActionCreator(mockUser);

      const updatedUserState = userReducer(initialUserState, loginUserAction);

      expect(updatedUserState).toStrictEqual(expectedMockUserState);
    });
  });
});
