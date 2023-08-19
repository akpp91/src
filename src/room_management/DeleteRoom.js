// DeleteRoom.js

import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function DeleteRoom() {
  const [roomIdToDelete, setRoomIdToDelete] = useState('');
  const [message, setMessage] = useState('');
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

  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoomDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleDeleteRoom = (roomId) => {
    console.log("Deleting room with ID:", roomId);
    axios.delete(`http://192.168.0.104:4000/room/${roomId}`)
      .then(response => {
        console.log(response)
        console.log("Room deleted successfully!");
        showMessage("Room deleted successfully!", 3000)
      })
      .catch(error => {
        console.log(error)
        showMessage("Error occurred while deleting room:", 3000)
      });
  };

  const showMessage = (message, duration) => {
    setMessage(message);
    setTimeout(() => {
      setMessage("");
    }, duration);
  };


  return (
    <div>
        <div className="mb-3">
        <label htmlFor="room_number" className="form-label">Room Number:</label>
        <input type="number" name="room_number" className="form-control" placeholder="int" value={roomDetails.room_number} onChange={handleInputChange} />
      </div>
      <button onClick={() => handleDeleteRoom(roomDetails.room_number)} className="btn btn-danger">Delete Room</button>
    </div>
  );
}

export default DeleteRoom;
