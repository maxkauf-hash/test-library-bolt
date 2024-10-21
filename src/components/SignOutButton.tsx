import React from 'react';
import { signOut } from 'next-auth/react';
import { LogOut } from 'lucide-react';

interface SignOutButtonProps {
  className?: string;
}

const SignOutButton: React.FC<SignOutButtonProps> = ({ className = '' }) => {
  return (
    <button
      onClick={() => signOut()}
      className={`flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors ${className}`}
    >
      <LogOut className="w-5 h-5 mr-2" />
      Sign Out
    </button>
  );
};

export default SignOutButton;