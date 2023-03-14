import { rest } from "msw";
import {
  backRouteUtils,
  frontRouteUtils,
} from "../utils/routeUtils/routeUtils";
import { mockPaintings, mockToken } from "../utils/testUtils/mockHardcodedData";

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL!;

const { loginEndpoint, paintingsEndpoint } = backRouteUtils;

export const handlers = [
  rest.post(`${apiUrl}${loginEndpoint}`, (req, res, ctx) => {
    return res(
      ctx.status(200),

      ctx.json({
        token: mockToken,
      })
    );
  }),

  rest.get(`${apiUrl}${paintingsEndpoint}`, (req, res, ctx) => {
    return res(
      ctx.status(200),

      ctx.json({
        paintings: mockPaintings,
      })
    );
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}${loginEndpoint}`, (req, res, ctx) => {
    return res(ctx.status(500));
  }),

  rest.get(`${apiUrl}${paintingsEndpoint}`, (req, res, ctx) => {
    return res(ctx.status(500));
  }),
];
