import { Navigate } from "react-router-dom";
import { useAppSelector } from '../../hooks/useAppSelector';

interface PrivateRouteProps {
    element: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
    const { token } = useAppSelector((state) => state.auth);

    return (
        token ? element : <Navigate to="/login" />
    )
}

export default PrivateRoute