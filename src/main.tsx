import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.tsx";
import View from "./pages/View.tsx";
import { MangaContextProvider } from "./contexts/mangaContext.tsx";
import ErrorPage from "./pages/errorPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "view",
        element: <View />,
        errorElement: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <MangaContextProvider>
            <RouterProvider router={router} />
        </MangaContextProvider>
    </React.StrictMode>
);
