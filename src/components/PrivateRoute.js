import { Navigate } from 'react-router-dom';
import { getIsLoggedIn, getIsRefreshing } from '../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component, redirectTo }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
