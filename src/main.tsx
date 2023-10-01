import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.tsx";
import View from "./pages/View.tsx";
import { MangaContextProvider } from "./contexts/mangaContext.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "view",
        element: <View />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <MangaContextProvider>
            <RouterProvider router={router} />
        </MangaContextProvider>
    </React.StrictMode>
);
