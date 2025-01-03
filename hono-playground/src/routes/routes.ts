import { Hono } from "hono";

const routes = new Hono();

routes.get("/", async (ctx) => {
  return ctx.text("Hello Hono!");
});

export default routes;
