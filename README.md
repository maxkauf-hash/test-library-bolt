# React AuthJS Library

A simple and flexible authentication library for React applications, built on top of NextAuth.js.

## Installation

To install the React AuthJS Library, run the following command in your project directory:

```bash
npm install react-authjs-library
```

## Usage

### 1. Wrap your application with AuthProvider

First, wrap your main application component with the `AuthProvider`:

```jsx
import { AuthProvider } from 'react-authjs-library';

function App() {
  return (
    <AuthProvider>
      {/* Your app components */}
    </AuthProvider>
  );
}
```

### 2. Use authentication components

The library provides several components and hooks for managing authentication:

#### SignInButton

```jsx
import { SignInButton } from 'react-authjs-library';

function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <SignInButton />
    </div>
  );
}
```

#### SignOutButton

```jsx
import { SignOutButton } from 'react-authjs-library';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <SignOutButton />
    </div>
  );
}
```

#### ProtectedRoute

Wrap components that require authentication with `ProtectedRoute`:

```jsx
import { ProtectedRoute } from 'react-authjs-library';

function PrivateContent() {
  return (
    <ProtectedRoute>
      <h2>This content is only visible to authenticated users</h2>
    </ProtectedRoute>
  );
}
```

### 3. Access authentication state

Use the `useAuth` hook to access the current authentication state:

```jsx
import { useAuth } from 'react-authjs-library';

function UserProfile() {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <div>Loading...</div>;
  if (!isAuthenticated) return <div>Please sign in</div>;

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      {/* Display user profile information */}
    </div>
  );
}
```

## Configuration

To configure the authentication providers and options, you need to set up NextAuth.js in your project. Refer to the [NextAuth.js documentation](https://next-auth.js.org/configuration/providers) for detailed instructions on how to configure various authentication providers.

## Important Notes

1. This library is a wrapper around NextAuth.js, so you'll need to configure NextAuth.js separately in your project.
2. Ensure you have the necessary backend setup to handle authentication requests.
3. The current implementation is designed for client-side usage. For server-side rendering or more advanced configurations, refer to the NextAuth.js documentation.

## Customization

You can customize the appearance of the `SignInButton` and `SignOutButton` components by passing a `className` prop:

```jsx
<SignInButton className="my-custom-button-class" />
<SignOutButton className="my-custom-button-class" />
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.