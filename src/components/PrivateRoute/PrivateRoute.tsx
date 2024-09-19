import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
    element: JSX.Element;
    isAuthentication: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, isAuthentication }) => {
    return (
        isAuthentication ? element : <Navigate to="/login" />
    )
}

export default PrivateRoute