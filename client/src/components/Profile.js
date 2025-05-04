import React, { useState } from 'react';
import axios from 'axios';

export default function Profile({ user }) {
  const [publicProfile, setPublicProfile] = useState(user.public_profile);
  const [privateProfile, setPrivateProfile] = useState(user.private_profile);

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:3000/users/${user.id}`, {
        field: 'public_profile',
        newValue: publicProfile,
      });

      await axios.put(`http://localhost:3000/users/${user.id}`, {
        field: 'private_profile',
        newValue: privateProfile,
      });

      alert('Profile updated successfully!');
    } catch (err) {
      console.error(err);
      alert('Error saving profile');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Edit Your Profile</h1>

      <label className="block font-semibold mb-2">Public Profile</label>
      <textarea
        className="w-full h-32 p-3 border rounded mb-4"
        value={publicProfile}
        onChange={(e) => setPublicProfile(e.target.value)}
      />

      <label className="block font-semibold mb-2">Private Notes</label>
      <textarea
        className="w-full h-32 p-3 border rounded mb-4"
        value={privateProfile}
        onChange={(e) => setPrivateProfile(e.target.value)}
      />

      <button
        onClick={handleSave}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </div>
  );
}
