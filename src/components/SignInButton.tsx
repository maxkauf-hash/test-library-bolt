import React from 'react';
import { signIn } from 'next-auth/react';
import { LogIn } from 'lucide-react';

interface SignInButtonProps {
  className?: string;
}

const SignInButton: React.FC<SignInButtonProps> = ({ className = '' }) => {
  return (
    <button
      onClick={() => signIn()}
      className={`flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors ${className}`}
    >
      <LogIn className="w-5 h-5 mr-2" />
      Sign In
    </button>
  );
};

export default SignInButton;