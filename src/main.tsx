import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MangaContextProvider } from './contexts/mangaContext.tsx'
import './index.css'
import ErrorPage from './pages/errorPage.tsx'
import Home from './pages/Home.tsx'
import View from './pages/View.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: 'view',
        element: <View />,
        errorElement: <ErrorPage />,
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MangaContextProvider>
            <RouterProvider router={router} />
        </MangaContextProvider>
    </React.StrictMode>
)
