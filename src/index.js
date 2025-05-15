import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import router from "./routes";
import GlobalStyles from "./styles/globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </SnackbarProvider>
  </React.StrictMode>
);
