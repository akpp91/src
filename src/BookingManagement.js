import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookingManagement() {
  const [bookings, setBookings] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    handleViewBookings();
  }, []);

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
    <div>
      <h2>Booking Management</h2>

      <h3>All Bookings:</h3>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.reservation_id}>
            User ID: {booking.user_id}, Room Number: {booking.room_number}, 
            Check-in Date: {booking.check_in_date}, Check-out Date: {booking.check_out_date}
          </li>
        ))}
      </ul>

      <div>{message}</div>
    </div>
  );
}

export default BookingManagement;
