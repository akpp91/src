import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [userIdInput, setUserIdInput] = useState('');
  const [userDetails, setUserDetails] = useState(null);
  const [message, setMessage] = useState('');

  const showMessage = (message, duration) => {
    setMessage(message);
    setTimeout(() => {
      setMessage("");
    }, duration);
  };


  const handleViewUserDetails = async () => {
    try {
      const response = await axios.get(`http://192.168.0.104:4000/user/${userIdInput}`);
      const userData = response.data.data;
      setUserDetails(userData);
      console.log("Viewing user details for user ID:", userIdInput);
      console.log(userDetails);
    } catch (error) {
      console.log("Error occurred while retrieving user details:", error);
    }
  };

  const handleUserIdInputChange = (e) => {
    setUserIdInput(e.target.value);
  };

  return (
    <div>
      <h3>User Management</h3>
      <h4>Enter user ID:</h4>
      <input type="number" value={userIdInput} onChange={handleUserIdInputChange} className="form-control" />
      <button onClick={() => handleViewUserDetails()} className="btn btn-primary">View User Details</button>

      {userDetails && (
        <div>
          <h4>User Details:</h4>
          <p>User ID: {userDetails.user_id}</p>
          <p>First Name: {userDetails.firstName}</p>
          <p>Last Name: {userDetails.lastName}</p>
          <p>Email: {userDetails.email}</p>
          <p>Phone Number: {userDetails.phoneNumber}</p>
        </div>
      )}
    </div>
  );
}

export default UserManagement;
