import { createBrowserRouter } from "react-router-dom";
import MainPage from "./main/mainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);

export default router;
