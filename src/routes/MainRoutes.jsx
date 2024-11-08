import { lazy } from "react";
import Loadable from "../components/Loadable/Loadable";

// utilities routing
const Test = Loadable(lazy(() => import("../modules/pages/test/Test")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  
  path: "/test",
  element: <Test />,
  // children: [
  //   {
  //     path: 'default',
  //     element:
  //   },

  // ]
};

export default MainRoutes;
