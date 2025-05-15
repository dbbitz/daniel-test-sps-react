import { createBrowserRouter } from "react-router-dom";

import Users from "./pages/Users";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/users",
    element: (
      <PrivateRoute>
        <Users />
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: <SignIn />,
  },
]);

export default router;
