import { JwtPayload } from "jwt-decode";

export interface backLoginResponse {
  token: string;
}

export interface TokenPayload extends JwtPayload {
  id: string;
  username: string;
}
