import React, { ReactNode } from 'react';
import { useSession } from 'next-auth/react';

interface ProtectedRouteProps {
  children: ReactNode;
  fallback?: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, fallback = null }) => {
  const { status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'unauthenticated') {
    return fallback;
  }

  return <>{children}</>;
};

export default ProtectedRoute;