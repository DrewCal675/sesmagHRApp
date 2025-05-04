import React, { useState } from 'react';

export default function Profile({ user }) {
  const [publicProfile, setPublicProfile] = useState(user?.public_profile || "");

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Edit Your Profile</h1>
      <textarea
        className="w-full h-40 p-4 border rounded mb-4"
        value={publicProfile}
        onChange={(e) => setPublicProfile(e.target.value)}
      />
      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Save
      </button>
    </div>
  );
}
