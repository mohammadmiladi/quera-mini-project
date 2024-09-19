import { RouteObject, useRoutes } from "react-router-dom"

import Profile from '../pages/profile/Profile'
import Basket from '../pages/basket/Basket'

const routes: RouteObject[] = [
    {
        path: "/profile",
        element: <Profile />
    },
    {
        path: "/basket",
        element: <Basket />
    },

]


const AppRoutes: React.FC = () => {
    const element = useRoutes(routes)
    return element
}


export default AppRoutes