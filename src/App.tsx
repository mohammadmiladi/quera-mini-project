import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PublicRoutes from './routes/PublicRoutes'
import AppRoutes from './routes/AppRoutes'
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"
import { useAppDispatch } from './hooks/useAppDispatch';
import { useEffect } from 'react';
import { logout, setToken } from './services/auth/authSlice'

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const localStorageToken = localStorage.getItem('token');

    if (localStorageToken) {
      dispatch(setToken(localStorageToken))
    } else {
      dispatch(logout());
    }
  }, [])

  const router = createBrowserRouter([
    ...PublicRoutes.routes,
    {
      path: "/*",
      element: <PrivateRoute element={<AppRoutes />} />
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
