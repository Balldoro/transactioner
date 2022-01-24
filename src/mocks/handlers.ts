import { rest } from "msw";
import category_JSON from "./json/category";
import categories_JSON from "./json/categories";
import friends_JSON from "./json/friends";
import groups_JSON from "./json/groups";

const DELAY = 500;

export const handlers = [
  rest.get("/categories", (_, res, ctx) =>
    res(ctx.status(200), ctx.json(categories_JSON))
  ),

  rest.get("/categories/:categoryId", (_, res, ctx) =>
    res(ctx.status(200), ctx.json(category_JSON), ctx.delay(DELAY))
  ),

  rest.get("/friends", (_, res, ctx) =>
    res(ctx.status(200), ctx.json(friends_JSON), ctx.delay(DELAY))
  ),

  rest.get("/groups", (_, res, ctx) =>
    res(ctx.status(200), ctx.json(groups_JSON), ctx.delay(DELAY))
  ),
];
