import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/servicos/:name", "routes/services.tsx"),
] satisfies RouteConfig;
