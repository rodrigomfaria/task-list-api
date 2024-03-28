import { Router } from "express";

const routes = new Router();

routes.get("/teste", (req, res) =>
  res.json({ message: "Hello World", status: 200 })
);

export default routes;
