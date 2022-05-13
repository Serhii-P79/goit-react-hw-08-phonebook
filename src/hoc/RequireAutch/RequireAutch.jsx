import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export function RequireAutch({ children }) {
  const location = useLocation();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  console.log(children);
  console.log(isLoggedIn);
  console.log(location);

  return (
    <>
      {isLoggedIn ? (
        children
      ) : (
        <Navigate to="/login" state={{ from: location }} />
      )}
    </>
  );
}
