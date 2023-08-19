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
    axios.put(`http://192.168.0.100:4004/room/${roomId}`, updatedRoomDetails)
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
      {/* ... edit room form and button ... */}
    </div>
  );
}

export default EditRoom;
