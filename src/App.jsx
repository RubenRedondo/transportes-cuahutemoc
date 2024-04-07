import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "/src/styles/normaliza.css";
import "/src/styles/fonts.css";
import Notfound from "./screens/404.jsx";
import Login from "./screens/login/login.screen.jsx";
import {AppOutlet} from "./components/layout/AppOutlet.jsx";
import {authLoader} from "./utils/loaders/authLoader.js";

const router = createBrowserRouter([
    
    {
        path: '/',
        element: <AppOutlet />,
        loader: authLoader,
    },
    {
        path: '/login',
        element: <Login/>,
        loader: authLoader
    },
    {
        path: '*',
        element: <Notfound/>,
    },
    
])

const App = () => {

  return (
    <RouterProvider router={router} />
  )
}

export default App
