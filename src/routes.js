import About from "./pages/about/About";
import Main from "./pages/main/Main";
import { ABOUT_ROUTE, MAIN_ROUTE } from "./utils/consts";

// export const adminRoutes = [
//   {
//     path: ADMIN_ROUTE,
//     Component: <Admin />,
//   },

// ];

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: <Main/>
  },
  {
    path: ABOUT_ROUTE,
    Component: <About/>
  }
]