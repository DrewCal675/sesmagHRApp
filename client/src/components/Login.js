import React from 'react';

export default function Login({ setIsLoggedIn }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="p-6 bg-white rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input className="w-full p-2 border rounded mb-3" type="email" placeholder="Email" />
        <input className="w-full p-2 border rounded mb-3" type="password" placeholder="Password" />
        <button
  className="w-full bg-blue-600 text-white py-2 rounded"
  onClick={() => setIsLoggedIn(true)}
>
  Log In
</button>

      </div>
    </div>
  );
}