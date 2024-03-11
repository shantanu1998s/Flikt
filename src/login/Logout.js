// Logout.js
import React from 'react';

const Logout = ({ onLogout }) => {
  const handleLogout = () => {
    // Clear authenticated status from localStorage
    localStorage.removeItem('isAuthenticated');
    // Call onLogout callback passed from parent component
    onLogout();
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Logout</h2>
        <p className="mb-4">Are you sure you want to logout?</p>
        <button onClick={handleLogout} className="block w-full p-2 bg-red-500 text-white rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Logout;
