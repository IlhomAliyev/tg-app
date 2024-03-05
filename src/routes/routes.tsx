import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../AppLayout";
import { MainPage } from "../pages/MainPage/MainPage";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";

export const routes = [
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
];

export const appRouter = createBrowserRouter(routes);
