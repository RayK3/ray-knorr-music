import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { MusicBase, Root, SoftwareBase } from "./routes";
import { ErrorPage } from "./pages";
import "./tailwind.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// remember this for later
// {
//   path: "/",
//   element: <Root />,
//   errorElement: <ErrorPage />,
//   children: [
//     {
//       path: "contacts/:contactId",
//       element: <Contact />,
//     },
//   ],
// },

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/music",
    element: <MusicBase />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sse",
    element: <SoftwareBase />,
    errorElement: <ErrorPage />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
