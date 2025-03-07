// filepath: /home/tijarim7/projet_open_class/projet_7_react/kasa/src/index.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx"; // Assurez-vous que le chemin est correct
import Error from "./pages/Error.jsx";
import About from "./pages/About.jsx";
import Hogar from "./pages/Hogar.jsx"; // Import du composant de détails
import '@fortawesome/fontawesome-free/css/all.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/flat",
    element: <h1>Appartements</h1>,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/detail/:id", // Route dynamique pour les détails d’un logement
    element: <Hogar />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);