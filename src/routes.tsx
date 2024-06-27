import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GameDetails from "./pages/GameDetails";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement : <ErrorPage/>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/games/:slug", element: <GameDetails/> },
    ],
  },
]);

export default router;
