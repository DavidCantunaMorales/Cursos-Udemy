import { useContext } from 'react';
import { Navigate } from 'react-router';

import { AuthContext } from '../auth/context/AuthContext';
import { useLocation } from 'react-router';

export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  const { pathname, search } = useLocation();

  const lastPath = pathname + search;
  localStorage.setItem('lastPath', lastPath);

  return logged ? children : <Navigate to='/login' />;
};
