import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import TamaPage from "./components/Works/TamaPage";
import Layout from "./Layout.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />, // Contenedor global con las animaciones
    children: [
      {
        path: "/", // Cuando la URL sea la raíz, muestra el Home (App)
        element: <App />,
      },
      {
        path: "/Tama", // Cuando la URL sea /Tama, muestra TamaPage
        element: <TamaPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
