import { createBrowserRouter } from "react-router-dom";

import Users from "./pages/Users";
import UserEdit, { userLoader } from "./pages/UserEdit";
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
    path: "/users/:userId",
    element: <UserEdit />,
    loader: userLoader,
  },
]);

export default router;
