import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ReactDOM from "react-dom/client";
import App from "./main/app/App.tsx";
import ProjectsWeb1 from "./main/pages/ProjectsWeb/ProjectsWeb.tsx";
import SoftwareWeb from "./main/pages/SoftwareWeb/SoftwareWeb.tsx";
import Technology from "./main/pages/Technology/Technology.tsx";
import ArtificialIntelligence from "./main/pages/ArtificialIntelligence/ArtificialIntelligence.tsx";
import ProjectsWeb2 from "./main/pages/ProjectsWeb/ProjectsWeb2.tsx";
import ProjectsAI1 from "./main/pages/ProjectsAI/ProjectsAI1.tsx";
import ProjectsAI2 from "./main/pages/ProjectsAI/ProjectsAI2.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ArtificialIntelligence",
    element: <ArtificialIntelligence />,
  },
  {
    path: "/SoftwareWeb",
    element: <SoftwareWeb />,
  },
  {
    path: "/Technology",
    element: <Technology />,
  },
  {
    path: "/ProjectsWeb1",
    element: <ProjectsWeb1 />,
  },
  {
    path: "/ProjectsWeb2",
    element: <ProjectsWeb2 />,
  },
  {
    path: "/ProjectsAI1",
    element: <ProjectsAI1 />,
  },
  {
    path: "/ProjectsAI2",
    element: <ProjectsAI2 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
