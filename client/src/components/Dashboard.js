import React from 'react';

export default function Dashboard({ users }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Team Member Updates</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Last Update</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.email}>
              <td className="border p-2">{u.name}</td>
              <td className="border p-2">{u.email}</td>
              <td className="border p-2">2 days ago</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
