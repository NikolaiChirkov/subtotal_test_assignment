import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { HomePage } from "./pages";
import "@styles/global.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export const App: React.FC = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
