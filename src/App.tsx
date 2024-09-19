import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PublicRoutes from './routes/PublicRoutes'
import AppRoutes from './routes/AppRoutes'
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"

const isAuth = false;

const router = createBrowserRouter([
  ...PublicRoutes.routes,
  {
    path: "/*",
    element: <PrivateRoute element={<AppRoutes />} isAuthentication={isAuth} />
  }
])

const App: React.FC = () => {

  return (
    <RouterProvider router={router} />
  )
}

export default App
