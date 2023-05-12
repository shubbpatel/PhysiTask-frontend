import React, { useState, useEffect } from 'react';
import { useRedirectIfNotLoggedIn } from '../../useRedirectIfNotLoggedIn';
import { getUsers, deleteUser } from '../services/admin';
import '../styles/admin-dashboard.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  // useRedirectIfNotLoggedIn()

  useEffect(() => {
    const fetchData = async () => {
      const usersData = await getUsers();
      setUsers(usersData);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const success = await deleteUser(id);
    if (success) {
      setUsers(users.filter((user) => user.id !== id));
    } else {
      alert('Failed to delete user. Please try again.');
    }
  };

  return (
    <div className="admin-dashboard-container">
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
