import { createBrowserRouter } from "react-router-dom";

import Users from "./pages/Users";
import SignIn from "./pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
]);

export default router;
