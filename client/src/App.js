import React from 'react';
import Profile from './components/Profile';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  // mock logic
  const isLoggedIn = true;
  const isManager = false;

  const mockUser = {
    name: "Jane Doe",
    email: "jane@example.com",
    public_profile: "Experienced frontend developer...",
  };

  const mockUsers = [mockUser];

  return (
    <div className="min-h-screen bg-gray-50">
      {isLoggedIn ? (
        isManager ? <Dashboard users={mockUsers} /> : <Profile user={mockUser} />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
