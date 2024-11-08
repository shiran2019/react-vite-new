import { lazy } from "react";
import Loadable from "../components/Loadable/Loadable";

const NotFound = Loadable(
  lazy(() => import("../modules/pages/error/NotFound"))
);
const ErrorRoutes = {
  path: "*",
  element: <NotFound />,
};

export default ErrorRoutes;
