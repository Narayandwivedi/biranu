import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    const API_URL = import.meta.env.VITE_API_URL;
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/api/admin/login`, { email, password });
      localStorage.setItem('adminToken', res.data.token);
      toast.success('Logged in successfully!');
      navigate('/adm/dashboard');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <button 
            onClick={async () => {
              const API_URL = import.meta.env.VITE_API_URL;
              try {
                const res = await axios.post(`${API_URL}/api/admin/seed`);
                toast.success(res.data.message);
              } catch (err) {
                toast.error(err.response?.data?.message || 'Seed failed');
              }
            }}
            className="text-sm text-gray-500 hover:underline"
          >
            Seed Default Admin (admin@biranu.com / admin123)
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
