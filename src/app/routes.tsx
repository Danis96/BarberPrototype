import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Barbers } from "./pages/Barbers";
import { Booking } from "./pages/Booking";
import { Gallery } from "./pages/Gallery";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "barbers", Component: Barbers },
      { path: "booking", Component: Booking },
      { path: "gallery", Component: Gallery },
    ],
  },
]);
