// EditRoom.js

import React, { useState } from 'react';
import axios from 'axios';

function EditRoom() {
  
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


   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoomDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
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

  return (
    <div>
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
      <button onClick={() => handleEditRoom(roomDetails.room_number)} className="btn btn-primary">Edit Room</button>
     
    </div>
  );
}

export default EditRoom;
