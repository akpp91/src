import React from "react";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
    // debugger;
  const [bookings, setBookings] = useState([]);
  const [userIdInput, setUserIdInput] = useState("");
  const [userDetails, setUserDetails] = useState(null);
  const [roomDetails, setRoomDetails] = useState({
    room_number: '',
    room_type: '',
    capacity: '',
    price_per_night: '',
    images: '',
    ac_non_ac: '',
    bed_type: '',
    room_size: ''
  });
  const [message, setMessage] = useState("");
  const history = Navigate();

  const handleLogout = () => {
    console.log("Admin logged out!");
    history.push("/admin");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoomDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleAddRoom = () => {
    axios.post('http://192.168.0.104:4000/room/addroom', roomDetails)
      .then(response => {
        console.log('Room added successfully:', response.data);
        showMessage("Room added successfully!", 3000);
      })
      .catch(error => {
        console.error('Failed to add room:', error);
        showMessage("Failed to add room. Please try again.", 3000);
      });
    console.log("Room added!");
  };

  const handleEditRoom = (roomId) => {
    console.log("Editing room with ID:", roomId);
    const updatedRoomDetails = {
      room_number: roomDetails.room_number,
      room_type: roomDetails.room_type,
      capacity: roomDetails.capacity,
      price_per_night: roomDetails.price_per_night,
      images: roomDetails.images,
      ac_non_ac: roomDetails.ac_non_ac,
      bed_type: roomDetails.bed_type,
      room_size: roomDetails.room_size
    };
    axios.put(`http://192.168.0.104:4000/room/${roomId}`, updatedRoomDetails)
      .then(response => {
        console.log(response)
        console.log("Room updated successfully!");
        showMessage("Room edited successfully!", 3000);
      })
      .catch(error => {
        console.log(error)
        console.log("Error occurred while updating room:", error);
        showMessage("failed to update Room, try again!", 3000);
      });
  };


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

  const handleViewBookings = async () => {
    try {
      const response = await axios.get("http://192.168.0.104:4000/reservation/bookings");
      const bookingsData = response.data.data;
      setBookings(bookingsData);
      console.log("Viewing all bookings:");
      console.log(bookings);
    } catch (error) {
      console.log("Error occurred while retrieving bookings:", error);
    }
    console.log("Viewing all bookings");
  };

  return (
    <div className="container">
      <h2>Welcome, Admin!</h2>
      
      
     

      <h3>Room Management</h3>
      <div>{message}</div>

      <div className="mb-3">
        <label htmlFor="room_number" className="form-label">Room Number:</label>
        <input type="number" name="room_number" className="form-control" placeholder="int" value={roomDetails.room_number} onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="room_type" className="form-label">Room Type:</label>
        <input type="text" name="room_type" className="form-control" value={roomDetails.room_type} onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="capacity" className="form-label">Capacity:</label>
        <input type="number" name="capacity" className="form-control" placeholder="int" value={roomDetails.capacity} onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="price_per_night" className="form-label">Price per Night:</label>
        <input type="number" name="price_per_night" className="form-control" placeholder="int" value={roomDetails.price_per_night} onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="images" className="form-label">Images:</label>
        <input type="text" name="images" className="form-control" value={roomDetails.images} onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="ac_non_ac" className="form-label">AC/Non-AC:</label>
        <input type="text" name="ac_non_ac" className="form-control" value={roomDetails.ac_non_ac} onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="bed_type" className="form-label">Bed Type:</label>
        <input type="text" name="bed_type" className="form-control" value={roomDetails.bed_type} onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="room_size" className="form-label">Room Size:</label>
        <input type="text" name="room_size" className="form-control" value={roomDetails.room_size} onChange={handleInputChange} />
      </div>
      <button type="button" onClick={handleAddRoom} className="btn btn-primary">Add Room</button>
      <button onClick={() => handleEditRoom(roomDetails.room_number)} className="btn btn-primary">Edit Room</button>
     

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

      <h3>Booking Management</h3>
      <button onClick={handleViewBookings} className="btn btn-primary">View Bookings</button>

      <h3>Bookings:</h3>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.reservation_id}>
            User ID: {booking.user_id}, Room Number: {booking.room_number}, Check-in Date: {booking.check_in_date}, Check-out Date: {booking.check_out_date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
