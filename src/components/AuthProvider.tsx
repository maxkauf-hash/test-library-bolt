import React, { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

interface AuthProviderProps {
  children: ReactNode;
  session?: any; // Add this line
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default AuthProvider;