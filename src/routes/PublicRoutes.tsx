import { createBrowserRouter } from 'react-router-dom'

import Home from "../pages/home/Home"
import Login from '../pages/login/login'
import Register from '../pages/register/Register'

const PublicRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
])


export default PublicRoutes