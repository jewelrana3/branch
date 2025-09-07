import App from "@/App";
import Dashboard from "@/components/Dashboard";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [{ path: "", element: <Dashboard /> }],
  },
]);

export default router;
