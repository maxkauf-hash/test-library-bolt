import React from 'react';
import { AuthProvider, SignInButton, SignOutButton, useAuth, ProtectedRoute } from './index';

function App() {
  return (
    <AuthProvider session={null}> {/* Add session prop */}
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-8">React AuthJS Library Demo</h1>
        <div className="space-y-4">
          <SignInButton />
          <SignOutButton />
        </div>
        <ProtectedRoute>
          <ProtectedContent />
        </ProtectedRoute>
      </div>
    </AuthProvider>
  );
}

function ProtectedContent() {
  const { user } = useAuth();

  return (
    <div className="mt-8 p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Protected Content</h2>
      <p>Welcome, {user?.name || 'User'}!</p>
    </div>
  );
}

export default App;