import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export function PublicRoute({ children }) {
  const location = useLocation();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  console.log(children);
  console.log(isLoggedIn);
  console.log(location);

  const fromPage = location.state?.from?.pathname || '/';

  return <>{!isLoggedIn ? children : <Navigate to={fromPage} />}</>;
}
