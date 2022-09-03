import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from '../redux/auth/authSelectors';

const PublicRoute = ({ children, restricted = false }) => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shouldNavigate = isLoggedIn && restricted;
    return shouldNavigate ? <Navigate to="/contacts" /> : children;
}
export default PublicRoute;