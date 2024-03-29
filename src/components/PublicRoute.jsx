import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return !isLoggedIn ? children : <Navigate to={'/userinfo'} />;
};

export default PublicRoute;
