import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Axios } from "axios";

const AddRoom = () => {
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
   
    const handleAddRoom = () => {
        Axios.post('http://192.168.0.105:4004/room/addroom', roomDetails)
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

      const showMessage = (message, duration) => {
        setMessage(message);
        setTimeout(() => {
          setMessage("");
        }, duration);
      };
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRoomDetails((prevDetails) => ({
          ...prevDetails,
          [name]: value
        }));
      };

      return(<>
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
      </>);
}

export default AddRoom;