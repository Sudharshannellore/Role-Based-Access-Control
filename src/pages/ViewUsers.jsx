import React, { useState } from "react";
import "../style/pages/ViewUsers.css";
import Button from "../components/Button";
import Header from "../components/Header";

const ViewUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, firstname: "John", lastname: "Doe", email: "john@example.com", role: "Analyst" },
    { id: 2, firstname: "Jane", lastname: "Smith", email: "jane@example.com", role: "Developer" },
    { id: 3, firstname: "Alice", lastname: "Brown", email: "alice@example.com", role: "Tester" },
    { id: 4, firstname: "Tony", lastname: "Stark", email: "tony@example.com", role: "Designer" },
  ]);

  const roles = ["Human Resource", "Analyst", "Designer", "Tester","Developer","Support"];

  const handleRoleChange = (id, newRole) => {
    setUsers(users.map(user => (user.id === id ? { ...user, role: newRole } : user)));
  };

  const handleDelete = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleUpdate = id => {
    alert(`Updated details for user ID: ${id}`);
  };

  return (
    <>
    <Header/>
    <div className="table-container">
      <h2>Users</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>
                <select
                  value={user.role}
                  onChange={e => handleRoleChange(user.id, e.target.value)}
                >
                  {roles.map(role => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <Button button = {'Update'} className="update-btn" onClick={() => handleUpdate(user.id)}/>
                <Button button = {'Delete'} className="delete-btn" onClick={() => handleDelete(user.id)}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default ViewUsers;
