import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import {
  MusicBase,
  Root,
  SoftwareBase,
  MusicBio,
  MusicContact,
  MusicMedia,
  MusicShows,
} from "./routes";
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
    path: "/music/bio",
    element: <MusicBio />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/music/media",
    element: <MusicMedia />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/music/shows",
    element: <MusicShows />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/music/contact",
    element: <MusicContact />,
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
