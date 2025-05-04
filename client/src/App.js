// src/App.js
import React, { useState } from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isManager, setIsManager] = useState(false);

  const mockUser = {
    name: 'Jane Doe',
    email: 'jane@example.com',
    public_profile: 'Experienced frontend developer...',
    private_profile: 'Working on React HR app...'
  };

  const mockUsers = [mockUser];

  return (
    <div className="min-h-screen bg-gray-50">
      {isLoggedIn ? (
        isManager ? <Dashboard users={mockUsers} /> : <Profile user={mockUser} />
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App; // ✅ This line is required!
